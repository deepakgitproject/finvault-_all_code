using MediatR;
using CardService.Domain.Entities;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCardById;

public class GetCardByIdQueryHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<GetCardByIdQuery, ApiResponse<CardResponse>>
{
    public async Task<ApiResponse<CardResponse>> Handle(
        GetCardByIdQuery query, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(query.CardId, ct);
        if (card is null || card.IsDeleted)
            return ApiResponse<CardResponse>.Fail("Card not found.");

        return ApiResponse<CardResponse>.Ok(MapToResponse(card));
    }

    private static CardResponse MapToResponse(CreditCard c) => new()
    {
        Id = c.Id,
        UserId = c.UserId,
        MaskedNumber = c.MaskedNumber,
        CardNumberLastFour = c.CardNumberLastFour,
        CardholderName = c.CardholderName,
        ExpiryMonth = c.ExpiryMonth,
        ExpiryYear = c.ExpiryYear,
        IssuerName = c.Issuer?.Name ?? "Unknown",
        CreditLimit = c.CreditLimit,
        OutstandingBalance = c.OutstandingBalance,
        AvailableCredit = c.AvailableCredit,
        Utilization = c.Utilization,
        BillingCycleStartDay = c.BillingCycleStartDay,
        IsDefault = c.IsDefault,
        IsVerified = c.IsVerified,
        CreatedAt = c.CreatedAt
    };
}
