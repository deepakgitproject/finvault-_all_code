using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Commands.InitiateExternalBillPayment;

public record InitiateExternalBillPaymentCommand(
    Guid UserId,
    Guid CardId,
    string Email,
    string BillerName,
    string BillerCategory,
    string BillNumber,
    decimal Amount
) : IRequest<ApiResponse<ExternalBillPaymentResponse>>;
