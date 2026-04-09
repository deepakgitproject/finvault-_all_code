using CardService.Domain.Entities;

namespace CardService.Domain.Interfaces.Repositories;

public interface ICreditCardRepository
{
    Task<CreditCard?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<CreditCard>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<CreditCard?> GetDefaultCardAsync(Guid userId, CancellationToken ct = default);
    Task<bool> ExistsByLastFourAsync(Guid userId, string lastFour, string cardholderName, CancellationToken ct = default);
    Task AddAsync(CreditCard card, CancellationToken ct = default);
    void Update(CreditCard card);
    Task SaveChangesAsync(CancellationToken ct = default);
}
