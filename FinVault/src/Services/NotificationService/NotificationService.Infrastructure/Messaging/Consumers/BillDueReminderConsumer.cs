using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Billing.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class BillDueReminderConsumer(
    INotificationRepository repo,
    ILogger<BillDueReminderConsumer> logger
) : IConsumer<BillDueReminderEvent>
{
    public async Task Consume(ConsumeContext<BillDueReminderEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing BillDueReminder: BillId={BillId}, DaysUntilDue={Days}",
            msg.BillId, msg.DaysUntilDue);

        var notification = Notification.Create(
            msg.UserId,
            "Billing",
            "Bill Due Reminder",
            $"Your bill of ₹{msg.TotalAmount:N2} is due in {msg.DaysUntilDue} day(s). Remaining balance: ₹{msg.RemainingBalance:N2}.",
            "InApp",
            msg.DaysUntilDue <= 1 ? "High" : "Normal",
            msg.BillId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Bill reminder notification created for user {UserId}", msg.UserId);
    }
}
