using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface IRiskScoreRepository
{
    Task<RiskScore?> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default);
    Task<List<RiskScore>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task AddAsync(RiskScore riskScore, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}
