using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetPayments;

public record GetPaymentsQuery(Guid UserId) : IRequest<ApiResponse<List<PaymentResponse>>>;
