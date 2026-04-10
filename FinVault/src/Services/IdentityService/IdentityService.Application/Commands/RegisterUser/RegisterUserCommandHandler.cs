using MediatR;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Events;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Commands.RegisterUser;

public class RegisterUserCommandHandler(
    IUserRepository userRepo,
    IOTPRepository otpRepo,
    ITokenService tokenService,
    IPasswordHasher passwordHasher,
    IOTPHasher otpHasher,
    IEventPublisher eventPublisher,
    IEmailService emailService
) : IRequestHandler<RegisterUserCommand, ApiResponse<AuthResponse>>
{
    public async Task<ApiResponse<AuthResponse>> Handle(
        RegisterUserCommand cmd, CancellationToken ct)
    {
        // 1. Check duplicate email
        if (await userRepo.ExistsByEmailAsync(cmd.Email, ct))
            throw new FinVault.Shared.Exceptions.UserAlreadyExistsException("A user with this email already exists.");

        // 2. Hash password via IPasswordHasher
        var hash = passwordHasher.Hash(cmd.Password);

        // 3. Create domain entity via factory method
        var user = User.Create(cmd.Email, hash, cmd.FirstName, cmd.LastName);

        // 4. Save user to database
        await userRepo.AddAsync(user, ct);
        await userRepo.SaveChangesAsync(ct);

        // 5. Generate 6-digit OTP for email verification
        var rawOtp = Random.Shared.Next(100000, 999999).ToString();
        var hashedOtp = otpHasher.Hash(rawOtp);
        await otpRepo.AddAsync(
            OTPCode.Create(user.Id, hashedOtp, "EmailVerification"), ct);
        await otpRepo.SaveChangesAsync(ct);

        // 6. Send real OTP email
        var emailBody = $@"
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
          <h2 style='color: #1a1a2e;'>FinVault</h2>
          <h3>Verify Your Email Address</h3>
          <p>Hello {user.FirstName},</p>
          <p>Your verification code is:</p>
          <div style='background: #f0f0f0; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 20px 0;'>
            {rawOtp}
          </div>
          <p>This code expires in <strong>5 minutes</strong>.</p>
          <p>If you didn't create a FinVault account, please ignore this email.</p>
          <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
          <p style='color: #999; font-size: 12px;'>FinVault — Credit Card Management Platform</p>
        </div>";

        await emailService.SendEmailAsync(
            user.Email,
            "FinVault — Verify Your Email",
            emailBody, ct);

        // 7. Generate JWT + refresh token
        var jwt = tokenService.GenerateJwt(user);
        var rawRefresh = tokenService.GenerateRefreshToken();
        var hashedRefresh = tokenService.HashToken(rawRefresh);
        await userRepo.AddRefreshTokenAsync(
            IdentityService.Domain.Entities.RefreshToken.Create(user.Id, hashedRefresh), ct);
        await userRepo.SaveChangesAsync(ct);

        // 8. Publish UserRegistered event to RabbitMQ
        await eventPublisher.PublishAsync(new UserRegisteredEvent
        {
            UserId = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            OtpCode = rawOtp,
            CorrelationId = Guid.NewGuid().ToString()
        }, ct);

        // 9. Return response
        return ApiResponse<AuthResponse>.Ok(new AuthResponse
        {
            AccessToken = jwt,
            RefreshToken = rawRefresh,
            ExpiresIn = 900,
            UserId = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            Role = user.Role,
            IsEmailVerified = user.IsEmailVerified
        }, "Registration successful. Check your email for the verification code.");
    }
}