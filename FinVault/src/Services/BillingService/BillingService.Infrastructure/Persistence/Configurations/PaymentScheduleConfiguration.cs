using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence.Configurations;

public class PaymentScheduleConfiguration : IEntityTypeConfiguration<PaymentSchedule>
{
    public void Configure(EntityTypeBuilder<PaymentSchedule> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.BillId).IsRequired();
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.Amount).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.ScheduledDate).IsRequired();
        b.Property(x => x.Status).HasMaxLength(20).IsRequired();
        b.Property(x => x.CreatedAt).IsRequired();

        b.HasOne(x => x.Bill)
            .WithMany()
            .HasForeignKey(x => x.BillId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
