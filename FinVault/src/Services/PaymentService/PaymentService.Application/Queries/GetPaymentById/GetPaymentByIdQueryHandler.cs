using MediatR;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetPaymentById;

public class GetPaymentByIdQueryHandler(
    IPaymentRepository paymentRepo,
    IPaymentSagaRepository sagaRepo,
    IRiskScoreRepository riskRepo
) : IRequestHandler<GetPaymentByIdQuery, ApiResponse<PaymentResponse>>
{
    public async Task<ApiResponse<PaymentResponse>> Handle(
        GetPaymentByIdQuery query, CancellationToken ct)
    {
        var p = await paymentRepo.GetByIdAsync(query.PaymentId, ct);
        if (p is null || p.IsDeleted)
            return ApiResponse<PaymentResponse>.Fail("Payment not found.");

        var saga = await sagaRepo.GetByPaymentIdAsync(p.Id, ct);
        var risk = await riskRepo.GetByPaymentIdAsync(p.Id, ct);

        return ApiResponse<PaymentResponse>.Ok(new PaymentResponse
        {
            Id = p.Id, UserId = p.UserId, CardId = p.CardId, BillId = p.BillId,
            Amount = p.Amount, PaymentType = p.PaymentType, Status = p.Status,
            FailureReason = p.FailureReason, SagaState = saga?.CurrentState,
            RiskScore = risk?.Score, CreatedAt = p.CreatedAt
        });
    }
}
