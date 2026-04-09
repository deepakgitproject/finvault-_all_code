using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class ExternalBillPaidConsumer(
    INotificationRepository repo,
    ILogger<ExternalBillPaidConsumer> logger
) : IConsumer<ExternalBillPaidEvent>
{
    public async Task Consume(ConsumeContext<ExternalBillPaidEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing ExternalBillPaid: PaymentId={PaymentId}, Amount={Amount}, Biller={Biller}",
            msg.PaymentId, msg.Amount, msg.BillerName);

        var notification = Notification.Create(
            msg.UserId,
            "Payment",
            "Bill Payment Successful",
            $"Your payment of ₹{msg.Amount:N2} to {msg.BillerName} ({msg.BillerCategory}) was successful. Bill Number: {msg.BillNumber}",
            "InApp",
            "Normal",
            msg.PaymentId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("External bill payment notification created for user {UserId}", msg.UserId);
    }
}
