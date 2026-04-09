using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;

namespace BillingService.Infrastructure.Persistence.Repositories;

public class RewardAccountRepository(BillingDbContext db) : IRewardAccountRepository
{
    public async Task<RewardAccount?> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.RewardAccounts.Include(a => a.Tier)
            .FirstOrDefaultAsync(a => a.UserId == userId, ct);

    public async Task AddAsync(RewardAccount account, CancellationToken ct = default)
        => await db.RewardAccounts.AddAsync(account, ct);

    public void Update(RewardAccount account) => db.RewardAccounts.Update(account);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
