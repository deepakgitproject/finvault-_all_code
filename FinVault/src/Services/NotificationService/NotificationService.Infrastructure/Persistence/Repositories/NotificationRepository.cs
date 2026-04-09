using Microsoft.EntityFrameworkCore;
using NotificationService.Domain.Entities;
using NotificationService.Domain.Interfaces.Repositories;
using NotificationService.Infrastructure.Persistence;

namespace NotificationService.Infrastructure.Persistence.Repositories;

public class NotificationRepository(NotificationDbContext db) : INotificationRepository
{
    public async Task<Notification?> GetByIdAsync(Guid id, CancellationToken ct) =>
        await db.Notifications.FirstOrDefaultAsync(n => n.Id == id, ct);

    public async Task<List<Notification>> GetByUserIdAsync(
        Guid userId, bool? isRead, int page, int pageSize, CancellationToken ct)
    {
        var query = db.Notifications
            .Where(n => n.UserId == userId)
            .AsQueryable();

        if (isRead.HasValue)
            query = query.Where(n => n.IsRead == isRead.Value);

        return await query
            .OrderByDescending(n => n.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(ct);
    }

    public async Task<int> GetUnreadCountAsync(Guid userId, CancellationToken ct) =>
        await db.Notifications.CountAsync(n => n.UserId == userId && !n.IsRead, ct);

    public async Task MarkAllAsReadAsync(Guid userId, CancellationToken ct)
    {
        var unread = await db.Notifications
            .Where(n => n.UserId == userId && !n.IsRead)
            .ToListAsync(ct);

        foreach (var n in unread)
            n.MarkAsRead();

        await db.SaveChangesAsync(ct);
    }

    public async Task AddAsync(Notification notification, CancellationToken ct) =>
        await db.Notifications.AddAsync(notification, ct);

    public void Update(Notification notification) =>
        db.Notifications.Update(notification);

    public async Task SaveChangesAsync(CancellationToken ct) =>
        await db.SaveChangesAsync(ct);
}
