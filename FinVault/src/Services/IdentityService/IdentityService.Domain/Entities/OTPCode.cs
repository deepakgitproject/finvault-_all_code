namespace IdentityService.Domain.Entities;

public class OTPCode
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public string CodeHash { get; private set; } = string.Empty; // BCrypt hash
    public string Purpose { get; private set; } = string.Empty; // EmailVerification | PasswordReset
    public DateTimeOffset ExpiresAt { get; private set; }
    public bool IsUsed { get; private set; } = false;
    public DateTimeOffset CreatedAt { get; private set; }
    private OTPCode() { }
    public static OTPCode Create(Guid userId, string codeHash, string purpose)
    {
        return new OTPCode
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            CodeHash = codeHash,
            Purpose = purpose,
            ExpiresAt = DateTimeOffset.UtcNow.AddMinutes(5), // OTP valid 5 min
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
    public bool IsExpired => DateTimeOffset.UtcNow >= ExpiresAt;
    public bool IsValid => !IsUsed && !IsExpired;
    public void MarkUsed() => IsUsed = true;
}