namespace FinVault.Shared.Exceptions;

public class NotificationNotFoundException : FinVaultException
{
    public NotificationNotFoundException(string message) : base(message) { }
    public NotificationNotFoundException(string message, Exception inner) : base(message, inner) { }
}
