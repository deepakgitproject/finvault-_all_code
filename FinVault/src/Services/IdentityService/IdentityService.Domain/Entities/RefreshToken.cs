// File: RefreshToken.cs - Domain entity for JWT refresh tokens used to obtain new access tokens
namespace IdentityService.Domain.Entities;

public class RefreshToken
{
    public Guid Id { get; private set; }  // Unique identifier for this refresh token
    public Guid UserId { get; private set; }  // User who owns this token
    public string Token { get; private set; } = string.Empty; // SHA-256 hashed token value
    public DateTimeOffset ExpiresAt { get; private set; }  // When this token expires
    public bool IsRevoked { get; private set; } = false;  // Whether this token has been revoked
    public DateTimeOffset CreatedAt { get; private set; }  // When this token was created
    public User? User { get; private set; } // EF Core navigation property to User
    
    // Private constructor for EF Core
    private RefreshToken() { }
    
    // Factory method to create a new refresh token (default 7 days validity)
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
    
    // Computed: Returns true if token has expired
    public bool IsExpired => DateTimeOffset.UtcNow >= ExpiresAt;
    // Computed: Returns true if token is active (not revoked and not expired)
    public bool IsActive => !IsRevoked && !IsExpired;
    // Revokes this token (e.g., on logout)
    public void Revoke() => IsRevoked = true;
}