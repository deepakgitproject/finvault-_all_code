namespace IdentityService.Domain.Interfaces;
// Abstraction for OTP code hashing.
// Separate from IPasswordHasher because OTP uses lower work factor.
public interface IOTPHasher
{
    string Hash(string code);
    bool Verify(string code, string hash);
}