namespace FinVault.Shared.Contracts.Card.Responses;

public class CardSummaryResponse
{
    public int TotalCards { get; set; }
    public decimal TotalCreditLimit { get; set; }
    public decimal TotalOutstanding { get; set; }
    public decimal TotalAvailableCredit { get; set; }
    public decimal OverallUtilization { get; set; }
    public List<CardUtilizationItem> Cards { get; set; } = new();
}

public class CardUtilizationItem
{
    public Guid CardId { get; set; }
    public string MaskedNumber { get; set; } = string.Empty;
    public decimal CreditLimit { get; set; }
    public decimal OutstandingBalance { get; set; }
    public decimal Utilization { get; set; }
}
