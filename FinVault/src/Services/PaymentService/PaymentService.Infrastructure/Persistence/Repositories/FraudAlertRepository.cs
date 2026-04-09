using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class FraudAlertRepository(PaymentDbContext db) : IFraudAlertRepository
{
    public async Task<List<FraudAlert>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.FraudAlerts.Where(a => a.UserId == userId)
            .OrderByDescending(a => a.CreatedAt).ToListAsync(ct);

    public async Task<List<FraudAlert>> GetOpenAlertsAsync(CancellationToken ct = default)
        => await db.FraudAlerts.Where(a => a.Status == "Open")
            .OrderByDescending(a => a.CreatedAt).ToListAsync(ct);

    public async Task AddAsync(FraudAlert alert, CancellationToken ct = default)
        => await db.FraudAlerts.AddAsync(alert, ct);

    public void Update(FraudAlert alert) => db.FraudAlerts.Update(alert);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
