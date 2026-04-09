using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Events;

namespace PaymentService.Application.Commands.CompletePayment;

public class CompletePaymentCommandHandler(
    IPaymentRepository paymentRepo,
    IPaymentSagaRepository sagaRepo,
    ITransactionRepository txRepo,
    IEventPublisher eventPublisher
) : IRequestHandler<CompletePaymentCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        CompletePaymentCommand cmd, CancellationToken ct)
    {
        var payment = await paymentRepo.GetByIdAsync(cmd.PaymentId, ct);
        if (payment is null)
            return ApiResponse<bool>.Fail("Payment not found.");
        if (payment.IsCompleted)
            return ApiResponse<bool>.Fail("Payment already completed.");
        if (payment.IsFailed)
            return ApiResponse<bool>.Fail("Cannot complete a failed payment.");

        // OTP Verification removed for card bill payments 
        // Just verify saga exists and complete the payment flow if it was in Initiated state

        var saga = await sagaRepo.GetByPaymentIdAsync(payment.Id, ct);
        if (saga is null)
            return ApiResponse<bool>.Fail("Payment saga not found.");

        saga.StartProcessing();
        payment.Complete();

        var rewardPoints = (int)(payment.Amount / 100);
        saga.Complete(rewardPoints);

        var tx = Transaction.CreatePayment(payment.Id, payment.UserId, payment.CardId,
            payment.Amount, "Card Bill",
            $"Bill payment completed - Amount Rs.{payment.Amount:N2}");
        await txRepo.AddAsync(tx, ct);
        paymentRepo.Update(payment);
        sagaRepo.Update(saga);
        await paymentRepo.SaveChangesAsync(ct);

        await eventPublisher.PublishAsync(new PaymentCompletedEvent
        {
            PaymentId = payment.Id,
            UserId = payment.UserId,
            CardId = payment.CardId,
            BillId = payment.BillId,
            Amount = payment.Amount,
            CorrelationId = saga.Id.ToString()
        }, ct);

        return ApiResponse<bool>.Ok(true, "Payment completed successfully.");
    }
}