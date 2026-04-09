using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetUpcomingBills;

public record GetUpcomingBillsQuery(
    Guid UserId,
    int DaysAhead = 7
) : IRequest<ApiResponse<List<BillResponse>>>;
