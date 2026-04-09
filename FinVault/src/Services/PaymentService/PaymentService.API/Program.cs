using System.IdentityModel.Tokens.Jwt;
using PaymentService.Infrastructure.Services;
using FluentValidation;
using MassTransit;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PaymentService.API.Middleware;
using PaymentService.Application.Behaviours;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using PaymentService.Infrastructure.Messaging.Publishers;
using PaymentService.Infrastructure.Persistence;
using PaymentService.Infrastructure.Persistence.Repositories;
using PaymentService.Infrastructure.Services;
using Serilog;
using System.Text;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((ctx, cfg) =>
    cfg.ReadFrom.Configuration(ctx.Configuration).WriteTo.Console());

builder.Services.AddControllers();

// MediatR
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(
        typeof(PaymentService.Application.Commands.InitiatePayment.InitiatePaymentCommand).Assembly));

// FluentValidation
builder.Services.AddValidatorsFromAssembly(
    typeof(PaymentService.Application.Commands.InitiatePayment.InitiatePaymentValidator).Assembly);
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehaviour<,>));

// EF Core
builder.Services.AddDbContext<PaymentDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Repositories
builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
builder.Services.AddScoped<IPaymentSagaRepository, PaymentSagaRepository>();
builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();
builder.Services.AddScoped<IRiskScoreRepository, RiskScoreRepository>();
builder.Services.AddScoped<IFraudAlertRepository, FraudAlertRepository>();
builder.Services.AddScoped<IExternalBillPaymentRepository, ExternalBillPaymentRepository>();
builder.Services.AddScoped<IEventPublisher, EventPublisher>();
builder.Services.AddScoped<IOTPHasher, BCryptOTPHasher>();
builder.Services.AddScoped<IEmailService, GmailEmailService>();

// MassTransit + RabbitMQ (publish-only, no consumers)
builder.Services.AddMassTransit(cfg =>
{
    cfg.UsingRabbitMq((ctx, rmq) =>
    {
        rmq.Host(builder.Configuration["RabbitMQ:Host"], h =>
        {
            h.Username(builder.Configuration["RabbitMQ:Username"]!);
            h.Password(builder.Configuration["RabbitMQ:Password"]!);
        });
        rmq.ConfigureEndpoints(ctx);
    });
});

// JWT
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

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "FinVault — Payment Service",
        Version = "v1",
        Description = "Payment Processing, Risk & Fraud Detection API"
    });
    var jwtScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT", Name = "Authorization",
        In = ParameterLocation.Header, Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Enter your JWT token.",
        Reference = new OpenApiReference
        { Id = JwtBearerDefaults.AuthenticationScheme, Type = ReferenceType.SecurityScheme }
    };
    c.AddSecurityDefinition(jwtScheme.Reference.Id, jwtScheme);
    c.AddSecurityRequirement(new OpenApiSecurityRequirement { { jwtScheme, Array.Empty<string>() } });
});

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseSerilogRequestLogging();
app.UseCors("FinVaultPolicy");
app.UseAuthentication();
app.UseAuthorization();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Payment Service v1");
    c.RoutePrefix = "swagger";
});

// Auto-migrate
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PaymentDbContext>();
    db.Database.Migrate();
}

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "payment-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();
