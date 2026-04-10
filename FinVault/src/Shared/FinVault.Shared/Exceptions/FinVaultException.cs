namespace FinVault.Shared.Exceptions;

public class FinVaultException : Exception
{
    public FinVaultException(string message) : base(message) { }
    public FinVaultException(string message, Exception inner) : base(message, inner) { }
}
