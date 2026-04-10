using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Events;
using FinVault.Shared.Exceptions;

namespace PaymentService.Application.Commands.ReversePayment;

public class ReversePaymentCommandHandler(
    IPaymentRepository paymentRepo,
    IPaymentSagaRepository sagaRepo,
    ITransactionRepository txRepo,
    IEventPublisher eventPublisher
) : IRequestHandler<ReversePaymentCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        ReversePaymentCommand cmd, CancellationToken ct)
    {
        var payment = await paymentRepo.GetByIdAsync(cmd.PaymentId, ct);
        if (payment is null)
            throw new PaymentNotFoundException("The requested payment could not be found.");
        if (!payment.IsCompleted)
            throw new InvalidBillStatusException("Only completed payments can be reversed.");

        payment.Reverse();

        var saga = await sagaRepo.GetByPaymentIdAsync(payment.Id, ct);
        saga?.Fail("Payment reversed by user.");

        var tx = Transaction.CreateReversal(payment.Id, payment.UserId, payment.CardId, 
            payment.Amount, "Card Bill",
            $"Payment reversal - Amount RS.{payment.Amount:N2}");
        await txRepo.AddAsync(tx, ct);
        paymentRepo.Update(payment);
        if (saga is not null) sagaRepo.Update(saga);
        await paymentRepo.SaveChangesAsync(ct);

        await eventPublisher.PublishAsync(new PaymentFailedEvent
        {
            PaymentId = payment.Id, UserId = payment.UserId,
            CardId = payment.CardId, BillId = payment.BillId,
            Amount = payment.Amount, FailureReason = "Payment reversed.",
            CorrelationId = saga?.Id.ToString() ?? Guid.NewGuid().ToString()
        }, ct);

        return ApiResponse<bool>.Ok(true, "Payment reversed successfully.");
    }
}
