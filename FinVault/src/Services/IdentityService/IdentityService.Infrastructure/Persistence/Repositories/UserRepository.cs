using Microsoft.EntityFrameworkCore;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces.Repositories;
using IdentityService.Infrastructure.Persistence;
namespace IdentityService.Infrastructure.Persistence.Repositories;

public class UserRepository(IdentityDbContext db) : IUserRepository
{
    public async Task<User?> GetByIdAsync(Guid id, CancellationToken ct = default)
    => await db.Users.FirstOrDefaultAsync(u => u.Id == id, ct);
    public async Task<User?> GetByEmailAsync(string email, CancellationToken ct = default)
    => await db.Users.FirstOrDefaultAsync(u => u.Email == email.ToLowerInvariant(), ct);
    public async Task<bool> ExistsByEmailAsync(string email, CancellationToken ct = default)
    => await db.Users.AnyAsync(u => u.Email == email.ToLowerInvariant(), ct);
    public async Task AddAsync(User user, CancellationToken ct = default)
    => await db.Users.AddAsync(user, ct);
    public void Update(User user) => db.Users.Update(user);
    public async Task AddRefreshTokenAsync(RefreshToken token, CancellationToken ct = default)
    => await db.RefreshTokens.AddAsync(token, ct);
    public async Task SaveChangesAsync(CancellationToken ct = default)
=> await db.SaveChangesAsync(ct);
}