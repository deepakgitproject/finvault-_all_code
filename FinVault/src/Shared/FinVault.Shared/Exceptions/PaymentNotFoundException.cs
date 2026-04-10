namespace FinVault.Shared.Exceptions;

public class PaymentNotFoundException : FinVaultException
{
    public PaymentNotFoundException(string message) : base(message) { }
    public PaymentNotFoundException(string message, Exception inner) : base(message, inner) { }
}
