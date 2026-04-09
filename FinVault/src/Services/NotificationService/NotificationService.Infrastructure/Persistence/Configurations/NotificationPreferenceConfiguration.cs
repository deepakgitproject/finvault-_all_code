using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotificationService.Domain.Entities;

namespace NotificationService.Infrastructure.Persistence.Configurations;

public class NotificationPreferenceConfiguration : IEntityTypeConfiguration<NotificationPreference>
{
    public void Configure(EntityTypeBuilder<NotificationPreference> b)
    {
        b.ToTable("NotificationPreferences");
        b.HasKey(p => p.Id);
        b.Property(p => p.UserId).IsRequired();
        b.Property(p => p.Channel).IsRequired().HasMaxLength(20);
        b.Property(p => p.IsEnabled).IsRequired().HasDefaultValue(true);
        b.Property(p => p.CreatedAt).IsRequired();

        b.HasIndex(p => p.UserId);
        b.HasIndex(p => new { p.UserId, p.Channel }).IsUnique();
    }
}
