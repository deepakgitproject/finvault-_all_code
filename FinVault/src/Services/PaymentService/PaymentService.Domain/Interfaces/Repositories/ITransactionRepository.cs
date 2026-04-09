using PaymentService.Domain.Entities;

namespace PaymentService.Domain.Interfaces.Repositories;

public interface ITransactionRepository
{
    Task<List<Transaction>> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default);
    Task<List<Transaction>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<List<Transaction>> GetByCardIdAsync(Guid userId, Guid cardId, CancellationToken ct = default);
    Task<bool> ExistsForPaymentAsync(Guid paymentId, CancellationToken ct = default);
    Task AddAsync(Transaction transaction, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}
