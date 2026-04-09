using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MassTransit;
using Serilog;
using IdentityService.Application.Behaviours;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using IdentityService.Infrastructure.Messaging.Publishers;
using IdentityService.Infrastructure.Persistence;
using IdentityService.Infrastructure.Persistence.Repositories;
using IdentityService.Infrastructure.Services;
using IdentityService.API.Middleware;
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
        typeof(IdentityService.Application.Commands.RegisterUser
            .RegisterUserCommand).Assembly));

// FluentValidation
builder.Services.AddValidatorsFromAssembly(
    typeof(IdentityService.Application.Commands.RegisterUser
        .RegisterUserValidator).Assembly);

// Validation Pipeline Behaviour (runs validators before every handler)
builder.Services.AddTransient(
    typeof(IPipelineBehavior<,>),
    typeof(ValidationPipelineBehaviour<,>));

// EF Core + SQL Server
builder.Services.AddDbContext<IdentityDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// DI — Repositories
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
builder.Services.AddScoped<IOTPRepository, OTPRepository>();

// DI — Services
builder.Services.AddScoped<ITokenService, JwtTokenService>();
builder.Services.AddScoped<IEventPublisher, EventPublisher>();

// DI — Password & OTP Hashers
builder.Services.AddScoped<IPasswordHasher, BCryptPasswordHasher>();
builder.Services.AddScoped<IOTPHasher, BCryptOTPHasher>();

// DI — Email
builder.Services.AddScoped<IEmailService, GmailEmailService>();

// MassTransit + RabbitMQ (Identity Service only PUBLISHES — no consumers)
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

// JWT Authentication
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
        Title = "FinVault — Identity Service",
        Version = "v1",
        Description = "Authentication & User Management API",
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
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Identity Service v1");
    c.RoutePrefix = "swagger"; // http://localhost:5001/swagger
    c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.List);
});

// Auto-run EF Core migrations on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<IdentityDbContext>();
    db.Database.Migrate();
}

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "identity-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();