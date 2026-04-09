using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetExternalBillPayments;

public class GetExternalBillPaymentsQueryHandler(
    IExternalBillPaymentRepository paymentRepo
) : IRequestHandler<GetExternalBillPaymentsQuery, ApiResponse<List<ExternalBillPaymentResponse>>>
{
    public async Task<ApiResponse<List<ExternalBillPaymentResponse>>> Handle(
        GetExternalBillPaymentsQuery query, CancellationToken ct)
    {
        var payments = await paymentRepo.GetByUserIdAsync(query.UserId, ct);
        
        var response = payments.Select(MapToResponse).ToList();
        
        return ApiResponse<List<ExternalBillPaymentResponse>>.Ok(response);
    }

    private static ExternalBillPaymentResponse MapToResponse(ExternalBillPayment p) => new()
    {
        Id = p.Id,
        UserId = p.UserId,
        CardId = p.CardId,
        BillerName = p.BillerName,
        BillerCategory = p.BillerCategory,
        BillNumber = p.BillNumber,
        Amount = p.Amount,
        Status = p.Status,
        FailureReason = p.FailureReason,
        CreatedAt = p.CreatedAt
    };
}
