using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
namespace IdentityService.Infrastructure.Services;

public class JwtTokenService(IConfiguration config) : ITokenService
{
    public string GenerateJwt(User user)
    {
        var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(config["Jwt:SecretKey"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        // Claims inside the JWT — Ocelot Gateway and downstream services can read these
        var claims = new[]
        {
new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
new Claim(JwtRegisteredClaimNames.Email, user.Email),
new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
new Claim("firstName", user.FirstName),
new Claim("isEmailVerified", user.IsEmailVerified.ToString()),
new Claim(ClaimTypes.Role, user.Role),
};
        var token = new JwtSecurityToken(
        issuer: config["Jwt:Issuer"],
        audience: config["Jwt:Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddMinutes(15),
        signingCredentials: creds
        );
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    public string GenerateRefreshToken()
    {
        var bytes = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(bytes);
        return Convert.ToBase64String(bytes);
    }
    public string HashToken(string token)
    {
        var bytes = Encoding.UTF8.GetBytes(token);
        return Convert.ToHexString(SHA256.HashData(bytes)).ToLowerInvariant();
    }
}