using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CardService.Domain.Entities;

namespace CardService.Infrastructure.Persistence.Configurations;

public class CardIssuerConfiguration : IEntityTypeConfiguration<CardIssuer>
{
    private static readonly Guid VisaId = new("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa");
    private static readonly Guid MasterId = new("bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb");
    private static readonly Guid AmexId = new("cccccccc-cccc-cccc-cccc-cccccccccccc");
    private static readonly Guid RuPayId = new("dddddddd-dddd-dddd-dddd-dddddddddddd");

    public void Configure(EntityTypeBuilder<CardIssuer> b)
    {
        b.HasKey(x => x.Id);
        b.Property(x => x.Name).HasMaxLength(50).IsRequired();
        b.HasIndex(x => x.Name).IsUnique();
        b.Property(x => x.CardLength).IsRequired();
        b.Property(x => x.BinPrefixes).HasMaxLength(200).IsRequired();
        b.Property(x => x.CreatedAt).IsRequired();

        var now = new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero);
        b.HasData(
            new { Id = VisaId, Name = "Visa", CardLength = (byte)16, BinPrefixes = "4", CreatedAt = now },
            new { Id = MasterId, Name = "MasterCard", CardLength = (byte)16, BinPrefixes = "51,52,53,54,55,2221-2720", CreatedAt = now },
            new { Id = AmexId, Name = "Amex", CardLength = (byte)15, BinPrefixes = "34,37", CreatedAt = now },
            new { Id = RuPayId, Name = "RuPay", CardLength = (byte)16, BinPrefixes = "60,65,81,82,508", CreatedAt = now }
        );
    }
}
