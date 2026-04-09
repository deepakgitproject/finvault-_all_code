namespace PaymentService.Domain.Entities;

public class ExternalBillPayment
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid CardId { get; private set; }
    public string BillerName { get; private set; } = string.Empty;
    public string BillerCategory { get; private set; } = string.Empty;
    public string BillNumber { get; private set; } = string.Empty;
    public decimal Amount { get; private set; }
    public string Status { get; private set; } = "Initiated";
    public string? OtpHash { get; private set; }
    public DateTimeOffset? OtpExpiresAt { get; private set; }
    public string? FailureReason { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    // EF Core needs this
    private ExternalBillPayment() { }

    public static ExternalBillPayment Create(
        Guid userId, Guid cardId, string billerName, 
        string billerCategory, string billNumber, decimal amount)
    {
        return new ExternalBillPayment
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            CardId = cardId,
            BillerName = billerName,
            BillerCategory = billerCategory,
            BillNumber = billNumber,
            Amount = amount,
            Status = "Initiated",
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void SetOtp(string otpHash)
    {
        OtpHash = otpHash;
        OtpExpiresAt = DateTimeOffset.UtcNow.AddMinutes(15);
        Status = "OTPSent";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Complete()
    {
        Status = "Completed";
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Fail(string reason)
    {
        Status = "Failed";
        FailureReason = reason;
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Computed properties
    public bool IsOtpExpired => OtpExpiresAt.HasValue && DateTimeOffset.UtcNow >= OtpExpiresAt.Value;
    public bool IsCompleted => Status == "Completed";
}
