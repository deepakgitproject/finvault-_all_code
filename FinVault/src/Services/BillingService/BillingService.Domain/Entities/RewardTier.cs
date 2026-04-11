namespace BillingService.Domain.Entities;

// Defines a reward tier with minimum points and cashback percentage
public class RewardTier
{
    public Guid Id { get; private set; }  // Unique identifier
    public string Name { get; private set; } = string.Empty;  // Tier display name
    public int MinPoints { get; private set; }  // Minimum points required for this tier
    public decimal CashbackPercent { get; private set; }  // Cashback percentage for this tier
    public DateTimeOffset CreatedAt { get; private set; }  // Creation timestamp

    private RewardTier() { } // Required by EF Core

    // Factory method to create a new reward tier with validation
    public static RewardTier Create(string name, int minPoints, decimal cashbackPercent)
    {
        if (string.IsNullOrWhiteSpace(name)) throw new ArgumentException("Name is required.");
        if (minPoints < 0) throw new ArgumentException("MinPoints cannot be negative.");
        if (cashbackPercent < 0) throw new ArgumentException("CashbackPercent cannot be negative.");

        return new RewardTier
        {
            Id = Guid.NewGuid(),
            Name = name.Trim(),
            MinPoints = minPoints,
            CashbackPercent = cashbackPercent,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
}
