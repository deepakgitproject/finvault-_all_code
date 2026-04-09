namespace IdentityService.Domain.Interfaces.Repositories;

using IdentityService.Domain.Entities;
public interface IRefreshTokenRepository
{
    Task<RefreshToken?> GetByTokenHashAsync(string hash,
        CancellationToken ct = default);
    Task AddAsync(RefreshToken token, CancellationToken ct = default);
    void Update(RefreshToken token);
    Task RevokeAllForUserAsync(Guid userId,
        CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}