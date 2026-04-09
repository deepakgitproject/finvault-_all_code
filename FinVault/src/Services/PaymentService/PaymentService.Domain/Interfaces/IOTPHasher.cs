namespace PaymentService.Domain.Interfaces;

public interface IOTPHasher
{
    string Hash(string code);
    bool Verify(string code, string hash);
}