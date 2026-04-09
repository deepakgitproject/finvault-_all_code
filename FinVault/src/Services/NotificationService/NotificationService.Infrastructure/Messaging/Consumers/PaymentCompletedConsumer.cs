using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class PaymentCompletedConsumer(
    INotificationRepository repo,
    ILogger<PaymentCompletedConsumer> logger
) : IConsumer<PaymentCompletedEvent>
{
    public async Task Consume(ConsumeContext<PaymentCompletedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing PaymentCompleted: PaymentId={PaymentId}, Amount={Amount}",
            msg.PaymentId, msg.Amount);

        var notification = Notification.Create(
            msg.UserId,
            "Payment",
            "Payment Successful",
            $"Your payment of ₹{msg.Amount:N2} has been processed successfully.",
            "InApp",
            "Normal",
            msg.PaymentId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Payment confirmation notification created for user {UserId}", msg.UserId);
    }
}
