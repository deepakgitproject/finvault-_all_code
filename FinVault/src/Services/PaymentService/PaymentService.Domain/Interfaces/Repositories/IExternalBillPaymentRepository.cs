using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface IExternalBillPaymentRepository
{
    Task<ExternalBillPayment?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<ExternalBillPayment>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task AddAsync(ExternalBillPayment payment, CancellationToken ct = default);
    void Update(ExternalBillPayment payment);
    Task SaveChangesAsync(CancellationToken ct = default);
}
