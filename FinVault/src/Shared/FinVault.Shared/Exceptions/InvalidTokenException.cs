namespace FinVault.Shared.Exceptions;

public class InvalidTokenException : FinVaultException
{
    public InvalidTokenException(string message) : base(message) { }
    public InvalidTokenException(string message, Exception inner) : base(message, inner) { }
}
