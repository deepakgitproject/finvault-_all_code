using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;

namespace PaymentService.Infrastructure.Persistence.Repositories;

public class TransactionRepository(PaymentDbContext db) : ITransactionRepository
{
    public async Task<List<Transaction>> GetByPaymentIdAsync(Guid paymentId, CancellationToken ct = default)
        => await db.Transactions.Where(t => t.PaymentId == paymentId)
            .OrderByDescending(t => t.CreatedAt).ToListAsync(ct);

    public async Task<List<Transaction>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.Transactions.Where(t => t.UserId == userId)
            .OrderByDescending(t => t.CreatedAt).ToListAsync(ct);

    public async Task<List<Transaction>> GetByCardIdAsync(Guid userId, Guid cardId, CancellationToken ct = default)
        => await db.Transactions.Where(t => t.UserId == userId && t.CardId == cardId)
            .OrderByDescending(t => t.CreatedAt).ToListAsync(ct);

    public async Task<bool> ExistsForPaymentAsync(Guid paymentId, CancellationToken ct = default)
        => await db.Transactions.AnyAsync(t => t.PaymentId == paymentId, ct);

    public async Task AddAsync(Transaction transaction, CancellationToken ct = default)
        => await db.Transactions.AddAsync(transaction, ct);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
