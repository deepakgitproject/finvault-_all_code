namespace FinVault.Shared.Exceptions;

public class CardAlreadyVerifiedException : FinVaultException
{
    public CardAlreadyVerifiedException(string message) : base(message) { }
    public CardAlreadyVerifiedException(string message, Exception inner) : base(message, inner) { }
}
