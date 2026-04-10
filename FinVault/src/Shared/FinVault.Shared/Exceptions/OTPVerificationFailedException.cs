namespace FinVault.Shared.Exceptions;

public class OTPVerificationFailedException : FinVaultException
{
    public OTPVerificationFailedException(string message) : base(message) { }
    public OTPVerificationFailedException(string message, Exception inner) : base(message, inner) { }
}
