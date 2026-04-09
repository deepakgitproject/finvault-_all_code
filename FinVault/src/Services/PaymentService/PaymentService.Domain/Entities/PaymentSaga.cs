namespace PaymentService.Domain.Entities;

public class PaymentSaga
{
    public Guid Id { get; private set; }
    public Guid PaymentId { get; private set; }
    public string CurrentState { get; private set; } = string.Empty;
    public decimal? RiskScore { get; private set; }
    public int? RewardPointsGranted { get; private set; }
    public string? CompensationReason { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    private PaymentSaga() { }

    public static PaymentSaga Create(Guid paymentId)
    {
        return new PaymentSaga
        {
            Id = Guid.NewGuid(),
            PaymentId = paymentId,
            CurrentState = "Initiated",
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void PassRiskCheck(decimal score)
    {
        RiskScore = score;
        CurrentState = "RiskCheckPassed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void StartProcessing()
    {
        CurrentState = "Processing";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Complete(int rewardPoints)
    {
        RewardPointsGranted = rewardPoints;
        CurrentState = "Completed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Fail(string reason)
    {
        CompensationReason = reason;
        CurrentState = "Failed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
