using MediatR;
using CardService.Domain.Interfaces;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;
using FinVault.Shared.Exceptions;
using Microsoft.Extensions.Logging;

namespace CardService.Application.Queries.RevealCard;

public class RevealCardHandler(
    ICreditCardRepository cardRepo,
    ICardEncryptionService encryptionService,
    ILogger<RevealCardHandler> logger
) : IRequestHandler<RevealCardQuery, ApiResponse<RevealCardResponse>>
{
    public async Task<ApiResponse<RevealCardResponse>> Handle(
        RevealCardQuery query, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(query.CardId, ct);

        if (card is null || card.UserId != query.UserId || card.IsDeleted)
            throw new CardNotFoundException("The requested card could not be found.");

        try
        {
            var decryptedNumber = encryptionService.Decrypt(card.EncryptedCardNumber);
            var decryptedCvv = encryptionService.Decrypt(card.EncryptedCVV);

            var response = new RevealCardResponse
            {
                Id = card.Id,
                CardNumber = decryptedNumber,
                CVV = decryptedCvv,
                CardholderName = card.CardholderName,
                ExpiryMonth = card.ExpiryMonth,
                ExpiryYear = card.ExpiryYear,
                IssuerName = card.Issuer?.Name ?? "Unknown"
            };

            return ApiResponse<RevealCardResponse>.Ok(response);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to decrypt card details for Card {CardId}", query.CardId);
            throw new CardDecryptionFailedException("Failed to decrypt card details. Please try again.", ex);
        }
    }
}
