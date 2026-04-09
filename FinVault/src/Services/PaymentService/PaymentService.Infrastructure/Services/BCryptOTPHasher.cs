using PaymentService.Domain.Interfaces;

namespace PaymentService.Infrastructure.Services;

public class BCryptOTPHasher : IOTPHasher
{
    public string Hash(string code)
        => BCrypt.Net.BCrypt.HashPassword(code, workFactor: 10);

    public bool Verify(string code, string hash)
        => BCrypt.Net.BCrypt.Verify(code, hash);
}