using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Commands.InitiatePayment;

public record InitiatePaymentCommand(
    Guid UserId,
    Guid CardId,
    Guid BillId,
    decimal Amount,
    string PaymentType
) : IRequest<ApiResponse<PaymentResponse>>;