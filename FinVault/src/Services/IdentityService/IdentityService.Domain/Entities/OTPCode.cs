// File: OTPCode.cs - Domain entity for OTP (One-Time Password) codes used in email verification and password reset
namespace IdentityService.Domain.Entities;

public class OTPCode
{
    public Guid Id { get; private set; }  // Unique identifier for this OTP record
    public Guid UserId { get; private set; }  // User who requested this OTP
    public string CodeHash { get; private set; } = string.Empty; // BCrypt hashed OTP code for security
    public string Purpose { get; private set; } = string.Empty; // EmailVerification or PasswordReset
    public DateTimeOffset ExpiresAt { get; private set; }  // When this OTP expires
    public bool IsUsed { get; private set; } = false;  // Whether this OTP has already been used
    public DateTimeOffset CreatedAt { get; private set; }  // When this OTP was created
    
    // Private constructor for EF Core
    private OTPCode() { }
    
    // Factory method to create a new OTP code with 5-minute expiry
    public static OTPCode Create(Guid userId, string codeHash, string purpose)
    {
        return new OTPCode
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            CodeHash = codeHash,
            Purpose = purpose,
            ExpiresAt = DateTimeOffset.UtcNow.AddMinutes(5), // OTP valid for 5 minutes
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
    
    // Computed: Returns true if OTP has expired
    public bool IsExpired => DateTimeOffset.UtcNow >= ExpiresAt;
    // Computed: Returns true if OTP is valid (not used and not expired)
    public bool IsValid => !IsUsed && !IsExpired;
    // Marks this OTP as used after successful verification
    public void MarkUsed() => IsUsed = true;
}