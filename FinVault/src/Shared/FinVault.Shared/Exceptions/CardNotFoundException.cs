namespace FinVault.Shared.Exceptions;

public class CardNotFoundException : FinVaultException
{
    public CardNotFoundException(string message) : base(message) { }
    public CardNotFoundException(string message, Exception inner) : base(message, inner) { }
}
