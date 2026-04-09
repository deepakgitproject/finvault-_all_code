using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Billing.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class RewardEarnedConsumer(
    INotificationRepository repo,
    ILogger<RewardEarnedConsumer> logger
) : IConsumer<RewardEarnedEvent>
{
    public async Task Consume(ConsumeContext<RewardEarnedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing RewardEarned: UserId={UserId}, Points={Points}",
            msg.UserId, msg.PointsEarned);

        var notification = Notification.Create(
            msg.UserId,
            "Reward",
            "Reward Points Earned! 🎉",
            $"You earned {msg.PointsEarned} reward points! Total available: {msg.TotalAvailablePoints}. Tier: {msg.TierName}.",
            "InApp",
            "Low",
            msg.PaymentId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Reward notification created for user {UserId}", msg.UserId);
    }
}
