namespace IdentityService.Domain.Entities;

// User entity representing an authenticated user account in the identity service
public class User
{
    public Guid Id { get; private set; }  // Unique user identifier
    public string Email { get; private set; } = string.Empty;  // User's email address (unique)
    public string PasswordHash { get; private set; } = string.Empty;  // Hashed password
    public string FirstName { get; private set; } = string.Empty;  // User's first name
    public string LastName { get; private set; } = string.Empty;  // User's last name
    public string Role { get; private set; } = "User";  // Authorization role
    public bool IsEmailVerified { get; private set; } = false;  // Whether email has been verified
    public bool IsActive { get; private set; } = true;  // Whether account is active
    public DateTimeOffset CreatedAt { get; private set; }  // Account creation timestamp
    public DateTimeOffset? UpdatedAt { get; private set; }  // Last update timestamp
    private User() { } // EF Core private constructor for deserialization
                       // Factory method — the ONLY valid way to create a User
                       // Never call 'new User()' directly from application code
    public static User Create(string email, string passwordHash,
    string firstName, string lastName)  // Factory method to create a new user
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