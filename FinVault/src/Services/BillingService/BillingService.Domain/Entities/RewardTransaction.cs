// Records individual reward point transactions (earned or redeemed)
namespace BillingService.Domain.Entities;

public class RewardTransaction
{
    public Guid Id { get; private set; }  // Unique identifier
    public Guid RewardAccountId { get; private set; }  // Associated reward account
    public Guid? PaymentId { get; private set; }  // Linked payment (null for redemptions)
    public string Type { get; private set; } = string.Empty;  // Transaction type (Earned/Redeemed)
    public int Points { get; private set; }  // Points amount (positive for earned, negative for redeemed)
    public string? Description { get; private set; }  // Optional transaction description
    public DateTimeOffset CreatedAt { get; private set; }  // Transaction timestamp

    // Navigation property to the reward account
    public RewardAccount RewardAccount { get; private set; } = null!;

    private RewardTransaction() { } // Required by EF Core

    // Factory method for creating an earned points transaction
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

    // Factory method for creating a redeemed points transaction
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
