using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityService.Infrastructure.Persistence.Repositories
{
    public class RefreshTokenRepository(IdentityDbContext db) : IRefreshTokenRepository
    {
        public async Task<RefreshToken?> GetByTokenHashAsync(string hash, CancellationToken ct = default)
        => await db.RefreshTokens.FirstOrDefaultAsync(r => r.Token == hash, ct);
        public async Task AddAsync(RefreshToken token, CancellationToken ct = default)
        => await db.RefreshTokens.AddAsync(token, ct);
        public void Update(RefreshToken token) => db.RefreshTokens.Update(token);
        public async Task RevokeAllForUserAsync(Guid userId, CancellationToken ct = default)
        {
            var active = await db.RefreshTokens
            .Where(r => r.UserId == userId && !r.IsRevoked)
            .ToListAsync(ct);
            foreach (var t in active) t.Revoke();
        }
        public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
    }
}
