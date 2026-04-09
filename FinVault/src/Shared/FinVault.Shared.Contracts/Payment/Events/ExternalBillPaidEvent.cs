namespace FinVault.Shared.Contracts.Payment.Events;

public class ExternalBillPaidEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid PaymentId { get; init; }
    public Guid UserId { get; init; }
    public Guid CardId { get; init; }
    public string BillerName { get; init; } = string.Empty;
    public string BillerCategory { get; init; } = string.Empty;
    public string BillNumber { get; init; } = string.Empty;
    public decimal Amount { get; init; }
    public string CorrelationId { get; init; } = string.Empty;
}
