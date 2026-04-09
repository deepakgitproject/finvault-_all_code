using Microsoft.EntityFrameworkCore;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using NotificationService.Infrastructure.Persistence;

namespace NotificationService.Infrastructure.Persistence.Repositories;

public class NotificationPreferenceRepository(NotificationDbContext db) : INotificationPreferenceRepository
{
    public async Task<List<NotificationPreference>> GetByUserIdAsync(Guid userId, CancellationToken ct) =>
        await db.NotificationPreferences
            .Where(p => p.UserId == userId)
            .ToListAsync(ct);

    public async Task<NotificationPreference?> GetByUserAndChannelAsync(
        Guid userId, string channel, CancellationToken ct) =>
        await db.NotificationPreferences
            .FirstOrDefaultAsync(p => p.UserId == userId && p.Channel == channel, ct);

    public async Task AddAsync(NotificationPreference preference, CancellationToken ct) =>
        await db.NotificationPreferences.AddAsync(preference, ct);

    public void Update(NotificationPreference preference) =>
        db.NotificationPreferences.Update(preference);

    public async Task SaveChangesAsync(CancellationToken ct) =>
        await db.SaveChangesAsync(ct);
}
