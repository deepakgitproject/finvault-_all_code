using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Commands.GenerateBill;

public record GenerateBillCommand(
    Guid UserId,
    Guid CardId,
    decimal TotalAmount,
    decimal MinimumDue,
    DateTimeOffset DueDate,
    string BillingMonth
) : IRequest<ApiResponse<BillResponse>>;
