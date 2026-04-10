namespace FinVault.Shared.Exceptions;

public class PaymentScheduleNotFoundException : FinVaultException
{
    public PaymentScheduleNotFoundException(string message) : base(message) { }
    public PaymentScheduleNotFoundException(string message, Exception inner) : base(message, inner) { }
}
