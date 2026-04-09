using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;

namespace BillingService.Infrastructure.Persistence.Repositories;

public class RewardTierRepository(BillingDbContext db) : IRewardTierRepository
{
    public async Task<RewardTier?> GetByNameAsync(string name, CancellationToken ct = default)
        => await db.RewardTiers.FirstOrDefaultAsync(t => t.Name == name, ct);

    public async Task<List<RewardTier>> GetAllAsync(CancellationToken ct = default)
        => await db.RewardTiers.OrderBy(t => t.MinPoints).ToListAsync(ct);

    public async Task<RewardTier?> GetTierForPointsAsync(int totalPoints, CancellationToken ct = default)
        => await db.RewardTiers
            .Where(t => t.MinPoints <= totalPoints)
            .OrderByDescending(t => t.MinPoints)
            .FirstOrDefaultAsync(ct);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
