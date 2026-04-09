namespace PaymentService.Domain.Entities;

public class RiskScore
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid? PaymentId { get; private set; }
    public decimal Score { get; private set; }
    public string Decision { get; private set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; private set; }

    private RiskScore() { }

    public static RiskScore Create(Guid userId, Guid? paymentId, decimal score)
    {
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
