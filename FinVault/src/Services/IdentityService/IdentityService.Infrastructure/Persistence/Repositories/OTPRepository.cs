using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityService.Infrastructure.Persistence.Repositories
{
    public class OTPRepository(IdentityDbContext db) : IOTPRepository
    {
        public async Task<OTPCode?> GetLatestValidAsync(
        Guid userId, string purpose, CancellationToken ct = default)
        => await db.OTPCodes
        .Where(o => o.UserId == userId && o.Purpose == purpose
        && !o.IsUsed && o.ExpiresAt > DateTimeOffset.UtcNow)
        .OrderByDescending(o => o.CreatedAt)
        .FirstOrDefaultAsync(ct);
        public async Task AddAsync(OTPCode otp, CancellationToken ct = default)
        => await db.OTPCodes.AddAsync(otp, ct);
        public void Update(OTPCode otp) => db.OTPCodes.Update(otp);
        public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
    }
}
