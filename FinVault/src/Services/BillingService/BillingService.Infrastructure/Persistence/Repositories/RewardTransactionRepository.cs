using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;

namespace BillingService.Infrastructure.Persistence.Repositories;

public class RewardTransactionRepository(BillingDbContext db) : IRewardTransactionRepository
{
    public async Task AddAsync(RewardTransaction transaction, CancellationToken ct = default)
        => await db.RewardTransactions.AddAsync(transaction, ct);

    public async Task<List<RewardTransaction>> GetByAccountIdAsync(Guid rewardAccountId,
        CancellationToken ct = default)
        => await db.RewardTransactions
            .Where(t => t.RewardAccountId == rewardAccountId)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync(ct);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
