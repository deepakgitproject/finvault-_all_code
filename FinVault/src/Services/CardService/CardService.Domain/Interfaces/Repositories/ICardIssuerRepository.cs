using CardService.Domain.Entities;

namespace CardService.Domain.Interfaces.Repositories;

public interface ICardIssuerRepository
{
    Task<CardIssuer?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<CardIssuer?> GetByNameAsync(string name, CancellationToken ct = default);
    Task<List<CardIssuer>> GetAllAsync(CancellationToken ct = default);
    Task AddAsync(CardIssuer issuer, CancellationToken ct = default);
    Task SaveChangesAsync(CancellationToken ct = default);
}
