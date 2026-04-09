namespace FinVault.Shared.Contracts.Billing.Responses;

public class BillResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public Guid CardId { get; set; }
    public decimal TotalAmount { get; set; }
    public decimal MinimumDue { get; set; }
    public decimal AmountPaid { get; set; }
    public decimal RemainingBalance { get; set; }
    public DateTimeOffset DueDate { get; set; }
    public string BillingMonth { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }
}
