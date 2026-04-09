using BillingService.Domain.Entities;

namespace BillingService.Domain.Interfaces.Repositories;

public interface IRewardAccountRepository
{
    Task<RewardAccount?> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task AddAsync(RewardAccount account, CancellationToken ct = default);
    void Update(RewardAccount account);
    Task SaveChangesAsync(CancellationToken ct = default);
}
