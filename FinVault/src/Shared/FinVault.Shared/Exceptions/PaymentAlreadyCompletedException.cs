namespace FinVault.Shared.Exceptions;

public class PaymentAlreadyCompletedException : FinVaultException
{
    public PaymentAlreadyCompletedException(string message) : base(message) { }
    public PaymentAlreadyCompletedException(string message, Exception inner) : base(message, inner) { }
}
