using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
{
    public void Configure(EntityTypeBuilder<Transaction> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.PaymentId).IsRequired();
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.CardId).IsRequired();
        b.Property(x => x.Amount).HasColumnType("decimal(18,2)").IsRequired();
        b.Property(x => x.Type).HasMaxLength(20).IsRequired();
        b.Property(x => x.Category).HasMaxLength(50).IsRequired().HasDefaultValue("Card Bill");
        b.Property(x => x.Description).HasMaxLength(300);
        b.Property(x => x.CreatedAt).IsRequired();
        b.HasIndex(x => x.PaymentId);
        b.HasIndex(x => x.UserId);
        b.HasIndex(x => x.CardId);
    }
}
