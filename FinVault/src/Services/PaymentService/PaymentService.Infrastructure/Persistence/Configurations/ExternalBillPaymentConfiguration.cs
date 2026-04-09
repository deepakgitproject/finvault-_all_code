using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class ExternalBillPaymentConfiguration : IEntityTypeConfiguration<ExternalBillPayment>
{
    public void Configure(EntityTypeBuilder<ExternalBillPayment> builder)
    {
        builder.HasKey(e => e.Id);

        builder.Property(e => e.BillerName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(e => e.BillerCategory)
            .HasMaxLength(50)
            .IsRequired();

        builder.Property(e => e.BillNumber)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(e => e.Amount)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Property(e => e.Status)
            .HasMaxLength(20)
            .IsRequired();

        builder.Property(e => e.OtpHash)
            .HasMaxLength(512);

        builder.Property(e => e.FailureReason)
            .HasMaxLength(300);

        builder.HasIndex(e => e.UserId);

        builder.Ignore(e => e.IsOtpExpired);
        builder.Ignore(e => e.IsCompleted);
    }
}
