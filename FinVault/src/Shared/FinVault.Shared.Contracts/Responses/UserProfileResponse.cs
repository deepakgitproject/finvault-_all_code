namespace FinVault.Shared.Contracts.Responses;

public class UserProfileResponse
{
    public Guid UserId { get; set; }
    public Guid Id => UserId;
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public bool IsEmailVerified { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
}