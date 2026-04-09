using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetPaymentById;

public record GetPaymentByIdQuery(Guid PaymentId) : IRequest<ApiResponse<PaymentResponse>>;
