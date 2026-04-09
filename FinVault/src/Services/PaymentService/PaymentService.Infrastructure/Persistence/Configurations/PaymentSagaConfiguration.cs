using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PaymentService.Domain.Entities;

namespace PaymentService.Infrastructure.Persistence.Configurations;

public class PaymentSagaConfiguration : IEntityTypeConfiguration<PaymentSaga>
{
    public void Configure(EntityTypeBuilder<PaymentSaga> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.PaymentId).IsRequired();
        b.Property(x => x.CurrentState).HasMaxLength(50).IsRequired();
        b.Property(x => x.RiskScore).HasColumnType("decimal(5,2)");
        b.Property(x => x.CompensationReason).HasMaxLength(300);
        b.Property(x => x.CreatedAt).IsRequired();
        b.HasIndex(x => x.PaymentId).IsUnique();
    }
}
