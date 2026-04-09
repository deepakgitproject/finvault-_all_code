namespace FinVault.Shared.Contracts.Card.Responses;

public class RevealCardResponse
{
    public Guid Id { get; set; }
    public string CardNumber { get; set; } = string.Empty;
    public string CVV { get; set; } = string.Empty;
    public string CardholderName { get; set; } = string.Empty;
    public byte ExpiryMonth { get; set; }
    public short ExpiryYear { get; set; }
    public string IssuerName { get; set; } = string.Empty;
}
