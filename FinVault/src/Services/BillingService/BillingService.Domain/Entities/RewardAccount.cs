namespace BillingService.Domain.Entities;

public class RewardAccount
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid TierId { get; private set; }
    public int AvailablePoints { get; private set; }
    public int TotalEarned { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    // Navigation
    public RewardTier Tier { get; private set; } = null!;

    private RewardAccount() { } // Required by EF Core

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

    public void AddPoints(int points)
    {
        if (points <= 0) throw new ArgumentException("Points must be positive.");
        AvailablePoints += points;
        TotalEarned += points;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void RedeemPoints(int points)
    {
        if (points <= 0) throw new ArgumentException("Points must be positive.");
        if (points > AvailablePoints)
            throw new InvalidOperationException("Insufficient available points.");
        AvailablePoints -= points;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void UpgradeTier(Guid newTierId)
    {
        if (newTierId == Guid.Empty) throw new ArgumentException("TierId is required.");
        TierId = newTierId;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
