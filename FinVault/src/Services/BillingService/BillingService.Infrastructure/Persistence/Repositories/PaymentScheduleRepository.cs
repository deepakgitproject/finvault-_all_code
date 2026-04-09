using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;

namespace BillingService.Infrastructure.Persistence.Repositories;

public class PaymentScheduleRepository(BillingDbContext db) : IPaymentScheduleRepository
{
    public async Task<PaymentSchedule?> GetByIdAsync(Guid id, CancellationToken ct = default)
        => await db.PaymentSchedules.FirstOrDefaultAsync(s => s.Id == id, ct);

    public async Task<List<PaymentSchedule>> GetByBillIdAsync(Guid billId, CancellationToken ct = default)
        => await db.PaymentSchedules.Where(s => s.BillId == billId)
            .OrderBy(s => s.ScheduledDate).ToListAsync(ct);

    public async Task AddAsync(PaymentSchedule schedule, CancellationToken ct = default)
        => await db.PaymentSchedules.AddAsync(schedule, ct);

    public void Update(PaymentSchedule schedule) => db.PaymentSchedules.Update(schedule);

    public async Task SaveChangesAsync(CancellationToken ct = default)
        => await db.SaveChangesAsync(ct);
}
