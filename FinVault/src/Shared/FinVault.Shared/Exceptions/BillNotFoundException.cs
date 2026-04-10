namespace FinVault.Shared.Exceptions;

public class BillNotFoundException : FinVaultException
{
    public BillNotFoundException(string message) : base(message) { }
    public BillNotFoundException(string message, Exception inner) : base(message, inner) { }
}
