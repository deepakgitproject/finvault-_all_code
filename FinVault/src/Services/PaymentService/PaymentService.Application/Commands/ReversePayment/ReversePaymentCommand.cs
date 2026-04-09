using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.ReversePayment;

public record ReversePaymentCommand(Guid PaymentId) : IRequest<ApiResponse<bool>>;
