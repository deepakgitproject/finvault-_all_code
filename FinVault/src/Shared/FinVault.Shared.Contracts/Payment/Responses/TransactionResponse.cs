namespace FinVault.Shared.Contracts.Payment.Responses;

public class TransactionResponse
{
    public Guid Id { get; set; }
    public Guid PaymentId { get; set; }
    public Guid CardId { get; set; }
    public decimal Amount { get; set; }
    public string Type { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
