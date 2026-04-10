namespace FinVault.Shared.Exceptions;

public class PaymentSagaNotFoundException : FinVaultException
{
    public PaymentSagaNotFoundException(string message) : base(message) { }
    public PaymentSagaNotFoundException(string message, Exception inner) : base(message, inner) { }
}
