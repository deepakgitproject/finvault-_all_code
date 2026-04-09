using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class UserRegisteredConsumer(
    INotificationRepository repo,
    ILogger<UserRegisteredConsumer> logger
) : IConsumer<UserRegisteredEvent>
{
    public async Task Consume(ConsumeContext<UserRegisteredEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing UserRegistered: UserId={UserId}, Email={Email}",
            msg.UserId, msg.Email);

        var notification = Notification.Create(
            msg.UserId,
            "System",
            "Welcome to FinVault!",
            $"Hello {msg.FirstName}, your account has been created successfully. Please check your email for the verification code.",
            "Email",
            "Normal",
            msg.UserId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Welcome notification created for user {UserId}", msg.UserId);
    }
}
