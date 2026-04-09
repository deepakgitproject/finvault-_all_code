using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class RiskScoreRepository(PaymentDbContext db) : IRiskScoreRepository
{
    public async Task<RiskScore?> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default)
        => await db.RiskScores.FirstOrDefaultAsync(r => r.PaymentId == paymentId, ct);

    public async Task<List<RiskScore>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.RiskScores.Where(r => r.UserId == userId)
            .OrderByDescending(r => r.CreatedAt).ToListAsync(ct);

    public async Task AddAsync(RiskScore riskScore, CancellationToken ct = default)
        => await db.RiskScores.AddAsync(riskScore, ct);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
