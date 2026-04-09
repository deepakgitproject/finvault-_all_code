using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetBills;

public record GetBillsQuery(
    Guid UserId,
    string? Status = null,
    string? BillingMonth = null
) : IRequest<ApiResponse<List<BillResponse>>>;
