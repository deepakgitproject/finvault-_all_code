namespace NotificationService.Domain.Entities;

public class Notification
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public string Type { get; private set; } = string.Empty;       // Payment, Security, Billing, Reward, Card, System
    public string Title { get; private set; } = string.Empty;
    public string Message { get; private set; } = string.Empty;
    public string Channel { get; private set; } = "InApp";         // Email, SMS, Push, InApp
    public string Priority { get; private set; } = "Normal";       // Low, Normal, High, Critical
    public bool IsRead { get; private set; }
    public DateTimeOffset? ReadAt { get; private set; }
    public string? ReferenceId { get; private set; }               // PaymentId, BillId, etc.
    public string? CorrelationId { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }

    private Notification() { } // Required by EF Core

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

    public void MarkAsRead()
    {
        if (IsRead) return;
        IsRead = true;
        ReadAt = DateTimeOffset.UtcNow;
    }
}
