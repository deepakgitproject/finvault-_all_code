namespace FinVault.Shared.Exceptions;

public class UserAlreadyExistsException : FinVaultException
{
    public UserAlreadyExistsException(string message) : base(message) { }
    public UserAlreadyExistsException(string message, Exception inner) : base(message, inner) { }
}
