using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetExternalBillPayments;

public record GetExternalBillPaymentsQuery(Guid UserId) : IRequest<ApiResponse<List<ExternalBillPaymentResponse>>>;
