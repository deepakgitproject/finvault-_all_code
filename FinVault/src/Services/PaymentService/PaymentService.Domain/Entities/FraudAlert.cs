// File: FraudAlert.cs - Domain entity for fraud detection alerts triggered by risk analysis
namespace PaymentService.Domain.Entities;

public class FraudAlert
{
    public Guid Id { get; private set; }  // Unique fraud alert identifier
    public Guid UserId { get; private set; }  // User associated with this alert
    public Guid? PaymentId { get; private set; }  // Related payment (if applicable)
    public string AlertType { get; private set; } = string.Empty;  // Type of fraud alert (e.g., "UnusualLocation", "HighAmount")
    public decimal RiskScore { get; private set; }  // Risk score that triggered this alert
    public string Status { get; private set; } = string.Empty;  // Alert status: Open, Resolved, FalsePositive
    public DateTimeOffset CreatedAt { get; private set; }  // When alert was created
    public DateTimeOffset? UpdatedAt { get; private set; }  // When alert was last updated

    // Private constructor for EF Core
    private FraudAlert() { }

    // Factory method to create a new fraud alert
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

    // Marks alert as resolved after investigation
    public void Resolve()
    {
        Status = "Resolved";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Marks alert as false positive (legitimate transaction)
    public void MarkFalsePositive()
    {
        Status = "FalsePositive";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
