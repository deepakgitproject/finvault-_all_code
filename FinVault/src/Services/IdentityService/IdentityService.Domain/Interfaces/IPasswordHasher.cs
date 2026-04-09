namespace IdentityService.Domain.Interfaces;
// Abstraction for password hashing.
// Application layer uses this — never sees BCrypt directly.
// Infrastructure implements with BCrypt.Net (work factor 12).
public interface IPasswordHasher
{
    string Hash(string password);
    bool Verify(string password, string hash);
}