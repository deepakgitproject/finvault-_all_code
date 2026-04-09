using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class PaymentRepository(PaymentDbContext db) : IPaymentRepository
{
    public async Task<Payment?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.Payments.FirstOrDefaultAsync(p => p.Id == id, ct);

    public async Task<List<Payment>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.Payments.Where(p => p.UserId == userId && !p.IsDeleted)
            .OrderByDescending(p => p.CreatedAt).ToListAsync(ct);

    public async Task<List<Payment>> GetByBillIdAsync(Guid billId, CancellationToken ct = default)
        => await db.Payments.Where(p => p.BillId == billId && !p.IsDeleted)
            .OrderByDescending(p => p.CreatedAt).ToListAsync(ct);

    public async Task AddAsync(Payment payment, CancellationToken ct = default)
        => await db.Payments.AddAsync(payment, ct);

    public void Update(Payment payment) => db.Payments.Update(payment);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
