using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;
using FinVault.Shared.Contracts.Payment.Events;

namespace PaymentService.Application.Commands.InitiatePayment;

public class InitiatePaymentCommandHandler(
    IPaymentRepository paymentRepo,
    IPaymentSagaRepository sagaRepo,
    ITransactionRepository txRepo,
    IRiskScoreRepository riskRepo,
    IFraudAlertRepository fraudRepo,
    IEventPublisher eventPublisher
) : IRequestHandler<InitiatePaymentCommand, ApiResponse<PaymentResponse>>
{
    public async Task<ApiResponse<PaymentResponse>> Handle(
        InitiatePaymentCommand cmd, CancellationToken ct)
    {
        // Create payment
        var payment = Payment.Create(cmd.UserId, cmd.CardId, cmd.BillId,
            cmd.Amount, cmd.PaymentType);
        await paymentRepo.AddAsync(payment, ct);

        // Create saga
        var saga = PaymentSaga.Create(payment.Id);
        await sagaRepo.AddAsync(saga, ct);

        // Evaluate risk
        var riskScore = EvaluateRisk(cmd.Amount, cmd.UserId);
        var risk = RiskScore.Create(cmd.UserId, payment.Id, riskScore);
        await riskRepo.AddAsync(risk, ct);

        var correlationId = saga.Id.ToString();

        if (risk.Decision == "Blocked")
        {
            payment.Fail("Payment blocked due to high risk score.");
            saga.Fail("Blocked by risk engine.");

            var alertType = riskScore > 70 ? "HighAmount" : "UnusualTime";
            var alert = FraudAlert.Create(cmd.UserId, payment.Id, alertType, riskScore);
            await fraudRepo.AddAsync(alert, ct);
            await paymentRepo.SaveChangesAsync(ct);

            await eventPublisher.PublishAsync(new FraudDetectedEvent
            {
                UserId = cmd.UserId,
                PaymentId = payment.Id,
                AlertType = alertType,
                RiskScore = riskScore,
                CorrelationId = correlationId
            }, ct);

            return ApiResponse<PaymentResponse>.Fail("Payment blocked due to fraud risk.",
                new List<string> { $"Risk score: {riskScore}" });
        }

        // All non-blocked payments are approved and complete immediately
        saga.PassRiskCheck(riskScore);
        saga.StartProcessing();
        payment.Complete();

        var rewardPoints = (int)(payment.Amount / 100);
        saga.Complete(rewardPoints);

        var tx = Transaction.CreatePayment(payment.Id, payment.UserId, payment.CardId,
            payment.Amount, "Card Bill",
            $"Bill payment completed - Amount Rs.{payment.Amount:N2}");
        await txRepo.AddAsync(tx, ct);

        await paymentRepo.SaveChangesAsync(ct);

        await eventPublisher.PublishAsync(new PaymentCompletedEvent
        {
            PaymentId = payment.Id,
            UserId = cmd.UserId,
            CardId = cmd.CardId,
            BillId = cmd.BillId,
            Amount = cmd.Amount,
            CorrelationId = correlationId
        }, ct);

        return ApiResponse<PaymentResponse>.Ok(MapToResponse(payment, saga, riskScore),
            "Payment completed successfully.");
    }

    private static decimal EvaluateRisk(decimal amount, Guid userId)
    {
        decimal score = 0;
        if (amount > 50000) score += 40;
        var hour = DateTimeOffset.UtcNow.Hour;
        if (hour is >= 0 and < 5) score += 25;
        score += (userId.GetHashCode() % 20 + 20) % 20;
        return Math.Min(score, 100);
    }

    private static PaymentResponse MapToResponse(Payment p, PaymentSaga s, decimal risk) => new()
    {
        Id = p.Id,
        UserId = p.UserId,
        CardId = p.CardId,
        BillId = p.BillId,
        Amount = p.Amount,
        PaymentType = p.PaymentType,
        Status = p.Status,
        FailureReason = p.FailureReason,
        SagaState = s.CurrentState,
        RiskScore = risk,
        CreatedAt = p.CreatedAt
    };
}