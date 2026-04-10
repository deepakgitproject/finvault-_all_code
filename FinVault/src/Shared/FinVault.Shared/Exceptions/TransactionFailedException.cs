namespace FinVault.Shared.Exceptions;

public class TransactionFailedException : FinVaultException
{
    public TransactionFailedException(string message) : base(message) { }
    public TransactionFailedException(string message, Exception inner) : base(message, inner) { }
}
