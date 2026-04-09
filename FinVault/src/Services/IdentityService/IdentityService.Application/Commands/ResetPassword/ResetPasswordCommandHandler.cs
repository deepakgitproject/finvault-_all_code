using MediatR;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Commands.ResetPassword;

public class ResetPasswordCommandHandler(
    IUserRepository userRepo,
    IOTPRepository otpRepo,
    IPasswordHasher passwordHasher,
    IOTPHasher otpHasher
) : IRequestHandler<ResetPasswordCommand, ApiResponse<string>>
{
    public async Task<ApiResponse<string>> Handle(
        ResetPasswordCommand cmd, CancellationToken ct)
    {
        var user = await userRepo.GetByEmailAsync(cmd.Email, ct);
        if (user is null)
            return ApiResponse<string>.Fail("Invalid request.");

        var otp = await otpRepo.GetLatestValidAsync(user.Id, "PasswordReset", ct);
        if (otp is null || !otpHasher.Verify(cmd.OtpCode, otp.CodeHash))
            return ApiResponse<string>.Fail("Invalid or expired OTP.");

        otp.MarkUsed();
        otpRepo.Update(otp);

        user.UpdatePassword(passwordHasher.Hash(cmd.NewPassword));
        userRepo.Update(user);

        await userRepo.SaveChangesAsync(ct);

        return ApiResponse<string>.Ok("Password reset successfully.");
    }
}