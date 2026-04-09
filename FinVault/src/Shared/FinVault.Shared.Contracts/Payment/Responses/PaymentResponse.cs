namespace FinVault.Shared.Contracts.Payment.Responses;

public class PaymentResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public Guid CardId { get; set; }
    public Guid BillId { get; set; }
    public decimal Amount { get; set; }
    public string PaymentType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string? FailureReason { get; set; }
    public string? SagaState { get; set; }
    public decimal? RiskScore { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
