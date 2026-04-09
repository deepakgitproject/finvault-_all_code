namespace CardService.Domain.Entities;

public class CreditCard
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public string MaskedNumber { get; private set; } = string.Empty;
    public string CardholderName { get; private set; } = string.Empty;
    public byte ExpiryMonth { get; private set; }
    public short ExpiryYear { get; private set; }
    public Guid IssuerId { get; private set; }
    public decimal CreditLimit { get; private set; }
    public decimal OutstandingBalance { get; private set; }
    public byte BillingCycleStartDay { get; private set; }
    public bool IsDefault { get; private set; }
    public bool IsVerified { get; private set; }
    public bool IsDeleted { get; private set; }
    public DateTimeOffset? DeletedAt { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    public string EncryptedCardNumber { get; private set; } = string.Empty;
    public string EncryptedCVV { get; private set; } = string.Empty;
    public string CardNumberLastFour { get; private set; } = string.Empty;

    // Navigation
    public CardIssuer Issuer { get; private set; } = null!;

    // Computed — not stored in DB
    public decimal AvailableCredit => CreditLimit - OutstandingBalance;
    public decimal Utilization => CreditLimit > 0 ? (OutstandingBalance / CreditLimit) * 100 : 0;
    public bool IsExpired => new DateTimeOffset(ExpiryYear, ExpiryMonth, 1, 0, 0, 0, TimeSpan.Zero)
        .AddMonths(1) <= DateTimeOffset.UtcNow;

    // EF Core needs this
    private CreditCard() { }

    public static CreditCard Create(
        Guid userId, string maskedNumber, string cardholderName,
        byte expiryMonth, short expiryYear, Guid issuerId,
        decimal creditLimit, byte billingCycleStartDay,
        string encryptedCardNumber, string encryptedCVV, string cardNumberLastFour)
    {
        return new CreditCard
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            MaskedNumber = maskedNumber,
            CardholderName = cardholderName,
            ExpiryMonth = expiryMonth,
            ExpiryYear = expiryYear,
            IssuerId = issuerId,
            CreditLimit = creditLimit,
            OutstandingBalance = 0,
            BillingCycleStartDay = billingCycleStartDay,
            EncryptedCardNumber = encryptedCardNumber,
            EncryptedCVV = encryptedCVV,
            CardNumberLastFour = cardNumberLastFour,
            IsDefault = false,
            IsVerified = false,
            IsDeleted = false,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void UpdateLimit(decimal newLimit)
    {
        CreditLimit = newLimit;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void UpdateBalance(decimal amount)
    {
        OutstandingBalance = Math.Max(0, OutstandingBalance + amount);
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void SetAsDefault()
    {
        IsDefault = true;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void UnsetDefault()
    {
        IsDefault = false;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Verify()
    {
        IsVerified = true;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
