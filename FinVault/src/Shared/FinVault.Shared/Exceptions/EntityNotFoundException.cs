namespace FinVault.Shared.Exceptions;

public class EntityNotFoundException : FinVaultException
{
    public EntityNotFoundException(string message) : base(message) { }
    public EntityNotFoundException(string message, Exception inner) : base(message, inner) { }
}
