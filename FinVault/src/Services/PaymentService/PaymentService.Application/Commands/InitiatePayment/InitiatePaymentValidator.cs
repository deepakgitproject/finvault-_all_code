using FluentValidation;

namespace PaymentService.Application.Commands.InitiatePayment;

public class InitiatePaymentValidator : AbstractValidator<InitiatePaymentCommand>
{
    public InitiatePaymentValidator()
    {
        RuleFor(x => x.UserId).NotEmpty();
        RuleFor(x => x.CardId).NotEmpty();
        RuleFor(x => x.BillId).NotEmpty();
        RuleFor(x => x.Amount).GreaterThan(0)
            .WithMessage("Payment amount must be greater than zero.");
        RuleFor(x => x.PaymentType).NotEmpty()
            .Must(t => t is "Full" or "Partial" or "Scheduled")
            .WithMessage("PaymentType must be Full, Partial, or Scheduled.");
    }
}
