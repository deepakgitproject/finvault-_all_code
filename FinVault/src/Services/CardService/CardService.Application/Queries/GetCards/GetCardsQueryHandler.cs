using MediatR;
using CardService.Domain.Entities;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCards;

public class GetCardsQueryHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<GetCardsQuery, ApiResponse<List<CardResponse>>>
{
    public async Task<ApiResponse<List<CardResponse>>> Handle(
        GetCardsQuery query, CancellationToken ct)
    {
        var cards = await cardRepo.GetByUserIdAsync(query.UserId, ct);

        var response = cards
            .Where(c => !c.IsDeleted)
            .Select(MapToResponse)
            .ToList();

        return ApiResponse<List<CardResponse>>.Ok(response,
            $"Found {response.Count} card(s).");
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
        CurrentBalance = c.OutstandingBalance,
        AvailableCredit = c.AvailableCredit,
        Utilization = c.Utilization,
        BillingCycleStartDay = c.BillingCycleStartDay,
        IsDefault = c.IsDefault,
        IsVerified = c.IsVerified,
        CreatedAt = c.CreatedAt
    };
}
