namespace FinVault.Shared.Contracts.Events;

public class PasswordResetRequestedEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid UserId { get; init; }
    public string Email { get; init; } = string.Empty;
    public string OtpCode { get; init; } = string.Empty;
    public string CorrelationId { get; init; } = string.Empty;
}