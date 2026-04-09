namespace FinVault.Shared.Contracts.Notification.Responses;

public class NotificationResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string Channel { get; set; } = string.Empty;
    public string Priority { get; set; } = string.Empty;
    public bool IsRead { get; set; }
    public DateTimeOffset? ReadAt { get; set; }
    public string? ReferenceId { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
