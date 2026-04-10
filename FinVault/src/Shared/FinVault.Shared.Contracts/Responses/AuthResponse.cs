namespace FinVault.Shared.Contracts.Responses;
// Returned by Login, Register, and RefreshToken endpoints
// Angular SPA stores accessToken in memory (never localStorage)
public class AuthResponse
{
    public string AccessToken { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public int ExpiresIn { get; set; } = 900; // 15 min in seconds
    public Guid UserId { get; set; }
    public Guid Id => UserId;
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public bool IsEmailVerified { get; set; }
}