using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface IPaymentSagaRepository
{
    Task<PaymentSaga?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<PaymentSaga?> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default);
    Task AddAsync(PaymentSaga saga, CancellationToken ct = default);
    void Update(PaymentSaga saga);
    Task SaveChangesAsync(CancellationToken ct = default);
}
