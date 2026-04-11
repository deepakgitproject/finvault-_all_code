// ============================================================================
// Program.cs - Payment Service Entry Point
// ============================================================================
// Purpose: Bootstraps and configures the Payment Service API. This service
//          handles payment processing, risk assessment, fraud detection, and
//          external bill payments.
//
// Configuration:
//   - Database: SQL Server with EF Core and auto-migrations
//   - Messaging: RabbitMQ via MassTransit (publishes events, no consumers)
//   - Authentication: JWT Bearer tokens with shared secret
//   - Validation: FluentValidation with MediatR pipeline behavior
//   - Logging: Serilog with console output
//   - API Documentation: Swagger/OpenAPI with JWT support
//   - CORS: Allows Angular frontend (localhost:4200) and localhost:5000
//
// Dependencies Registered:
//   - Repositories: Payment, Transaction, RiskScore, FraudAlert, etc.
//   - Services: Email, OTP Hashing, Event Publishing
//   - Infrastructure: DbContext, MassTransit, MediatR
// ============================================================================

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

// Clear default claim mapping to preserve original JWT claim names
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

var builder = WebApplication.CreateBuilder(args);

// === Logging Configuration ===
// Configure Serilog for structured logging with console output
builder.Host.UseSerilog((ctx, cfg) =>
    cfg.ReadFrom.Configuration(ctx.Configuration).WriteTo.Console());

// === MVC Controllers ===
builder.Services.AddControllers();

// === MediatR (CQRS) ===
// Registers all handlers from the Application layer assembly
// Enables dispatching commands/queries from controllers to handlers
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(
        typeof(PaymentService.Application.Commands.InitiatePayment.InitiatePaymentCommand).Assembly));

// === FluentValidation ===
// Registers all validators from the Application layer
// Adds validation pipeline behavior to automatically validate commands before handling
builder.Services.AddValidatorsFromAssembly(
    typeof(PaymentService.Application.Commands.InitiatePayment.InitiatePaymentValidator).Assembly);
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehaviour<,>));

// === Entity Framework Core ===
// Configures SQL Server database connection and registers PaymentDbContext
// DbContext is used by repositories for data access
builder.Services.AddDbContext<PaymentDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// === Dependency Injection - Repositories ===
// All repositories interfaces are mapped to their EF Core implementations
// Scoped lifetime = one instance per HTTP request
builder.Services.AddScoped<IPaymentRepository, PaymentRepository>();
builder.Services.AddScoped<IPaymentSagaRepository, PaymentSagaRepository>();
builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();
builder.Services.AddScoped<IRiskScoreRepository, RiskScoreRepository>();
builder.Services.AddScoped<IFraudAlertRepository, FraudAlertRepository>();
builder.Services.AddScoped<IExternalBillPaymentRepository, ExternalBillPaymentRepository>();

// === Dependency Injection - Services ===
// Event publisher for sending messages to RabbitMQ
// OTP hasher for secure one-time password handling
// Email service for sending notifications
builder.Services.AddScoped<IEventPublisher, EventPublisher>();
builder.Services.AddScoped<IOTPHasher, BCryptOTPHasher>();
builder.Services.AddScoped<IEmailService, GmailEmailService>();

// === MassTransit + RabbitMQ Messaging ===
// Configures RabbitMQ for publishing events (PaymentCompleted, FraudDetected, etc.)
// This service only publishes events, it doesn't consume them
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

// === JWT Authentication ===
// Configures JWT Bearer token validation for securing API endpoints
// Validates: issuer, audience, lifetime, and signature
// ClockSkew = Zero means tokens expire exactly at their expiration time
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

// === CORS Policy ===
// Allows Angular frontend (localhost:4200) and localhost:5000 to call this API
// Required because browser blocks cross-origin requests by default
builder.Services.AddCors(opt =>
    opt.AddPolicy("FinVaultPolicy", p =>
        p.WithOrigins("http://localhost:4200", "http://localhost:5000")
        .AllowAnyMethod().AllowAnyHeader().AllowCredentials()));

// === Swagger/OpenAPI Documentation ===
// Generates interactive API documentation at /swagger
// Configured with JWT authentication support so testers can enter tokens
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

// === Middleware Pipeline (executes in order) ===

// 1. Exception handling middleware - catches and formats all errors
app.UseMiddleware<ExceptionMiddleware>();

// 2. Serilog request logging - logs all HTTP requests
app.UseSerilogRequestLogging();

// 3. CORS - enables cross-origin requests from frontend
app.UseCors("FinVaultPolicy");

// 4. Authentication - validates JWT tokens
app.UseAuthentication();

// 5. Authorization - checks user permissions
app.UseAuthorization();

// 6. Swagger - API documentation (development only)
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Payment Service v1");
    c.RoutePrefix = "swagger";
});

// === Database Auto-Migration ===
// Applies pending EF Core migrations on startup
// Ensures database schema is up-to-date before accepting requests
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PaymentDbContext>();
    db.Database.Migrate();
}

// === Endpoint Mapping ===
app.MapControllers();

// Health check endpoint - used by load balancers and monitoring
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "payment-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();
