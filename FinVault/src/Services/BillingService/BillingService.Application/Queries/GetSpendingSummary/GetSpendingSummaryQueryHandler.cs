using MediatR;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetSpendingSummary;

public class GetSpendingSummaryQueryHandler(
    IBillRepository billRepo
) : IRequestHandler<GetSpendingSummaryQuery, ApiResponse<BillSummaryResponse>>
{
    public async Task<ApiResponse<BillSummaryResponse>> Handle(
        GetSpendingSummaryQuery query, CancellationToken ct)
    {
        var bills = await billRepo.GetByUserIdAsync(query.UserId, ct);

        var activeBills = bills.Where(b => !b.IsDeleted).ToList();

        var summary = new BillSummaryResponse
        {
            UserId = query.UserId,
            TotalBilled = activeBills.Sum(b => b.TotalAmount),
            TotalPaid = activeBills.Sum(b => b.AmountPaid),
            TotalOutstanding = activeBills.Sum(b => b.RemainingBalance),
            BillCount = activeBills.Count
        };

        return ApiResponse<BillSummaryResponse>.Ok(summary, "Spending summary retrieved.");
    }
}
