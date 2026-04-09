using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
{
    public void Configure(EntityTypeBuilder<Payment> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.CardId).IsRequired();
        b.Property(x => x.BillId).IsRequired();
        b.Property(x => x.Amount).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.PaymentType).HasMaxLength(20).IsRequired();
        b.Property(x => x.Status).HasMaxLength(20).IsRequired();
        b.Property(x => x.FailureReason).HasMaxLength(300);
        b.Property(x => x.IsDeleted).IsRequired().HasDefaultValue(false);
        b.Property(x => x.CreatedAt).IsRequired();
        b.Ignore(x => x.IsCompleted);
        b.Ignore(x => x.IsFailed);
        b.HasIndex(x => x.UserId);
        b.HasIndex(x => x.BillId);
    }
}
