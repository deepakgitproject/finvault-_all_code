using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface IPaymentRepository
{
    Task<Payment?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<Payment>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<List<Payment>> GetByBillIdAsync(Guid billId, CancellationToken ct = default);
    Task AddAsync(Payment payment, CancellationToken ct = default);
    void Update(Payment payment);
    Task SaveChangesAsync(CancellationToken ct = default);
}
