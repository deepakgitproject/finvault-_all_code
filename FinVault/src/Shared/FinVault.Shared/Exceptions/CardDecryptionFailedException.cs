namespace FinVault.Shared.Exceptions;

public class CardDecryptionFailedException : FinVaultException
{
    public CardDecryptionFailedException(string message) : base(message) { }
    public CardDecryptionFailedException(string message, Exception inner) : base(message, inner) { }
}
