using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotificationService.Domain.Entities;

namespace NotificationService.Infrastructure.Persistence.Configurations;

public class NotificationConfiguration : IEntityTypeConfiguration<Notification>
{
    public void Configure(EntityTypeBuilder<Notification> b)
    {
        b.ToTable("Notifications");
        b.HasKey(n => n.Id);
        b.Property(n => n.UserId).IsRequired();
        b.Property(n => n.Type).IsRequired().HasMaxLength(50);
        b.Property(n => n.Title).IsRequired().HasMaxLength(200);
        b.Property(n => n.Message).IsRequired().HasMaxLength(2000);
        b.Property(n => n.Channel).IsRequired().HasMaxLength(20);
        b.Property(n => n.Priority).IsRequired().HasMaxLength(20);
        b.Property(n => n.IsRead).IsRequired().HasDefaultValue(false);
        b.Property(n => n.ReferenceId).HasMaxLength(100);
        b.Property(n => n.CorrelationId).HasMaxLength(100);
        b.Property(n => n.CreatedAt).IsRequired();

        b.HasIndex(n => n.UserId);
        b.HasIndex(n => new { n.UserId, n.IsRead });
        b.HasIndex(n => n.CreatedAt);
    }
}
