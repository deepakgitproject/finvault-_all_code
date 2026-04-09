using Microsoft.EntityFrameworkCore;
using CardService.Domain.Entities;
using CardService.Domain.Interfaces.Repositories;

namespace CardService.Infrastructure.Persistence.Repositories;

public class CardIssuerRepository(CardDbContext db) : ICardIssuerRepository
{
    public async Task<CardIssuer?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.CardIssuers.FirstOrDefaultAsync(i => i.Id == id, ct);

    public async Task<CardIssuer?> GetByNameAsync(string name, CancellationToken ct = default)
        => await db.CardIssuers.FirstOrDefaultAsync(
            i => i.Name.ToLower() == name.ToLower(), ct);

    public async Task<List<CardIssuer>> GetAllAsync(CancellationToken ct = default)
        => await db.CardIssuers.OrderBy(i => i.Name).ToListAsync(ct);

    public async Task AddAsync(CardIssuer issuer, CancellationToken ct = default)
        => await db.CardIssuers.AddAsync(issuer, ct);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
