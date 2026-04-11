// File: RiskScore.cs - Domain entity for payment risk assessment with automatic decision logic
namespace PaymentService.Domain.Entities;

public class RiskScore
{
    public Guid Id { get; private set; }  // Unique risk score identifier
    public Guid UserId { get; private set; }  // User being assessed
    public Guid? PaymentId { get; private set; }  // Related payment (if applicable)
    public decimal Score { get; private set; }  // Risk score (0-100, higher = riskier)
    public string Decision { get; private set; } = string.Empty;  // Auto-decision: AutoApproved (<30), OTPRequired (30-70), Blocked (>70)
    public DateTimeOffset CreatedAt { get; private set; }  // When risk was assessed

    // Private constructor for EF Core
    private RiskScore() { }

    // Factory method to create risk score with automatic decision based on score thresholds
    public static RiskScore Create(Guid userId, Guid? paymentId, decimal score)
    {
        // Decision logic: score < 30 = auto-approve, 30-70 = require OTP, > 70 = block
        var decision = score switch
        {
            < 30 => "AutoApproved",
            <= 70 => "OTPRequired",
            _ => "Blocked"
        };

        return new RiskScore
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            PaymentId = paymentId,
            Score = score,
            Decision = decision,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
}
