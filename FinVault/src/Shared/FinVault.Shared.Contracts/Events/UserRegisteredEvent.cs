namespace FinVault.Shared.Contracts.Events;
// Published to RabbitMQ after successful registration
// notification-service subscribes and sends welcome email
public class UserRegisteredEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid UserId { get; init; }
    public string Email { get; init; } = string.Empty;
    public string FirstName { get; init; } = string.Empty;
    public string OtpCode { get; init; } = string.Empty;
    public string CorrelationId { get; init; } = string.Empty;
}