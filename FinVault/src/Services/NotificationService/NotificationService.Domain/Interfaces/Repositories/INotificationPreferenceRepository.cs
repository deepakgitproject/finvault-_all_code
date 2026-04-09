using NotificationService.Domain.Entities;

namespace NotificationService.Domain.Interfaces.Repositories;

public interface INotificationPreferenceRepository
{
    Task<List<NotificationPreference>> GetByUserIdAsync(Guid userId, CancellationToken ct = default);
    Task<NotificationPreference?> GetByUserAndChannelAsync(Guid userId, string channel, CancellationToken ct = default);
    Task AddAsync(NotificationPreference preference, CancellationToken ct = default);
    void Update(NotificationPreference preference);
    Task SaveChangesAsync(CancellationToken ct = default);
}
