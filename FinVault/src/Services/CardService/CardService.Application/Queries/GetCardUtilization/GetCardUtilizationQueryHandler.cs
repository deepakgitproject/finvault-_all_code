using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCardUtilization;

public class GetCardUtilizationQueryHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<GetCardUtilizationQuery, ApiResponse<CardSummaryResponse>>
{
    public async Task<ApiResponse<CardSummaryResponse>> Handle(
        GetCardUtilizationQuery query, CancellationToken ct)
    {
        var cards = await cardRepo.GetByUserIdAsync(query.UserId, ct);
        var active = cards.Where(c => !c.IsDeleted).ToList();

        var totalLimit = active.Sum(c => c.CreditLimit);
        var totalOutstanding = active.Sum(c => c.OutstandingBalance);

        var summary = new CardSummaryResponse
        {
            TotalCards = active.Count,
            TotalCreditLimit = totalLimit,
            TotalOutstanding = totalOutstanding,
            TotalAvailableCredit = totalLimit - totalOutstanding,
            OverallUtilization = totalLimit > 0
                ? (totalOutstanding / totalLimit) * 100 : 0,
            Cards = active.Select(c => new CardUtilizationItem
            {
                CardId = c.Id,
                MaskedNumber = c.MaskedNumber,
                CreditLimit = c.CreditLimit,
                OutstandingBalance = c.OutstandingBalance,
                Utilization = c.Utilization
            }).ToList()
        };

        return ApiResponse<CardSummaryResponse>.Ok(summary,
            "Card utilization summary retrieved.");
    }
}
