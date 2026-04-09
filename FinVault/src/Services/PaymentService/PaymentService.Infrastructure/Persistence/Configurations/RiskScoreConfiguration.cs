using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class RiskScoreConfiguration : IEntityTypeConfiguration<RiskScore>
{
    public void Configure(EntityTypeBuilder<RiskScore> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.Property(x => x.Score).HasColumnType("decimal(5,2)").IsRequired();
        b.Property(x => x.Decision).HasMaxLength(20).IsRequired();
        b.Property(x => x.CreatedAt).IsRequired();
        b.HasIndex(x => x.PaymentId);
    }
}
