using MediatR;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;
using FinVault.Shared.Exceptions;

namespace BillingService.Application.Queries.GetBillById;

public class GetBillByIdQueryHandler(
    IBillRepository billRepo
) : IRequestHandler<GetBillByIdQuery, ApiResponse<BillResponse>>
{
    public async Task<ApiResponse<BillResponse>> Handle(
        GetBillByIdQuery query, CancellationToken ct)
    {
        var bill = await billRepo.GetByIdAsync(query.BillId, ct);
        if (bill is null || bill.IsDeleted)
            throw new BillNotFoundException("The requested bill could not be found.");

        return ApiResponse<BillResponse>.Ok(MapToResponse(bill));
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
