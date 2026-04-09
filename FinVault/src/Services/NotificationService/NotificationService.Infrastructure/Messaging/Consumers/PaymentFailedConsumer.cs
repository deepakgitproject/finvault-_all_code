using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class PaymentFailedConsumer(
    INotificationRepository repo,
    ILogger<PaymentFailedConsumer> logger
) : IConsumer<PaymentFailedEvent>
{
    public async Task Consume(ConsumeContext<PaymentFailedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing PaymentFailed: PaymentId={PaymentId}, Reason={Reason}",
            msg.PaymentId, msg.FailureReason);

        var notification = Notification.Create(
            msg.UserId,
            "Payment",
            "Payment Failed",
            $"Your payment of ₹{msg.Amount:N2} has failed. Reason: {msg.FailureReason}. Please try again.",
            "InApp",
            "High",
            msg.PaymentId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Payment failure notification created for user {UserId}", msg.UserId);
    }
}
