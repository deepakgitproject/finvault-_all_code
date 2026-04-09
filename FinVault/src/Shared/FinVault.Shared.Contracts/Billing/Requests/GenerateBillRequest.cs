namespace FinVault.Shared.Contracts.Billing.Requests;

public class GenerateBillRequest
{
    public Guid UserId { get; set; }
    public Guid CardId { get; set; }
    public decimal TotalAmount { get; set; }
    public decimal MinimumDue { get; set; }
    public DateTimeOffset DueDate { get; set; }
    public string BillingMonth { get; set; } = string.Empty; // YYYY-MM
}
