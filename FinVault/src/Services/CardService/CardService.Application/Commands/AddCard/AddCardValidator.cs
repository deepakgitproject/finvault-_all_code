using FluentValidation;

namespace CardService.Application.Commands.AddCard;

public class AddCardValidator : AbstractValidator<AddCardCommand>
{
    public AddCardValidator()
    {
        RuleFor(x => x.UserId).NotEmpty();
        RuleFor(x => x.CardNumber).NotEmpty()
            .Matches(@"^\d{13,19}$")
            .WithMessage("Card number must be 13-19 digits.");
        RuleFor(x => x.CVV).NotEmpty()
            .Matches(@"^\d{3,4}$")
            .WithMessage("CVV must be 3-4 digits.");
        RuleFor(x => x.CardholderName).NotEmpty().MaximumLength(200);
        RuleFor(x => x.ExpiryMonth).InclusiveBetween((byte)1, (byte)12);
        RuleFor(x => x.ExpiryYear).GreaterThanOrEqualTo((short)DateTimeOffset.UtcNow.Year);
        RuleFor(x => x.IssuerName).NotEmpty();
        RuleFor(x => x.CreditLimit).GreaterThan(0);
        RuleFor(x => x.BillingCycleStartDay).InclusiveBetween((byte)1, (byte)28);
    }
}
