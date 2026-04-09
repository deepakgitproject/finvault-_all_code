using MediatR;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Events;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Commands.SendOTP;

public class SendOTPCommandHandler(
    IUserRepository userRepo,
    IOTPRepository otpRepo,
    IOTPHasher otpHasher,
    IEventPublisher publisher,
    IEmailService emailService
) : IRequestHandler<SendOTPCommand, ApiResponse<string>>
{
    public async Task<ApiResponse<string>> Handle(
        SendOTPCommand cmd, CancellationToken ct)
    {
        var user = await userRepo.GetByEmailAsync(cmd.Email, ct);

        // Always return success — never reveal if email exists (security)
        if (user is null)
            return ApiResponse<string>.Ok("If that email exists, an OTP was sent.");

        var rawOtp = Random.Shared.Next(100000, 999999).ToString();
        var hashed = otpHasher.Hash(rawOtp);

        await otpRepo.AddAsync(
            OTPCode.Create(user.Id, hashed, cmd.Purpose), ct);
        await otpRepo.SaveChangesAsync(ct);

        // Send real OTP email
        var emailBody = $@"
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
          <h2 style='color: #1a1a2e;'>FinVault</h2>
          <h3>Password Reset</h3>
          <p>Hello {user.FirstName},</p>
          <p>Your password reset code is:</p>
          <div style='background: #f0f0f0; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 20px 0;'>
            {rawOtp}
          </div>
          <p>This code expires in <strong>5 minutes</strong>.</p>
          <p>If you didn't request a password reset, please ignore this email.</p>
          <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
          <p style='color: #999; font-size: 12px;'>FinVault — Credit Card Management Platform</p>
        </div>";

        await emailService.SendEmailAsync(
            user.Email,
            "FinVault — Password Reset OTP",
            emailBody, ct);

        await publisher.PublishAsync(new PasswordResetRequestedEvent
        {
            UserId = user.Id,
            Email = user.Email,
            OtpCode = rawOtp,
            CorrelationId = Guid.NewGuid().ToString()
        }, ct);

        return ApiResponse<string>.Ok("OTP sent. Check your email. Valid for 5 minutes.");
    }
}