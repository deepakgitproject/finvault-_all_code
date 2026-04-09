namespace FinVault.Shared.Contracts.Card.Events;

public class CardExpirySoonEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid UserId { get; init; }
    public Guid CardId { get; init; }
    public string MaskedNumber { get; init; } = string.Empty;
    public byte ExpiryMonth { get; init; }
    public short ExpiryYear { get; init; }
    public string CorrelationId { get; init; } = string.Empty;
}
