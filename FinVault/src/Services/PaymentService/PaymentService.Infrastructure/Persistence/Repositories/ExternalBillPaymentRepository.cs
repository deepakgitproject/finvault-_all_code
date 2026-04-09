using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class ExternalBillPaymentRepository(PaymentDbContext db) : IExternalBillPaymentRepository
{
    public async Task<ExternalBillPayment?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await db.ExternalBillPayments.FindAsync([id], ct);
    }

    public async Task<List<ExternalBillPayment>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
    {
        return await db.ExternalBillPayments
            .Where(p => p.UserId == userId)
            .OrderByDescending(p => p.CreatedAt)
            .ToListAsync(ct);
    }

    public async Task AddAsync(ExternalBillPayment payment, CancellationToken ct = default)
    {
        await db.ExternalBillPayments.AddAsync(payment, ct);
    }

    public void Update(ExternalBillPayment payment)
    {
        db.ExternalBillPayments.Update(payment);
    }

    public async Task SaveChangesAsync(CancellationToken ct = default)
    {
        await db.SaveChangesAsync(ct);
    }
}
