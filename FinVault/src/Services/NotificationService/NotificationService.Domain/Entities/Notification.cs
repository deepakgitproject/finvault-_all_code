// File: Notification.cs - Domain entity for user notifications (alerts, updates, reminders)
namespace NotificationService.Domain.Entities;

public class Notification
{
    public Guid Id { get; private set; }  // Unique notification identifier
    public Guid UserId { get; private set; }  // User who receives this notification
    public string Type { get; private set; } = string.Empty;       // Notification type: Payment, Security, Billing, Reward, Card, System
    public string Title { get; private set; } = string.Empty;  // Notification title
    public string Message { get; private set; } = string.Empty;  // Notification body text
    public string Channel { get; private set; } = "InApp";         // Delivery channel: Email, SMS, Push, InApp
    public string Priority { get; private set; } = "Normal";       // Priority level: Low, Normal, High, Critical
    public bool IsRead { get; private set; }  // Whether user has read this notification
    public DateTimeOffset? ReadAt { get; private set; }  // When user read this notification
    public string? ReferenceId { get; private set; }               // Related entity ID (PaymentId, BillId, etc.)
    public string? CorrelationId { get; private set; }  // For tracking related notifications
    public DateTimeOffset CreatedAt { get; private set; }  // When notification was created

    // Private constructor for EF Core
    private Notification() { }

    // Factory method to create a new notification with validation
    public static Notification Create(
        Guid userId, string type, string title, string message,
        string channel = "InApp", string priority = "Normal",
        string? referenceId = null, string? correlationId = null)
    {
        if (userId == Guid.Empty) throw new ArgumentException("UserId is required.");
        if (string.IsNullOrWhiteSpace(type)) throw new ArgumentException("Type is required.");
        if (string.IsNullOrWhiteSpace(title)) throw new ArgumentException("Title is required.");
        if (string.IsNullOrWhiteSpace(message)) throw new ArgumentException("Message is required.");

        return new Notification
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Type = type.Trim(),
            Title = title.Trim(),
            Message = message.Trim(),
            Channel = channel.Trim(),
            Priority = priority.Trim(),
            IsRead = false,
            ReferenceId = referenceId,
            CorrelationId = correlationId,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    // Marks notification as read with timestamp
    public void MarkAsRead()
    {
        if (IsRead) return;  // Already marked as read
        IsRead = true;
        ReadAt = DateTimeOffset.UtcNow;
    }
}
