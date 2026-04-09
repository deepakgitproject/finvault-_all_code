using BillingService.Domain.Entities;

namespace BillingService.Domain.Interfaces.Repositories;

public interface IRewardTransactionRepository
{
    Task AddAsync(RewardTransaction transaction, CancellationToken ct = default);
    Task<List<RewardTransaction>> GetByAccountIdAsync(Guid rewardAccountId, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}
