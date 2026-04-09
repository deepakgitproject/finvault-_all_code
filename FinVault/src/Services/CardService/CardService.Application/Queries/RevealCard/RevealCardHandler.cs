using MediatR;
using CardService.Domain.Interfaces;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.RevealCard;

public class RevealCardHandler(
    ICreditCardRepository cardRepo,
    ICardEncryptionService encryptionService
) : IRequestHandler<RevealCardQuery, ApiResponse<RevealCardResponse>>
{
    public async Task<ApiResponse<RevealCardResponse>> Handle(
        RevealCardQuery query, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(query.CardId, ct);

        if (card is null || card.UserId != query.UserId || card.IsDeleted)
            return ApiResponse<RevealCardResponse>.Fail("Card not found.");

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
        catch (Exception)
        {
            return ApiResponse<RevealCardResponse>.Fail("Failed to decrypt card details.");
        }
    }
}
