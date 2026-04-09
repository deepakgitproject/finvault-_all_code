using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MassTransit;
using Serilog;
using CardService.Application.Behaviours;
using CardService.Domain.Interfaces;
using CardService.Domain.Interfaces.Repositories;
using CardService.Infrastructure.Messaging.Publishers;
using CardService.Infrastructure.Messaging.Consumers;
using CardService.Infrastructure.Persistence;
using CardService.Infrastructure.Persistence.Repositories;
using CardService.Infrastructure.Services;
using CardService.API.Middleware;
using MediatR;
using FluentValidation;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((ctx, cfg) =>
    cfg.ReadFrom.Configuration(ctx.Configuration).WriteTo.Console());

builder.Services.AddControllers();

// MediatR
builder.Services.AddMediatR(cfg =>
    cfg.RegisterServicesFromAssembly(
        typeof(CardService.Application.Commands.AddCard.AddCardCommand).Assembly));

// FluentValidation
builder.Services.AddValidatorsFromAssembly(
    typeof(CardService.Application.Commands.AddCard.AddCardValidator).Assembly);
builder.Services.AddTransient(
    typeof(IPipelineBehavior<,>),
    typeof(ValidationPipelineBehaviour<,>));

// EF Core
builder.Services.AddDbContext<CardDbContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Repositories
builder.Services.AddScoped<ICreditCardRepository, CreditCardRepository>();
builder.Services.AddScoped<ICardIssuerRepository, CardIssuerRepository>();
builder.Services.AddScoped<ICardEncryptionService, AesCardEncryptionService>();
builder.Services.AddScoped<IEventPublisher, EventPublisher>();

// MassTransit + RabbitMQ
builder.Services.AddMassTransit(cfg =>
{
    cfg.AddConsumer<PaymentCompletedConsumer>();
    cfg.AddConsumer<ExternalBillPaidConsumer>();

    cfg.UsingRabbitMq((ctx, rmq) =>
    {
        rmq.Host(builder.Configuration["RabbitMQ:Host"], h =>
        {
            h.Username(builder.Configuration["RabbitMQ:Username"]!);
            h.Password(builder.Configuration["RabbitMQ:Password"]!);
        });
        rmq.ReceiveEndpoint("card-payment-completed", e =>
        {
            e.ConfigureConsumer<PaymentCompletedConsumer>(ctx);
        });

        rmq.ReceiveEndpoint("card-external-bill-paid", e =>
        {
            e.ConfigureConsumer<ExternalBillPaidConsumer>(ctx);
        });
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
        Title = "FinVault — Card Service",
        Version = "v1",
        Description = "Credit Card Management API"
    });

    var jwtScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Enter your JWT token.",
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
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Card Service v1");
    c.RoutePrefix = "swagger";
});

// Auto-migrate
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<CardDbContext>();
    db.Database.Migrate();
}

app.MapControllers();
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "card-service",
    time = DateTimeOffset.UtcNow
}));

app.Run();
