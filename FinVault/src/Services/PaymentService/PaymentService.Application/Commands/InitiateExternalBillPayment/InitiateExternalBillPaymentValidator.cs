using FluentValidation;

namespace PaymentService.Application.Commands.InitiateExternalBillPayment;

public class InitiateExternalBillPaymentValidator : AbstractValidator<InitiateExternalBillPaymentCommand>
{
    private static readonly string[] ValidCategories = 
        { "Electricity", "Water", "Gas", "Internet", "Mobile", "DTH", "Other" };

    public InitiateExternalBillPaymentValidator()
    {
        RuleFor(x => x.UserId).NotEmpty();
        RuleFor(x => x.CardId).NotEmpty();
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.BillerName).NotEmpty().MaximumLength(100);
        RuleFor(x => x.BillNumber).NotEmpty().MaximumLength(100);
        RuleFor(x => x.Amount).GreaterThan(0);
        RuleFor(x => x.BillerCategory)
            .NotEmpty()
            .Must(c => ValidCategories.Contains(c))
            .WithMessage($"Category must be one of: {string.Join(", ", ValidCategories)}");
    }
}
