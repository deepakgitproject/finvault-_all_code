namespace FinVault.Shared.Exceptions;

public class InvalidBillStatusException : FinVaultException
{
    public InvalidBillStatusException(string message) : base(message) { }
    public InvalidBillStatusException(string message, Exception inner) : base(message, inner) { }
}
