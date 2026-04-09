using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence.Configurations;

public class BillConfiguration : IEntityTypeConfiguration<Bill>
{
    public void Configure(EntityTypeBuilder<Bill> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.CardId).IsRequired();
        b.Property(x => x.TotalAmount).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.MinimumDue).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.AmountPaid).HasColumnType("decimal(18,2)").IsRequired().HasDefaultValue(0m);
        b.Property(x => x.DueDate).IsRequired();
        b.Property(x => x.BillingMonth).HasMaxLength(7).IsRequired();
        b.Property(x => x.Status).HasMaxLength(20).IsRequired();
        b.Property(x => x.IsDeleted).IsRequired().HasDefaultValue(false);
        b.Property(x => x.CreatedAt).IsRequired();
        b.Ignore(x => x.RemainingBalance); // Computed — not stored in DB
        b.HasIndex(x => new { x.UserId, x.CardId, x.BillingMonth }).IsUnique()
            .HasFilter("[IsDeleted] = 0");
    }
}
