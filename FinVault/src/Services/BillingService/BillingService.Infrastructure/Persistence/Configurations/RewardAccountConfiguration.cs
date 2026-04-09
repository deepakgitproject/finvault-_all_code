using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence.Configurations;

public class RewardAccountConfiguration : IEntityTypeConfiguration<RewardAccount>
{
    public void Configure(EntityTypeBuilder<RewardAccount> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.UserId).IsRequired();
        b.HasIndex(x => x.UserId).IsUnique();
        b.Property(x => x.TierId).IsRequired();
        b.Property(x => x.AvailablePoints).IsRequired().HasDefaultValue(0);
        b.Property(x => x.TotalEarned).IsRequired().HasDefaultValue(0);
        b.Property(x => x.CreatedAt).IsRequired();

        b.HasOne(x => x.Tier)
            .WithMany()
            .HasForeignKey(x => x.TierId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
