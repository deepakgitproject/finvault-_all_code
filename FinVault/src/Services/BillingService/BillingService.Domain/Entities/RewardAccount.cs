// Tracks a user's reward points and tier membership
namespace BillingService.Domain.Entities;

public class RewardAccount
{
    public Guid Id { get; private set; }  // Unique identifier
    public Guid UserId { get; private set; }  // Account owner
    public Guid TierId { get; private set; }  // Current reward tier
    public int AvailablePoints { get; private set; }  // Points available for redemption
    public int TotalEarned { get; private set; }  // Lifetime points earned
    public DateTimeOffset CreatedAt { get; private set; }  // Record creation time
    public DateTimeOffset? UpdatedAt { get; private set; }  // Last modification time

    // Navigation property to the reward tier
    public RewardTier Tier { get; private set; } = null!;

    private RewardAccount() { } // Required by EF Core

    // Factory method to create a new reward account
    public static RewardAccount Create(Guid userId, Guid defaultTierId)
    {
        if (userId == Guid.Empty) throw new ArgumentException("UserId is required.");
        if (defaultTierId == Guid.Empty) throw new ArgumentException("TierId is required.");

        return new RewardAccount
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            TierId = defaultTierId,
            AvailablePoints = 0,
            TotalEarned = 0,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    // Add points to the account balance
    public void AddPoints(int points)
    {
        if (points <= 0) throw new ArgumentException("Points must be positive.");
        AvailablePoints += points;
        TotalEarned += points;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Deduct points from available balance for redemption
    public void RedeemPoints(int points)
    {
        if (points <= 0) throw new ArgumentException("Points must be positive.");
        if (points > AvailablePoints)
            throw new InvalidOperationException("Insufficient available points.");
        AvailablePoints -= points;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Upgrade the account to a new reward tier
    public void UpgradeTier(Guid newTierId)
    {
        if (newTierId == Guid.Empty) throw new ArgumentException("TierId is required.");
        TierId = newTierId;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
