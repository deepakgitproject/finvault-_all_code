namespace BillingService.Domain.Entities;

public class RewardTransaction
{
    public Guid Id { get; private set; }
    public Guid RewardAccountId { get; private set; }
    public Guid? PaymentId { get; private set; }
    public string Type { get; private set; } = string.Empty;
    public int Points { get; private set; }
    public string? Description { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }

    // Navigation
    public RewardAccount RewardAccount { get; private set; } = null!;

    private RewardTransaction() { } // Required by EF Core

    public static RewardTransaction CreateEarned(Guid rewardAccountId, Guid paymentId,
        int points, string? description = null)
    {
        if (rewardAccountId == Guid.Empty) throw new ArgumentException("RewardAccountId is required.");
        if (points <= 0) throw new ArgumentException("Points must be positive for earned transactions.");

        return new RewardTransaction
        {
            Id = Guid.NewGuid(),
            RewardAccountId = rewardAccountId,
            PaymentId = paymentId,
            Type = "Earned",
            Points = points,
            Description = description,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public static RewardTransaction CreateRedeemed(Guid rewardAccountId,
        int points, string? description = null)
    {
        if (rewardAccountId == Guid.Empty) throw new ArgumentException("RewardAccountId is required.");
        if (points <= 0) throw new ArgumentException("Points must be positive for redeemed transactions.");

        return new RewardTransaction
        {
            Id = Guid.NewGuid(),
            RewardAccountId = rewardAccountId,
            PaymentId = null,
            Type = "Redeemed",
            Points = -points, // Negative = debit
            Description = description,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
}
