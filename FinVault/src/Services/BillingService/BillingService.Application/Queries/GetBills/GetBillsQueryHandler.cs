using MediatR;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetBills;

public class GetBillsQueryHandler(
    IBillRepository billRepo
) : IRequestHandler<GetBillsQuery, ApiResponse<List<BillResponse>>>
{
    public async Task<ApiResponse<List<BillResponse>>> Handle(
        GetBillsQuery query, CancellationToken ct)
    {
        var bills = await billRepo.GetByUserIdFilteredAsync(
            query.UserId, query.Status, query.BillingMonth, ct);

        var response = bills
            .Where(b => !b.IsDeleted)
            .Select(MapToResponse)
            .ToList();

        return ApiResponse<List<BillResponse>>.Ok(response,
            $"Found {response.Count} bill(s).");
    }

    private static BillResponse MapToResponse(Bill b) => new()
    {
        Id = b.Id,
        UserId = b.UserId,
        CardId = b.CardId,
        TotalAmount = b.TotalAmount,
        MinimumDue = b.MinimumDue,
        AmountPaid = b.AmountPaid,
        RemainingBalance = b.RemainingBalance,
        DueDate = b.DueDate,
        BillingMonth = b.BillingMonth,
        Status = b.Status,
        CreatedAt = b.CreatedAt,
        UpdatedAt = b.UpdatedAt
    };
}
