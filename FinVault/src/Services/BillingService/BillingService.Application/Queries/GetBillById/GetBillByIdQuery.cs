using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;

namespace BillingService.Application.Queries.GetBillById;

public record GetBillByIdQuery(
    Guid BillId
) : IRequest<ApiResponse<BillResponse>>;
