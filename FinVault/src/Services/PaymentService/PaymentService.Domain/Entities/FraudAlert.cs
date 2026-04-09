namespace PaymentService.Domain.Entities;

public class FraudAlert
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid? PaymentId { get; private set; }
    public string AlertType { get; private set; } = string.Empty;
    public decimal RiskScore { get; private set; }
    public string Status { get; private set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    private FraudAlert() { }

    public static FraudAlert Create(Guid userId, Guid? paymentId,
        string alertType, decimal riskScore)
    {
        return new FraudAlert
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            PaymentId = paymentId,
            AlertType = alertType,
            RiskScore = riskScore,
            Status = "Open",
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void Resolve()
    {
        Status = "Resolved";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void MarkFalsePositive()
    {
        Status = "FalsePositive";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
