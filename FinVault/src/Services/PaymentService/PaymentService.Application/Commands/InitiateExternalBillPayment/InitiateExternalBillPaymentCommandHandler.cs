using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Commands.InitiateExternalBillPayment;

public class InitiateExternalBillPaymentCommandHandler(
    IExternalBillPaymentRepository paymentRepo,
    IOTPHasher otpHasher,
    IEmailService emailService
) : IRequestHandler<InitiateExternalBillPaymentCommand, ApiResponse<ExternalBillPaymentResponse>>
{
    public async Task<ApiResponse<ExternalBillPaymentResponse>> Handle(
        InitiateExternalBillPaymentCommand cmd, CancellationToken ct)
    {
        var payment = ExternalBillPayment.Create(
            cmd.UserId, cmd.CardId, cmd.BillerName, 
            cmd.BillerCategory, cmd.BillNumber, cmd.Amount);

        // Generate 6-digit OTP
        var rawOtp = Random.Shared.Next(100000, 999999).ToString();
        payment.SetOtp(otpHasher.Hash(rawOtp));

        await paymentRepo.AddAsync(payment, ct);
        await paymentRepo.SaveChangesAsync(ct);

        // Send OTP email
        var emailBody = $@"
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
          <h2 style='color: #1a1a2e;'>FinVault</h2>
          <h3>External Bill Payment Verification</h3>
          <p>Hello,</p>
          <p>You are paying <strong>Rs. {cmd.Amount:N2}</strong> to <strong>{cmd.BillerName}</strong> ({cmd.BillerCategory}).</p>
          <p>Bill Number: <strong>{cmd.BillNumber}</strong></p>
          <p>Your verification code is:</p>
          <div style='background: #f0f0f0; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 20px 0;'>
            {rawOtp}
          </div>
          <p>This code expires in <strong>5 minutes</strong>.</p>
          <p>If you didn't initiate this payment, please contact support immediately.</p>
          <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
          <p style='color: #999; font-size: 12px;'>FinVault — Credit Card Management Platform</p>
        </div>";

        await emailService.SendEmailAsync(
            cmd.Email,
            "FinVault — External Bill Payment Verification",
            emailBody, ct);

        return ApiResponse<ExternalBillPaymentResponse>.Ok(MapToResponse(payment), 
            "OTP sent to your email. Please verify to complete payment.");
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
