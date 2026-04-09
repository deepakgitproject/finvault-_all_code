using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetSpendingSummary;

public record GetSpendingSummaryQuery(
    Guid UserId
) : IRequest<ApiResponse<BillSummaryResponse>>;
