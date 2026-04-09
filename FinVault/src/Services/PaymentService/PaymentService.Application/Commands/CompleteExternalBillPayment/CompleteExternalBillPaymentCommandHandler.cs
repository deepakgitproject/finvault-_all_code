using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using Microsoft.Extensions.Logging;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Events;

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
            return ApiResponse<bool>.Fail("Payment not found.");
            
        if (payment.IsCompleted)
            return ApiResponse<bool>.Fail("Payment is already completed.");
            
        if (payment.Status == "Failed")
            return ApiResponse<bool>.Fail("Payment has already failed.");

        if (payment.IsOtpExpired)
            return ApiResponse<bool>.Fail("OTP has expired. Please initiate payment again.");

        if (string.IsNullOrEmpty(payment.OtpHash) || !otpHasher.Verify(cmd.OtpCode, payment.OtpHash))
        {
            logger.LogWarning("OTP Verification failed for Payment {PaymentId}. Entered Code: {OtpCode}, Stored Hash Start: {HashStart}", 
                cmd.PaymentId, cmd.OtpCode, payment.OtpHash?.Substring(0, 5));
            return ApiResponse<bool>.Fail("Invalid OTP code.");
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
