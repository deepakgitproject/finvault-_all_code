using FinVault.Shared.Contracts.Responses;
using IdentityService.Application.Commands.RefreshToken;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using MediatR;

public class RefreshTokenCommandHandler(
IUserRepository userRepo, IRefreshTokenRepository refreshRepo, ITokenService tokenService
) : IRequestHandler<RefreshTokenCommand, ApiResponse<AuthResponse>>
{
    public async Task<ApiResponse<AuthResponse>> Handle(
    RefreshTokenCommand cmd, CancellationToken ct)
    {
        var hash = tokenService.HashToken(cmd.RefreshToken);
        var stored = await refreshRepo.GetByTokenHashAsync(hash, ct);
        if (stored is null || !stored.IsActive)
            return ApiResponse<AuthResponse>.Fail("Refresh token is invalid or expired.");
        var user = await userRepo.GetByIdAsync(stored.UserId, ct);
        if (user is null || !user.IsActive)
            return ApiResponse<AuthResponse>.Fail("User not found or inactive.");
        // Rotate — revoke old, issue new
        stored.Revoke(); refreshRepo.Update(stored);
        var newRaw = tokenService.GenerateRefreshToken();
        await refreshRepo.AddAsync(RefreshToken.Create(user.Id, tokenService.HashToken(newRaw)), ct);
        await refreshRepo.SaveChangesAsync(ct);
        return ApiResponse<AuthResponse>.Ok(new AuthResponse
        {
            AccessToken = tokenService.GenerateJwt(user),
            RefreshToken = newRaw,
            ExpiresIn = 900,
            UserId = user.Id,
            Email = user.Email,
            Role = user.Role,
            IsEmailVerified = user.IsEmailVerified
        });
    }
}