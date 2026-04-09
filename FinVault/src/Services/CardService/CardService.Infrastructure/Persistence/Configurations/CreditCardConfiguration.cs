using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CardService.Domain.Entities;

namespace CardService.Infrastructure.Persistence.Configurations;

public class CreditCardConfiguration : IEntityTypeConfiguration<CreditCard>
{
    public void Configure(EntityTypeBuilder<CreditCard> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.MaskedNumber).HasMaxLength(20).IsRequired();
        b.Property(x => x.EncryptedCardNumber).HasMaxLength(500).IsRequired();
        b.Property(x => x.EncryptedCVV).HasMaxLength(200).IsRequired();
        b.Property(x => x.CardNumberLastFour).HasMaxLength(4).IsRequired();
        b.Property(x => x.CardholderName).HasMaxLength(200).IsRequired();
        b.Property(x => x.ExpiryMonth).IsRequired();
        b.Property(x => x.ExpiryYear).IsRequired();
        b.Property(x => x.IssuerId).IsRequired();
        b.Property(x => x.CreditLimit).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.OutstandingBalance).HasColumnType("decimal(18,2)").IsRequired().HasDefaultValue(0m);
        b.Property(x => x.BillingCycleStartDay).IsRequired();
        b.Property(x => x.IsDefault).IsRequired().HasDefaultValue(false);
        b.Property(x => x.IsVerified).IsRequired().HasDefaultValue(false);
        b.Property(x => x.IsDeleted).IsRequired().HasDefaultValue(false);
        b.Property(x => x.CreatedAt).IsRequired();

        // Computed properties — not stored in DB
        b.Ignore(x => x.AvailableCredit);
        b.Ignore(x => x.Utilization);
        b.Ignore(x => x.IsExpired);

        // Navigation to CardIssuer
        b.HasOne(x => x.Issuer)
            .WithMany()
            .HasForeignKey(x => x.IssuerId)
            .OnDelete(DeleteBehavior.Restrict);

        b.HasIndex(x => new { x.UserId, x.CardNumberLastFour, x.CardholderName })
            .IsUnique()
            .HasFilter("[IsDeleted] = 0");
    }
}
