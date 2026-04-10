using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using Microsoft.Extensions.Logging;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Events;
using FinVault.Shared.Exceptions;

namespace PaymentService.Application.Commands.CompleteExternalBillPayment;

public class CompleteExternalBillPaymentCommandHandler(
    IExternalBillPaymentRepository paymentRepo,
    ITransactionRepository txRepo,
    IOTPHasher otpHasher,
    IEventPublisher eventPublisher,
    ILogger<CompleteExternalBillPaymentCommandHandler> logger
) : IRequestHandler<CompleteExternalBillPaymentCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        CompleteExternalBillPaymentCommand cmd, CancellationToken ct)
    {
        var payment = await paymentRepo.GetByIdAsync(cmd.PaymentId, ct);

        if (payment is null)
            throw new PaymentNotFoundException("The requested payment could not be found.");

        if (payment.IsCompleted)
            throw new PaymentAlreadyCompletedException("This payment is already completed.");

        if (payment.Status == "Failed")
            throw new TransactionFailedException("This payment has already failed.");

        if (payment.IsOtpExpired)
            throw new OTPVerificationFailedException("OTP has expired. Please initiate payment again.");

        if (string.IsNullOrEmpty(payment.OtpHash) || !otpHasher.Verify(cmd.OtpCode, payment.OtpHash))
        {
            logger.LogWarning("OTP verification failed for Payment {PaymentId}", cmd.PaymentId);
            throw new OTPVerificationFailedException("Invalid OTP code. Please try again.");
        }

        payment.Complete();
        
        // Create transaction record
        var tx = Transaction.CreatePayment(
            payment.Id, 
            payment.UserId, 
            payment.CardId,
            payment.Amount,
            payment.BillerCategory,
            $"External Bill: {payment.BillerName} - {payment.BillNumber}");
            
        await txRepo.AddAsync(tx, ct);
        paymentRepo.Update(payment);
        await paymentRepo.SaveChangesAsync(ct);

        logger.LogInformation("External Bill Payment {PaymentId} marked as Completed. Publishing event...", payment.Id);

        // Publish event
        await eventPublisher.PublishAsync(new ExternalBillPaidEvent
        {
            PaymentId = payment.Id,
            UserId = payment.UserId,
            CardId = payment.CardId,
            BillerName = payment.BillerName,
            BillerCategory = payment.BillerCategory,
            BillNumber = payment.BillNumber,
            Amount = payment.Amount,
            CorrelationId = payment.Id.ToString()
        }, ct);

        logger.LogInformation("ExternalBillPaidEvent published for Payment {PaymentId}", payment.Id);

        return ApiResponse<bool>.Ok(true, "External bill payment completed successfully.");
    }
}
