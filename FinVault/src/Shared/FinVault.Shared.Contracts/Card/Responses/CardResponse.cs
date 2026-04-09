namespace FinVault.Shared.Contracts.Card.Responses;

public class CardResponse
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string MaskedNumber { get; set; } = string.Empty;
    public string CardholderName { get; set; } = string.Empty;
    public byte ExpiryMonth { get; set; }
    public short ExpiryYear { get; set; }
    public string IssuerName { get; set; } = string.Empty;
    public string CardNumberLastFour { get; set; } = string.Empty;
    public decimal CreditLimit { get; set; }
    public decimal OutstandingBalance { get; set; }
    public decimal CurrentBalance { get; set; }
    public decimal AvailableCredit { get; set; }
    public decimal Utilization { get; set; }
    public byte BillingCycleStartDay { get; set; }
    public bool IsDefault { get; set; }
    public bool IsVerified { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}
