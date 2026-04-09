namespace FinVault.Shared.Contracts.Billing.Responses;

public class BillSummaryResponse
{
    public Guid UserId { get; set; }
    public decimal TotalBilled { get; set; }
    public decimal TotalPaid { get; set; }
    public decimal TotalOutstanding { get; set; }
    public int BillCount { get; set; }
}
