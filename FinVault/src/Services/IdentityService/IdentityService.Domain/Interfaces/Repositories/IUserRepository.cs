namespace IdentityService.Domain.Interfaces.Repositories;

using IdentityService.Domain.Entities;
public interface IUserRepository
{
    Task<User?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<User?> GetByEmailAsync(string email, CancellationToken ct = default);
    Task<bool> ExistsByEmailAsync(string email, CancellationToken ct = default);
    Task AddAsync(User user, CancellationToken ct = default);
    void Update(User user);
    Task AddRefreshTokenAsync(RefreshToken token, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}