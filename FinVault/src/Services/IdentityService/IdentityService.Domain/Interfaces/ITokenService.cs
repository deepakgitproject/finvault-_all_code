using IdentityService.Domain.Entities;

namespace IdentityService.Domain.Interfaces;
// Abstraction for JWT and refresh token operations
// Application layer uses this — never knows about JwtSecurityTokenHandler
public interface ITokenService
{
    string GenerateJwt(User user);
    string GenerateRefreshToken();
    string HashToken(string token); // SHA-256 for safe DB storage
}