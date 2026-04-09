namespace FinVault.Shared.Contracts.Payment.Events;

public class FraudDetectedEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid UserId { get; init; }
    public Guid PaymentId { get; init; }
    public string AlertType { get; init; } = string.Empty;
    public decimal RiskScore { get; init; }
    public string CorrelationId { get; init; } = string.Empty;
}
