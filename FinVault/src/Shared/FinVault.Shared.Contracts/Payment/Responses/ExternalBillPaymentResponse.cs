namespace FinVault.Shared.Contracts.Payment.Responses;

public class ExternalBillPaymentResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public Guid CardId { get; set; }
    public string BillerName { get; set; } = string.Empty;
    public string BillerCategory { get; set; } = string.Empty;
    public string BillNumber { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Status { get; set; } = string.Empty;
    public string? FailureReason { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
