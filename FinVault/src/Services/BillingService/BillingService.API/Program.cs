using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MassTransit;
using Serilog;
using BillingService.Application.Behaviours;
using BillingService.Domain.Interfaces;
using BillingService.Domain.Interfaces.Repositories;
using BillingService.Infrastructure.Messaging.Publishers;
using BillingService.Infrastructure.Messaging.Consumers;
using BillingService.Infrastructure.Persistence;
using BillingService.Infrastructure.Persistence.Repositories;
using BillingService.API.Middleware;
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
        typeof(BillingService.Application.Commands.GenerateBill
            .GenerateBillCommand).Assembly));

// FluentValidation
builder.Services.AddValidatorsFromAssembly(
    typeof(BillingService.Application.Commands.GenerateBill
        .GenerateBillValidator).Assembly);

// Validation Pipeline Behaviour (runs validators before every handler)
builder.Services.AddTransient(
    typeof(IPipelineBehavior<,>),
    typeof(ValidationPipelineBehaviour<,>));

// EF Core + SQL Server
builder.Services.AddDbContext<BillingDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// DI — Repositories
builder.Services.AddScoped<IBillRepository, BillRepository>();
builder.Services.AddScoped<IPaymentScheduleRepository, PaymentScheduleRepository>();
builder.Services.AddScoped<IRewardAccountRepository, RewardAccountRepository>();
builder.Services.AddScoped<IRewardTransactionRepository, RewardTransactionRepository>();
builder.Services.AddScoped<IRewardTierRepository, RewardTierRepository>();

// DI — Services
builder.Services.AddScoped<IEventPublisher, EventPublisher>();

// MassTransit + RabbitMQ (Billing Service PUBLISHES and CONSUMES)
builder.Services.AddMassTransit(cfg =>
{
    cfg.AddConsumer<PaymentCompletedConsumer>();

    cfg.UsingRabbitMq((ctx, rmq) =>
    {
        rmq.Host(builder.Configuration["RabbitMQ:Host"], h =>
        {
            h.Username(builder.Configuration["RabbitMQ:Username"]!);
            h.Password(builder.Configuration["RabbitMQ:Password"]!);
        });
        rmq.ReceiveEndpoint("billing-payment-completed", e =>
        {
            e.ConfigureConsumer<PaymentCompletedConsumer>(ctx);
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
        Title = "FinVault — Billing Service",
        Version = "v1",
        Description = "Bill Management, Payment Schedules & Rewards API",
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
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Billing Service v1");
    c.RoutePrefix = "swagger"; // http://localhost:5003/swagger
    c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.List);
});

// Auto-run EF Core migrations on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<BillingDbContext>();
    db.Database.Migrate();
}

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "billing-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();
