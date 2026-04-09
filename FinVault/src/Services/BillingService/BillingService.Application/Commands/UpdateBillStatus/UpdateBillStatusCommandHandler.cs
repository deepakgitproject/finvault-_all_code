using MediatR;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Commands.UpdateBillStatus;

public class UpdateBillStatusCommandHandler(
    IBillRepository billRepo
) : IRequestHandler<UpdateBillStatusCommand, ApiResponse<BillResponse>>
{
    private static readonly HashSet<string> ValidStatuses = new(StringComparer.OrdinalIgnoreCase)
        { "Pending", "Paid", "Overdue", "PartiallyPaid" };

    public async Task<ApiResponse<BillResponse>> Handle(
        UpdateBillStatusCommand cmd, CancellationToken ct)
    {
        if (!ValidStatuses.Contains(cmd.Status))
            return ApiResponse<BillResponse>.Fail(
                $"Invalid status '{cmd.Status}'. Must be one of: {string.Join(", ", ValidStatuses)}");

        var bill = await billRepo.GetByIdAsync(cmd.BillId, ct);
        if (bill is null || bill.IsDeleted)
            return ApiResponse<BillResponse>.Fail("Bill not found.");

        // Apply status change via domain methods
        switch (cmd.Status)
        {
            case "Overdue":
                bill.MarkOverdue();
                break;
            case "Paid":
                bill.MarkPaid();
                break;
            default:
                // For Pending/PartiallyPaid, we just validate — actual status is driven by payments
                return ApiResponse<BillResponse>.Fail(
                    "Status is automatically managed. Use Overdue or Paid.");
        }

        billRepo.Update(bill);
        await billRepo.SaveChangesAsync(ct);

        return ApiResponse<BillResponse>.Ok(MapToResponse(bill), "Bill status updated.");
    }

    private static BillResponse MapToResponse(Domain.Entities.Bill b) => new()
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
