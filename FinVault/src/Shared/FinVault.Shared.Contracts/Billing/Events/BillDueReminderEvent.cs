namespace FinVault.Shared.Contracts.Billing.Events;

public class BillDueReminderEvent
{
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccurredOn { get; init; } = DateTime.UtcNow;
    public Guid BillId { get; init; }
    public Guid UserId { get; init; }
    public decimal TotalAmount { get; init; }
    public decimal AmountPaid { get; init; }
    public decimal RemainingBalance { get; init; }
    public DateTimeOffset DueDate { get; init; }
    public int DaysUntilDue { get; init; }
    public string CorrelationId { get; init; } = string.Empty;
}
