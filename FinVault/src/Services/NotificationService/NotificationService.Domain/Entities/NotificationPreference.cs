// File: NotificationPreference.cs - Domain entity for user notification channel preferences
namespace NotificationService.Domain.Entities;

public class NotificationPreference
{
    public Guid Id { get; private set; }  // Unique preference identifier
    public Guid UserId { get; private set; }  // User who owns this preference
    public string Channel { get; private set; } = string.Empty;  // Notification channel: Email, SMS, Push, InApp
    public bool IsEnabled { get; private set; }  // Whether this channel is enabled for the user
    public DateTimeOffset CreatedAt { get; private set; }  // When preference was created
    public DateTimeOffset? UpdatedAt { get; private set; }  // When preference was last updated

    // Private constructor for EF Core
    private NotificationPreference() { }

    // Factory method to create notification preference for a channel
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

    // Enables or disables this notification channel
    public void SetEnabled(bool enabled)
    {
        IsEnabled = enabled;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
