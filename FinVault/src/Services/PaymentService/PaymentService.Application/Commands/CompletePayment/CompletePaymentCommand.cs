using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.CompletePayment;

public record CompletePaymentCommand(Guid PaymentId) : IRequest<ApiResponse<bool>>;