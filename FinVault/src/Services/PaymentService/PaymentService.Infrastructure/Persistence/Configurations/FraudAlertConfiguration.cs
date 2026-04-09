using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class FraudAlertConfiguration : IEntityTypeConfiguration<FraudAlert>
{
    public void Configure(EntityTypeBuilder<FraudAlert> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.AlertType).HasMaxLength(50).IsRequired();
        b.Property(x => x.RiskScore).HasColumnType("decimal(5,2)").IsRequired();
        b.Property(x => x.Status).HasMaxLength(20).IsRequired();
        b.Property(x => x.CreatedAt).IsRequired();
        b.HasIndex(x => x.UserId);
    }
}
