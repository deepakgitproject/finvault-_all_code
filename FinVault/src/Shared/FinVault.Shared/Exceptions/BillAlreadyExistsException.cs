namespace FinVault.Shared.Exceptions;

public class BillAlreadyExistsException : FinVaultException
{
    public BillAlreadyExistsException(string message) : base(message) { }
    public BillAlreadyExistsException(string message, Exception inner) : base(message, inner) { }
}
