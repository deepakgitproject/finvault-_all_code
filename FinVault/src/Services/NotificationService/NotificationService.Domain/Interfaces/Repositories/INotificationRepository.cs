using NotificationService.Domain.Entities;

namespace NotificationService.Domain.Interfaces.Repositories;

public interface INotificationRepository
{
    Task<Notification?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<Notification>> GetByUserIdAsync(Guid userId, bool? isRead = null,
        int page = 1, int pageSize = 20, CancellationToken ct = default);
    Task<int> GetUnreadCountAsync(Guid userId, CancellationToken ct = default);
    Task MarkAllAsReadAsync(Guid userId, CancellationToken ct = default);
    Task AddAsync(Notification notification, CancellationToken ct = default);
    void Update(Notification notification);
    Task SaveChangesAsync(CancellationToken ct = default);
}
