using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MassTransit;
using Serilog;
using NotificationService.Application.Behaviours;
using NotificationService.Domain.Interfaces;
using NotificationService.Domain.Interfaces.Repositories;
using NotificationService.Infrastructure.Messaging.Publishers;
using NotificationService.Infrastructure.Messaging.Consumers;
using NotificationService.Infrastructure.Persistence;
using NotificationService.Infrastructure.Persistence.Repositories;
using NotificationService.API.Middleware;
using MediatR;
using FluentValidation;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

var builder = WebApplication.CreateBuilder(args);

// Serilog structured logging
builder.Host.UseSerilog((ctx, cfg) =>
    cfg.ReadFrom.Configuration(ctx.Configuration).WriteTo.Console());

// Controllers
builder.Services.AddControllers();

// MediatR — scans Application assembly for all handlers
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(
        typeof(NotificationService.Application.Commands.MarkNotificationRead
            .MarkNotificationReadCommand).Assembly));

// FluentValidation
builder.Services.AddValidatorsFromAssembly(
    typeof(NotificationService.Application.Commands.MarkNotificationRead
        .MarkNotificationReadCommand).Assembly);

// Validation Pipeline Behaviour (runs validators before every handler)
builder.Services.AddTransient(
    typeof(IPipelineBehavior<,>),
    typeof(ValidationPipelineBehaviour<,>));

// EF Core + SQL Server
builder.Services.AddDbContext<NotificationDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// DI — Repositories
builder.Services.AddScoped<INotificationRepository, NotificationRepository>();
builder.Services.AddScoped<INotificationPreferenceRepository, NotificationPreferenceRepository>();

// DI — Services
builder.Services.AddScoped<IEventPublisher, EventPublisher>();

// MassTransit + RabbitMQ (Notification Service CONSUMES 8 event types)
builder.Services.AddMassTransit(cfg =>
{
    cfg.AddConsumer<UserRegisteredConsumer>();
    cfg.AddConsumer<PasswordResetRequestedConsumer>();
    cfg.AddConsumer<PaymentCompletedConsumer>();
    cfg.AddConsumer<PaymentFailedConsumer>();
    cfg.AddConsumer<FraudDetectedConsumer>();
    cfg.AddConsumer<BillDueReminderConsumer>();
    cfg.AddConsumer<RewardEarnedConsumer>();
    cfg.AddConsumer<CardExpirySoonConsumer>();
    cfg.AddConsumer<ExternalBillPaidConsumer>();

    cfg.UsingRabbitMq((ctx, rmq) =>
    {
        rmq.Host(builder.Configuration["RabbitMQ:Host"], h =>
        {
            h.Username(builder.Configuration["RabbitMQ:Username"]!);
            h.Password(builder.Configuration["RabbitMQ:Password"]!);
        });
        rmq.ReceiveEndpoint("notification-user-registered", e =>
        {
            e.ConfigureConsumer<UserRegisteredConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-password-reset-requested", e =>
        {
            e.ConfigureConsumer<PasswordResetRequestedConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-payment-completed", e =>
        {
            e.ConfigureConsumer<PaymentCompletedConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-payment-failed", e =>
        {
            e.ConfigureConsumer<PaymentFailedConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-fraud-detected", e =>
        {
            e.ConfigureConsumer<FraudDetectedConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-bill-due-reminder", e =>
        {
            e.ConfigureConsumer<BillDueReminderConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-reward-earned", e =>
        {
            e.ConfigureConsumer<RewardEarnedConsumer>(ctx);
        });
        rmq.ReceiveEndpoint("notification-card-expiry-soon", e =>
        {
            e.ConfigureConsumer<CardExpirySoonConsumer>(ctx);
        });

        rmq.ReceiveEndpoint("notification-external-bill-paid", e =>
        {
            e.ConfigureConsumer<ExternalBillPaidConsumer>(ctx);
        });
    });
});

// JWT Authentication (same secret key as identity-service — all services share JWT)
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opts =>
    {
        opts.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]!))
        };
    });
builder.Services.AddAuthorization();

// CORS
builder.Services.AddCors(opt =>
    opt.AddPolicy("FinVaultPolicy", p =>
        p.WithOrigins("http://localhost:4200", "http://localhost:5000")
        .AllowAnyMethod().AllowAnyHeader().AllowCredentials()));

// Swagger / OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "FinVault — Notification Service",
        Version = "v1",
        Description = "Notification Management & Event Consumer API",
        Contact = new OpenApiContact { Name = "FinVault Team" }
    });

    // Add JWT Bearer auth to Swagger UI
    var jwtScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Enter your JWT token. Example: eyJhbGci...",
        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };
    c.AddSecurityDefinition(jwtScheme.Reference.Id, jwtScheme);
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { jwtScheme, Array.Empty<string>() }
    });

    // Use XML comments on controller methods as Swagger descriptions
    var xmlFile = $"{System.Reflection.Assembly
        .GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (File.Exists(xmlPath)) c.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

// Middleware pipeline (ORDER MATTERS!)
app.UseMiddleware<ExceptionMiddleware>(); // 1. Global error handler — first always
app.UseSerilogRequestLogging();           // 2. Log every HTTP request
app.UseCors("FinVaultPolicy");            // 3. CORS headers
app.UseAuthentication();                  // 4. Parse JWT — MUST be before Authorization
app.UseAuthorization();                   // 5. Enforce [Authorize] attributes

// Swagger UI — always on (for dev), protect in prod
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Notification Service v1");
    c.RoutePrefix = "swagger"; // http://localhost:5005/swagger
    c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.List);
});

// Auto-run EF Core migrations on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<NotificationDbContext>();
    db.Database.Migrate();
}

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "notification-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();
