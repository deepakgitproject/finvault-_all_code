using Microsoft.EntityFrameworkCore;
using CardService.Domain.Entities;
using CardService.Domain.Interfaces.Repositories;

namespace CardService.Infrastructure.Persistence.Repositories;

public class CreditCardRepository(CardDbContext db) : ICreditCardRepository
{
    public async Task<CreditCard?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.CreditCards.Include(c => c.Issuer)
            .FirstOrDefaultAsync(c => c.Id == id, ct);

    public async Task<List<CreditCard>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.CreditCards.Include(c => c.Issuer)
            .Where(c => c.UserId == userId && !c.IsDeleted)
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync(ct);

    public async Task<CreditCard?> GetDefaultCardAsync(Guid userId, CancellationToken ct = default)
        => await db.CreditCards.Include(c => c.Issuer)
            .FirstOrDefaultAsync(c => c.UserId == userId && c.IsDefault && !c.IsDeleted, ct);

    public async Task<bool> ExistsByLastFourAsync(Guid userId, string lastFour, string cardholderName,
        CancellationToken ct = default)
        => await db.CreditCards.AnyAsync(
            c => c.UserId == userId && c.CardNumberLastFour == lastFour && c.CardholderName == cardholderName && !c.IsDeleted, ct);

    public async Task AddAsync(CreditCard card, CancellationToken ct = default)
        => await db.CreditCards.AddAsync(card, ct);

    public void Update(CreditCard card) => db.CreditCards.Update(card);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
