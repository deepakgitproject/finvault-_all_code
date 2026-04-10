namespace FinVault.Shared.Exceptions;

public class InsufficientFundsException : FinVaultException
{
    public InsufficientFundsException(string message) : base(message) { }
    public InsufficientFundsException(string message, Exception inner) : base(message, inner) { }
}
