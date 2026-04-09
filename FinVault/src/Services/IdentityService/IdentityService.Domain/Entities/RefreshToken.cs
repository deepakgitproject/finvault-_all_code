namespace IdentityService.Domain.Entities;

public class RefreshToken
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public string Token { get; private set; } = string.Empty; // SHA-256 hash stored
    public DateTimeOffset ExpiresAt { get; private set; }
    public bool IsRevoked { get; private set; } = false;
    public DateTimeOffset CreatedAt { get; private set; }
    public User? User { get; private set; } // EF Core navigation
    private RefreshToken() { }
    public static RefreshToken Create(Guid userId, string hashedToken, int validDays = 7)
    {
        return new RefreshToken
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Token = hashedToken,
            ExpiresAt = DateTimeOffset.UtcNow.AddDays(validDays),
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
    public bool IsExpired => DateTimeOffset.UtcNow >= ExpiresAt;
    public bool IsActive => !IsRevoked && !IsExpired;
    public void Revoke() => IsRevoked = true;
}