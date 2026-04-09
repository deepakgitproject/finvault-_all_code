namespace FinVault.Shared.Contracts.Billing.Events;

public class BillGeneratedEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid BillId { get; init; }
    public Guid UserId { get; init; }
    public Guid CardId { get; init; }
    public decimal TotalAmount { get; init; }
    public decimal MinimumDue { get; init; }
    public DateTimeOffset DueDate { get; init; }
    public string BillingMonth { get; init; } = string.Empty;
    public string CorrelationId { get; init; } = string.Empty;
}
