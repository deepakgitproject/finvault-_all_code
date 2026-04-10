namespace FinVault.Shared.Exceptions;

public class InvalidCredentialsException : FinVaultException
{
    public InvalidCredentialsException(string message) : base(message) { }
    public InvalidCredentialsException(string message, Exception inner) : base(message, inner) { }
}
