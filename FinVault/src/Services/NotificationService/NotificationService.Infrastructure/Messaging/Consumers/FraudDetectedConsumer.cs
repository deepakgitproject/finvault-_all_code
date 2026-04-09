using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class FraudDetectedConsumer(
    INotificationRepository repo,
    ILogger<FraudDetectedConsumer> logger
) : IConsumer<FraudDetectedEvent>
{
    public async Task Consume(ConsumeContext<FraudDetectedEvent> context)
    {
        var msg = context.Message;
        logger.LogWarning("Processing FraudDetected: UserId={UserId}, AlertType={AlertType}, RiskScore={RiskScore}",
            msg.UserId, msg.AlertType, msg.RiskScore);

        var notification = Notification.Create(
            msg.UserId,
            "Security",
            "⚠️ Fraud Alert",
            $"Suspicious activity detected on your account. Alert: {msg.AlertType}. Risk Score: {msg.RiskScore:F1}. Please review your recent transactions.",
            "Email",
            "Critical",
            msg.PaymentId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogWarning("Critical fraud alert notification created for user {UserId}", msg.UserId);
    }
}
