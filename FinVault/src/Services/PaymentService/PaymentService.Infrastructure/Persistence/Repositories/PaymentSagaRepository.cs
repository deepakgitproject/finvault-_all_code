using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class PaymentSagaRepository(PaymentDbContext db) : IPaymentSagaRepository
{
    public async Task<PaymentSaga?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.PaymentSagas.FirstOrDefaultAsync(s => s.Id == id, ct);

    public async Task<PaymentSaga?> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default)
        => await db.PaymentSagas.FirstOrDefaultAsync(s => s.PaymentId == paymentId, ct);

    public async Task AddAsync(PaymentSaga saga, CancellationToken ct = default)
        => await db.PaymentSagas.AddAsync(saga, ct);

    public void Update(PaymentSaga saga) => db.PaymentSagas.Update(saga);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
