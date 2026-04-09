using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface IFraudAlertRepository
{
    Task<List<FraudAlert>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<List<FraudAlert>> GetOpenAlertsAsync(CancellationToken ct = default);
    Task AddAsync(FraudAlert alert, CancellationToken ct = default);
    void Update(FraudAlert alert);
    Task SaveChangesAsync(CancellationToken ct = default);
}
