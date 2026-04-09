using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence.Configurations;

public class RewardTransactionConfiguration : IEntityTypeConfiguration<RewardTransaction>
{
    public void Configure(EntityTypeBuilder<RewardTransaction> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.RewardAccountId).IsRequired();
        b.Property(x => x.Type).HasMaxLength(20).IsRequired();
        b.Property(x => x.Points).IsRequired();
        b.Property(x => x.Description).HasMaxLength(200);
        b.Property(x => x.CreatedAt).IsRequired();

        b.HasOne(x => x.RewardAccount)
            .WithMany()
            .HasForeignKey(x => x.RewardAccountId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
