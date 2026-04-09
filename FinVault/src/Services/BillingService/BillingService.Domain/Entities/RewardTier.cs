namespace BillingService.Domain.Entities;

public class RewardTier
{
    public Guid Id { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public int MinPoints { get; private set; }
    public decimal CashbackPercent { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }

    private RewardTier() { } // Required by EF Core

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
