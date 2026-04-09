using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.CompleteExternalBillPayment;

public record CompleteExternalBillPaymentCommand(Guid PaymentId, string OtpCode) : IRequest<ApiResponse<bool>>;
