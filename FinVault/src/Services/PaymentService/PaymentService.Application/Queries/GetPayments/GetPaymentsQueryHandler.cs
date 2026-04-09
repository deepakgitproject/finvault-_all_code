using MediatR;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetPayments;

public class GetPaymentsQueryHandler(
    IPaymentRepository paymentRepo,
    IPaymentSagaRepository sagaRepo
) : IRequestHandler<GetPaymentsQuery, ApiResponse<List<PaymentResponse>>>
{
    public async Task<ApiResponse<List<PaymentResponse>>> Handle(
        GetPaymentsQuery query, CancellationToken ct)
    {
        var payments = await paymentRepo.GetByUserIdAsync(query.UserId, ct);
        var response = new List<PaymentResponse>();

        foreach (var p in payments.Where(p => !p.IsDeleted))
        {
            var saga = await sagaRepo.GetByPaymentIdAsync(p.Id, ct);
            response.Add(new PaymentResponse
            {
                Id = p.Id, UserId = p.UserId, CardId = p.CardId, BillId = p.BillId,
                Amount = p.Amount, PaymentType = p.PaymentType, Status = p.Status,
                FailureReason = p.FailureReason, SagaState = saga?.CurrentState,
                RiskScore = saga?.RiskScore, CreatedAt = p.CreatedAt
            });
        }

        return ApiResponse<List<PaymentResponse>>.Ok(response,
            $"Found {response.Count} payment(s).");
    }
}
