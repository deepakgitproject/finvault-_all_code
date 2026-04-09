using BillingService.Domain.Entities;

namespace BillingService.Domain.Interfaces.Repositories;

public interface IPaymentScheduleRepository
{
    Task<PaymentSchedule?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<PaymentSchedule>> GetByBillIdAsync(Guid billId, CancellationToken ct = default);
    Task AddAsync(PaymentSchedule schedule, CancellationToken ct = default);
    void Update(PaymentSchedule schedule);
    Task SaveChangesAsync(CancellationToken ct = default);
}
