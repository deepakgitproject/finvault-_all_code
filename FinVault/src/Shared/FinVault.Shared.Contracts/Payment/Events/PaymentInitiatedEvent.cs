namespace FinVault.Shared.Contracts.Payment.Events;

public class PaymentInitiatedEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid PaymentId { get; init; }
    public Guid UserId { get; init; }
    public Guid CardId { get; init; }
    public Guid BillId { get; init; }
    public decimal Amount { get; init; }
    public string CorrelationId { get; init; } = string.Empty;
}
