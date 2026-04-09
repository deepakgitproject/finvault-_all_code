namespace IdentityService.Domain.Entities;

public class User
{
    public Guid Id { get; private set; }
    public string Email { get; private set; } = string.Empty;
    public string PasswordHash { get; private set; } = string.Empty;
    public string FirstName { get; private set; } = string.Empty;
    public string LastName { get; private set; } = string.Empty;
    public string Role { get; private set; } = "User";
    public bool IsEmailVerified { get; private set; } = false;
    public bool IsActive { get; private set; } = true;
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }
    private User() { } // Required by EF Core — do not remove
                       // Factory method — the ONLY valid way to create a User
                       // Never call 'new User()' directly from application code
    public static User Create(string email, string passwordHash,
    string firstName, string lastName)
    {
        if (string.IsNullOrWhiteSpace(email))
            throw new ArgumentException("Email is required.");
        if (string.IsNullOrWhiteSpace(passwordHash))
            throw new ArgumentException("Password hash is required.");
        return new User
        {
            Id = Guid.NewGuid(),
            Email = email.ToLowerInvariant().Trim(),
            PasswordHash = passwordHash,
            FirstName = firstName.Trim(),
            LastName = lastName.Trim(),
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
    public void VerifyEmail()
    {
        IsEmailVerified = true;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
    public void UpdatePassword(string newHash)
    {
        if (string.IsNullOrWhiteSpace(newHash))
            throw new ArgumentException("Password hash required.");
        PasswordHash = newHash;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
    public void UpdateProfile(string firstName, string lastName)
    {
        FirstName = firstName.Trim();
        LastName = lastName.Trim();
        UpdatedAt = DateTimeOffset.UtcNow;
    }
    public void Deactivate()
    {
        IsActive = false;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
    // Computed — no DB column
    public string FullName => $"{FirstName} {LastName}";
}