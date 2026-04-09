using Microsoft.EntityFrameworkCore;
using NotificationService.Domain.Entities;

namespace NotificationService.Infrastructure.Persistence;

public class NotificationDbContext(DbContextOptions<NotificationDbContext> options)
    : DbContext(options)
{
    public DbSet<Notification> Notifications => Set<Notification>();
    public DbSet<NotificationPreference> NotificationPreferences => Set<NotificationPreference>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        // Picks up all IEntityTypeConfiguration<T> files in this assembly automatically
        mb.ApplyConfigurationsFromAssembly(typeof(NotificationDbContext).Assembly);
        base.OnModelCreating(mb);
    }
}
