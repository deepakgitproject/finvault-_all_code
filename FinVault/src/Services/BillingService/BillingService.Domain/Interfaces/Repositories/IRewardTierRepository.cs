using BillingService.Domain.Entities;

namespace BillingService.Domain.Interfaces.Repositories;

public interface IRewardTierRepository
{
    Task<RewardTier?> GetByNameAsync(string name, CancellationToken ct = default);
    Task<List<RewardTier>> GetAllAsync(CancellationToken ct = default);
    Task<RewardTier?> GetTierForPointsAsync(int totalPoints, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}
