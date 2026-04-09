using MassTransit;
using Microsoft.Extensions.Logging;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Card.Events;

namespace NotificationService.Infrastructure.Messaging.Consumers;

public class CardExpirySoonConsumer(
    INotificationRepository repo,
    ILogger<CardExpirySoonConsumer> logger
) : IConsumer<CardExpirySoonEvent>
{
    public async Task Consume(ConsumeContext<CardExpirySoonEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation("Processing CardExpirySoon: CardId={CardId}, Expiry={Month}/{Year}",
            msg.CardId, msg.ExpiryMonth, msg.ExpiryYear);

        var notification = Notification.Create(
            msg.UserId,
            "Card",
            "Card Expiring Soon",
            $"Your card ending in {msg.MaskedNumber} expires on {msg.ExpiryMonth:D2}/{msg.ExpiryYear}. Please contact your issuer for a replacement.",
            "Email",
            "High",
            msg.CardId.ToString(),
            msg.CorrelationId);

        await repo.AddAsync(notification, context.CancellationToken);
        await repo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Card expiry notification created for user {UserId}", msg.UserId);
    }
}
