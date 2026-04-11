// ============================================================================
// Payment.cs - Domain Entity
// ============================================================================
// Purpose: Represents a payment transaction in the Payment Service. Tracks the
//          complete lifecycle of a payment from initiation through completion,
//          failure, or reversal.
//
// Key Concepts:
//   - Payment Lifecycle: Initiated → Completed/Failed/Reversed
//   - OTP Verification: Payments require OTP verification for security
//   - Soft Deletes: Payments are never truly deleted, just marked as deleted
//   - Status Tracking: Computed properties for quick status checks
//
// Business Rules:
//   - A payment starts in "Initiated" status
//   - OTP expires after 5 minutes
//   - Completing a payment clears the OTP and sets status to "Completed"
//   - Failed payments record the failure reason
//   - Reversals track when a completed payment is refunded
// ============================================================================

namespace PaymentService.Domain.Entities;

public class Payment
{
    // ==========================================================================
    // Properties - Payment identity and relationships
    // ==========================================================================
    public Guid Id { get; private set; }                    // Unique payment identifier
    public Guid UserId { get; private set; }                // User who initiated the payment
    public Guid CardId { get; private set; }                // Card used for payment
    public Guid BillId { get; private set; }                // Bill being paid
    public decimal Amount { get; private set; }             // Payment amount
    public string PaymentType { get; private set; } = string.Empty;  // Type (e.g., "Full", "Minimum", "Custom")
    public string Status { get; private set; } = string.Empty;       // Current status: Initiated, Completed, Failed, Reversed
    public string? FailureReason { get; private set; }      // Reason for failure (if status is Failed)
    public string? OtpHash { get; private set; }            // Hashed OTP code for verification
    public DateTimeOffset? OtpExpiresAt { get; private set; }  // OTP expiration timestamp
    public bool IsDeleted { get; private set; }             // Soft delete flag
    public DateTimeOffset? DeletedAt { get; private set; }  // When payment was soft-deleted
    public DateTimeOffset CreatedAt { get; private set; }   // Payment creation timestamp
    public DateTimeOffset? UpdatedAt { get; private set; }  // Last update timestamp

    // ==========================================================================
    // Computed Properties - Derived from state, not stored in database
    // ==========================================================================
    
    // Returns true if payment has been successfully completed
    public bool IsCompleted => Status == "Completed";
    
    // Returns true if payment has failed
    public bool IsFailed => Status == "Failed";
    
    // Returns true if OTP has expired (current time >= expiration time)
    public bool IsOtpExpired => OtpExpiresAt.HasValue && DateTimeOffset.UtcNow >= OtpExpiresAt.Value;

    // Private parameterless constructor for EF Core
    private Payment() { }

    // ==========================================================================
    // Factory Method - Creates a new payment in "Initiated" status
    // ==========================================================================
    /// <summary>
    /// Creates a new payment in "Initiated" status
    /// </summary>
    /// <param name="userId">User initiating the payment</param>
    /// <param name="cardId">Card to be charged</param>
    /// <param name="billId">Bill being paid</param>
    /// <param name="amount">Payment amount</param>
    /// <param name="paymentType">Type of payment (Full, Minimum, Custom)</param>
    /// <returns>New Payment entity in "Initiated" status</returns>
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

    // ==========================================================================
    // OTP Management Methods
    // ==========================================================================
    
    /// <summary>
    /// Sets OTP hash and expiration time (5 minutes from now)
    /// </summary>
    /// <param name="otpHash">Hashed OTP code</param>
    public void SetOtp(string otpHash)
    {
        OtpHash = otpHash;
        OtpExpiresAt = DateTimeOffset.UtcNow.AddMinutes(5);
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    /// <summary>
    /// Clears OTP after successful verification or on payment completion/failure
    /// </summary>
    public void ClearOtp()
    {
        OtpHash = null;
        OtpExpiresAt = null;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // ==========================================================================
    // State Transition Methods - Move payment through its lifecycle
    // ==========================================================================
    
    /// <summary>
    /// Marks payment as completed and clears OTP
    /// </summary>
    public void Complete()
    {
        Status = "Completed";
        ClearOtp();
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    /// <summary>
    /// Marks payment as failed with a reason and clears OTP
    /// </summary>
    /// <param name="reason">Why the payment failed</param>
    public void Fail(string reason)
    {
        Status = "Failed";
        FailureReason = reason;
        ClearOtp();
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    /// <summary>
    /// Reverses a completed payment (refund)
    /// </summary>
    public void Reverse()
    {
        Status = "Reversed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    /// <summary>
    /// Soft-deletes the payment (marks as deleted without removing from database)
    /// </summary>
    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}