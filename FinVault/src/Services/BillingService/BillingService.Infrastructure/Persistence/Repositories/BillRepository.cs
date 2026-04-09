using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;

namespace BillingService.Infrastructure.Persistence.Repositories;

public class BillRepository(BillingDbContext db) : IBillRepository
{
    public async Task<Bill?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.Bills.FirstOrDefaultAsync(b => b.Id == id, ct);

    public async Task<List<Bill>> GetByUserIdAsync(Guid userId, CancellationToken ct = default)
        => await db.Bills.Where(b => b.UserId == userId && !b.IsDeleted)
            .OrderByDescending(b => b.CreatedAt).ToListAsync(ct);

    public async Task<List<Bill>> GetByUserIdFilteredAsync(Guid userId, string? status = null,
        string? billingMonth = null, CancellationToken ct = default)
    {
        var query = db.Bills.Where(b => b.UserId == userId && !b.IsDeleted);

        if (!string.IsNullOrWhiteSpace(status))
            query = query.Where(b => b.Status == status);

        if (!string.IsNullOrWhiteSpace(billingMonth))
            query = query.Where(b => b.BillingMonth == billingMonth);

        return await query.OrderByDescending(b => b.CreatedAt).ToListAsync(ct);
    }

    public async Task<List<Bill>> GetUpcomingAsync(Guid userId, int days, CancellationToken ct = default)
    {
        var cutoff = DateTimeOffset.UtcNow.AddDays(days);
        return await db.Bills
            .Where(b => b.UserId == userId && !b.IsDeleted
                && b.Status != "Paid"
                && b.DueDate <= cutoff && b.DueDate >= DateTimeOffset.UtcNow)
            .OrderBy(b => b.DueDate)
            .ToListAsync(ct);
    }

    public async Task<bool> ExistsAsync(Guid userId, Guid cardId, string billingMonth,
        CancellationToken ct = default)
        => await db.Bills.AnyAsync(b => b.UserId == userId && b.CardId == cardId
            && b.BillingMonth == billingMonth && !b.IsDeleted, ct);

    public async Task AddAsync(Bill bill, CancellationToken ct = default)
        => await db.Bills.AddAsync(bill, ct);

    public void Update(Bill bill) => db.Bills.Update(bill);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
