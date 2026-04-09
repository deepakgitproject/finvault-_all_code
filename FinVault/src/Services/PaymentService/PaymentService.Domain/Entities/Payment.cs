namespace PaymentService.Domain.Entities;

public class Payment
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid CardId { get; private set; }
    public Guid BillId { get; private set; }
    public decimal Amount { get; private set; }
    public string PaymentType { get; private set; } = string.Empty;
    public string Status { get; private set; } = string.Empty;
    public string? FailureReason { get; private set; }
    public string? OtpHash { get; private set; }
    public DateTimeOffset? OtpExpiresAt { get; private set; }
    public bool IsDeleted { get; private set; }
    public DateTimeOffset? DeletedAt { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    // Computed
    public bool IsCompleted => Status == "Completed";
    public bool IsFailed => Status == "Failed";
    public bool IsOtpExpired => OtpExpiresAt.HasValue && DateTimeOffset.UtcNow >= OtpExpiresAt.Value;

    private Payment() { }

    public static Payment Create(Guid userId, Guid cardId, Guid billId,
        decimal amount, string paymentType)
    {
        return new Payment
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            CardId = cardId,
            BillId = billId,
            Amount = amount,
            PaymentType = paymentType,
            Status = "Initiated",
            IsDeleted = false,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void SetOtp(string otpHash)
    {
        OtpHash = otpHash;
        OtpExpiresAt = DateTimeOffset.UtcNow.AddMinutes(5);
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void ClearOtp()
    {
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Complete()
    {
        Status = "Completed";
        ClearOtp();
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Fail(string reason)
    {
        Status = "Failed";
        FailureReason = reason;
        ClearOtp();
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Reverse()
    {
        Status = "Reversed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}