using MassTransit;
using Microsoft.Extensions.Logging;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;

namespace CardService.Infrastructure.Messaging.Consumers;

public class ExternalBillPaidConsumer(
    ICreditCardRepository cardRepo,
    ILogger<ExternalBillPaidConsumer> logger
) : IConsumer<ExternalBillPaidEvent>
{
    public async Task Consume(ConsumeContext<ExternalBillPaidEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation(
            "CardService processing ExternalBillPaid: CardId={CardId}, Amount={Amount}, Biller={Biller}",
            msg.CardId, msg.Amount, msg.BillerName);

        var card = await cardRepo.GetByIdAsync(msg.CardId, context.CancellationToken);
        if (card is null)
        {
            logger.LogWarning("Card {CardId} not found for external bill payment {PaymentId}",
                msg.CardId, msg.PaymentId);
            return;
        }

        // Increase outstanding balance (spending on card)
        card.UpdateBalance(msg.Amount);
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation(
            "Card {CardId} balance increased by {Amount}. New balance: {Balance}",
            card.Id, msg.Amount, card.OutstandingBalance);
    }
}
