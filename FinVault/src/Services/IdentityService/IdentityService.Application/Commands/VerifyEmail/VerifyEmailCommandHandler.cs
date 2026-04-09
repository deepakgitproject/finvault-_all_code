using MediatR;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.VerifyEmail;

public class VerifyEmailCommandHandler(
    IUserRepository userRepo,
    IOTPRepository otpRepo,
    IOTPHasher otpHasher          // <-- uses interface, NOT BCrypt
) : IRequestHandler<VerifyEmailCommand, ApiResponse<string>>
{
    public async Task<ApiResponse<string>> Handle(
        VerifyEmailCommand cmd, CancellationToken ct)
    {
        var otp = await otpRepo.GetLatestValidAsync(
            cmd.UserId, "EmailVerification", ct);
        if (otp is null)
            return ApiResponse<string>.Fail(
                "OTP not found or expired.");
        if (!otpHasher.Verify(cmd.OtpCode, otp.CodeHash))
            return ApiResponse<string>.Fail("Invalid OTP code.");
        otp.MarkUsed(); otpRepo.Update(otp);
        var user = await userRepo.GetByIdAsync(cmd.UserId, ct);
        user!.VerifyEmail(); userRepo.Update(user);
        await userRepo.SaveChangesAsync(ct);
        return ApiResponse<string>.Ok(
            "Email verified successfully.");
    }
}