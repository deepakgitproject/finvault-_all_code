using MediatR;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Commands.LoginUser;

public class LoginUserCommandHandler(
    IUserRepository userRepo,
    IRefreshTokenRepository refreshRepo,
    ITokenService tokenService,
    IPasswordHasher passwordHasher
) : IRequestHandler<LoginUserCommand, ApiResponse<AuthResponse>>
{
    public async Task<ApiResponse<AuthResponse>> Handle(
        LoginUserCommand cmd, CancellationToken ct)
    {
        var user = await userRepo.GetByEmailAsync(cmd.Email, ct);

        // Same error message for both cases — do not reveal which one failed (security)
        if (user is null || !passwordHasher.Verify(cmd.Password, user.PasswordHash))
            throw new FinVault.Shared.Exceptions.InvalidCredentialsException("Invalid email or password.");

        if (!user.IsActive)
            return ApiResponse<AuthResponse>.Fail("Account is disabled. Contact support.");

        // Revoke all old refresh tokens (single active session)
        await refreshRepo.RevokeAllForUserAsync(user.Id, ct);
        await refreshRepo.SaveChangesAsync(ct);

        // Issue new token pair
        var jwt = tokenService.GenerateJwt(user);
        var rawRef = tokenService.GenerateRefreshToken();
        await userRepo.AddRefreshTokenAsync(
            IdentityService.Domain.Entities.RefreshToken.Create(user.Id, tokenService.HashToken(rawRef)), ct);
        await userRepo.SaveChangesAsync(ct);

        return ApiResponse<AuthResponse>.Ok(new AuthResponse
        {
            AccessToken = jwt,
            RefreshToken = rawRef,
            ExpiresIn = 900,
            UserId = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            Role = user.Role,
            IsEmailVerified = user.IsEmailVerified
        });
    }
}