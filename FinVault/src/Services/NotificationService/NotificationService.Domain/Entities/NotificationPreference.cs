namespace NotificationService.Domain.Entities;

public class NotificationPreference
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public string Channel { get; private set; } = string.Empty;  // Email, SMS, Push, InApp
    public bool IsEnabled { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    private NotificationPreference() { } // Required by EF Core

    public static NotificationPreference Create(Guid userId, string channel, bool isEnabled = true)
    {
        if (userId == Guid.Empty) throw new ArgumentException("UserId is required.");
        if (string.IsNullOrWhiteSpace(channel)) throw new ArgumentException("Channel is required.");

        return new NotificationPreference
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Channel = channel.Trim(),
            IsEnabled = isEnabled,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void SetEnabled(bool enabled)
    {
        IsEnabled = enabled;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
