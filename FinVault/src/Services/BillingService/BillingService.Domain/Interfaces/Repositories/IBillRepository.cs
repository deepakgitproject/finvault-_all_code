using BillingService.Domain.Entities;

namespace BillingService.Domain.Interfaces.Repositories;

public interface IBillRepository
{
    Task<Bill?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<Bill>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<List<Bill>> GetByUserIdFilteredAsync(Guid userId, string? status = null,
        string? billingMonth = null, CancellationToken ct = default);
    Task<List<Bill>> GetUpcomingAsync(Guid userId, int days, CancellationToken ct = default);
    Task<bool> ExistsAsync(Guid userId, Guid cardId, string billingMonth, CancellationToken ct = default);
    Task AddAsync(Bill bill, CancellationToken ct = default);
    void Update(Bill bill);
    Task SaveChangesAsync(CancellationToken ct = default);
}
