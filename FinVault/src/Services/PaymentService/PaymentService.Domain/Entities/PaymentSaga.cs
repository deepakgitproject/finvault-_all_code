// File: PaymentSaga.cs - Domain entity tracking distributed payment saga state for orchestration
namespace PaymentService.Domain.Entities;

public class PaymentSaga
{
    public Guid Id { get; private set; }  // Unique saga identifier
    public Guid PaymentId { get; private set; }  // Payment this saga is tracking
    public string CurrentState { get; private set; } = string.Empty;  // Current saga state: Initiated, RiskCheckPassed, Processing, Completed, Failed
    public decimal? RiskScore { get; private set; }  // Risk assessment score
    public int? RewardPointsGranted { get; private set; }  // Reward points earned from this payment
    public string? CompensationReason { get; private set; }  // Reason for saga failure/compensation
    public DateTimeOffset CreatedAt { get; private set; }  // When saga was created
    public DateTimeOffset? UpdatedAt { get; private set; }  // When saga was last updated

    // Private constructor for EF Core
    private PaymentSaga() { }

    // Factory method to create a new payment saga
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

    // Updates saga after passing risk check
    public void PassRiskCheck(decimal score)
    {
        RiskScore = score;
        CurrentState = "RiskCheckPassed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Moves saga to processing state
    public void StartProcessing()
    {
        CurrentState = "Processing";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Completes saga successfully with reward points
    public void Complete(int rewardPoints)
    {
        RewardPointsGranted = rewardPoints;
        CurrentState = "Completed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Fails saga with compensation reason
    public void Fail(string reason)
    {
        CompensationReason = reason;
        CurrentState = "Failed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
