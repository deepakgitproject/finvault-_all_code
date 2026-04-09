using MassTransit;
using Microsoft.Extensions.Logging;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace CardService.Infrastructure.Messaging.Consumers;

public class PaymentCompletedConsumer(
    ICreditCardRepository cardRepo,
    ILogger<PaymentCompletedConsumer> logger
) : IConsumer<PaymentCompletedEvent>
{
    public async Task Consume(ConsumeContext<PaymentCompletedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation(
            "CardService processing PaymentCompleted: CardId={CardId}, Amount={Amount}",
            msg.CardId, msg.Amount);

        var card = await cardRepo.GetByIdAsync(msg.CardId, context.CancellationToken);
        if (card is null)
        {
            logger.LogWarning("Card {CardId} not found for payment {PaymentId}",
                msg.CardId, msg.PaymentId);
            return;
        }

        // Reduce outstanding balance by payment amount
        card.UpdateBalance(-msg.Amount);
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation(
            "Card {CardId} balance reduced by {Amount}. New balance: {Balance}",
            card.Id, msg.Amount, card.OutstandingBalance);
    }
}
