using Microsoft.EntityFrameworkCore;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence;

public class BillingDbContext(DbContextOptions<BillingDbContext> options)
    : DbContext(options)
{
    public DbSet<Bill> Bills => Set<Bill>();
    public DbSet<PaymentSchedule> PaymentSchedules => Set<PaymentSchedule>();
    public DbSet<RewardTier> RewardTiers => Set<RewardTier>();
    public DbSet<RewardAccount> RewardAccounts => Set<RewardAccount>();
    public DbSet<RewardTransaction> RewardTransactions => Set<RewardTransaction>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        // Picks up all IEntityTypeConfiguration<T> files in this assembly automatically
        mb.ApplyConfigurationsFromAssembly(typeof(BillingDbContext).Assembly);
        base.OnModelCreating(mb);
    }
}
