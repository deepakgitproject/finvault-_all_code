using Microsoft.EntityFrameworkCore;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence;

public class PaymentDbContext(DbContextOptions<PaymentDbContext> options)
    : DbContext(options)
{
    public DbSet<Payment> Payments => Set<Payment>();
    public DbSet<PaymentSaga> PaymentSagas => Set<PaymentSaga>();
    public DbSet<Transaction> Transactions => Set<Transaction>();
    public DbSet<RiskScore> RiskScores => Set<RiskScore>();
    public DbSet<FraudAlert> FraudAlerts => Set<FraudAlert>();
    public DbSet<ExternalBillPayment> ExternalBillPayments => Set<ExternalBillPayment>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.ApplyConfigurationsFromAssembly(typeof(PaymentDbContext).Assembly);
        base.OnModelCreating(mb);
    }
}
