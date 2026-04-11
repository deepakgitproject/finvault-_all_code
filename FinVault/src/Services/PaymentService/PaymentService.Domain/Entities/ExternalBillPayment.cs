// File: ExternalBillPayment.cs - Domain entity for external bill payments (electricity, water, gas, etc.) with OTP verification
namespace PaymentService.Domain.Entities;

public class ExternalBillPayment
{
    public Guid Id { get; private set; }  // Unique external bill payment identifier
    public Guid UserId { get; private set; }  // User making the payment
    public Guid CardId { get; private set; }  // Card used for payment
    public string BillerName { get; private set; } = string.Empty;  // Biller company name
    public string BillerCategory { get; private set; } = string.Empty;  // Category (Electricity, Water, Gas, etc.)
    public string BillNumber { get; private set; } = string.Empty;  // Bill reference number
    public decimal Amount { get; private set; }  // Payment amount
    public string Status { get; private set; } = "Initiated";  // Payment status: Initiated, OTPSent, Completed, Failed
    public string? OtpHash { get; private set; }  // Hashed OTP for verification
    public DateTimeOffset? OtpExpiresAt { get; private set; }  // OTP expiration time
    public string? FailureReason { get; private set; }  // Reason if payment failed
    public DateTimeOffset CreatedAt { get; private set; }  // When payment was initiated
    public DateTimeOffset? UpdatedAt { get; private set; }  // When payment was last updated

    // Private constructor for EF Core
    private ExternalBillPayment() { }

    // Factory method to create a new external bill payment
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

    // Sets OTP hash with 15-minute expiry
    public void SetOtp(string otpHash)
    {
        OtpHash = otpHash;
        OtpExpiresAt = DateTimeOffset.UtcNow.AddMinutes(15);
        Status = "OTPSent";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Marks payment as completed and clears OTP
    public void Complete()
    {
        Status = "Completed";
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Marks payment as failed with reason and clears OTP
    public void Fail(string reason)
    {
        Status = "Failed";
        FailureReason = reason;
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Computed: Returns true if OTP has expired
    public bool IsOtpExpired => OtpExpiresAt.HasValue && DateTimeOffset.UtcNow >= OtpExpiresAt.Value;
    // Computed: Returns true if payment is completed
    public bool IsCompleted => Status == "Completed";
}
