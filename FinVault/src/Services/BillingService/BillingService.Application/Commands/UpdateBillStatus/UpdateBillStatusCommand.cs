using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Commands.UpdateBillStatus;

public record UpdateBillStatusCommand(
    Guid BillId,
    string Status // Pending | Paid | Overdue | PartiallyPaid
) : IRequest<ApiResponse<BillResponse>>;
