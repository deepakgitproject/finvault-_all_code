namespace FinVault.Shared.Contracts.Billing.Events;

public class RewardEarnedEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid UserId { get; init; }
    public Guid RewardAccountId { get; init; }
    public Guid PaymentId { get; init; }
    public int PointsEarned { get; init; }
    public int TotalAvailablePoints { get; init; }
    public int TotalLifetimePoints { get; init; }
    public string TierName { get; init; } = string.Empty;
    public string CorrelationId { get; init; } = string.Empty;
}
