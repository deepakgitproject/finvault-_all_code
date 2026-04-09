using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BillingService.Domain.Entities;

namespace BillingService.Infrastructure.Persistence.Configurations;

public class RewardTierConfiguration : IEntityTypeConfiguration<RewardTier>
{
    // Deterministic GUIDs for seeded tiers (stable across migrations)
    private static readonly Guid SilverId = new("11111111-1111-1111-1111-111111111111");
    private static readonly Guid GoldId   = new("22222222-2222-2222-2222-222222222222");
    private static readonly Guid PlatId   = new("33333333-3333-3333-3333-333333333333");

    public void Configure(EntityTypeBuilder<RewardTier> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.Name).HasMaxLength(20).IsRequired();
        b.HasIndex(x => x.Name).IsUnique();
        b.Property(x => x.MinPoints).IsRequired();
        b.Property(x => x.CashbackPercent).HasColumnType("decimal(4,2)").IsRequired();
        b.Property(x => x.CreatedAt).IsRequired();

        // Seed default tiers
        var now = new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero);
        b.HasData(
            new { Id = SilverId, Name = "Silver", MinPoints = 0, CashbackPercent = 0.50m, CreatedAt = now },
            new { Id = GoldId, Name = "Gold", MinPoints = 5000, CashbackPercent = 1.00m, CreatedAt = now },
            new { Id = PlatId, Name = "Platinum", MinPoints = 20000, CashbackPercent = 2.00m, CreatedAt = now }
        );
    }
}
