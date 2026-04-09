using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class PasswordResetRequestedConsumer(
    INotificationRepository repo,
    ILogger<PasswordResetRequestedConsumer> logger
) : IConsumer<PasswordResetRequestedEvent>
{
    public async Task Consume(ConsumeContext<PasswordResetRequestedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing PasswordResetRequested: UserId={UserId}", msg.UserId);

        var notification = Notification.Create(
            msg.UserId,
            "Security",
            "Password Reset Requested",
            "A password reset was requested for your account. Please check your email for the verification code. If you did not request this, please secure your account immediately.",
            "Email",
            "High",
            msg.UserId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Password reset notification created for user {UserId}", msg.UserId);
    }
}
