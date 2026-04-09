using FluentValidation;

namespace BillingService.Application.Commands.GenerateBill;

public class GenerateBillValidator : AbstractValidator<GenerateBillCommand>
{
    public GenerateBillValidator()
    {
        RuleFor(x => x.UserId).NotEmpty().WithMessage("UserId is required.");
        RuleFor(x => x.CardId).NotEmpty().WithMessage("CardId is required.");
        RuleFor(x => x.TotalAmount).GreaterThan(0).WithMessage("TotalAmount must be positive.");
        RuleFor(x => x.MinimumDue).GreaterThan(0).WithMessage("MinimumDue must be positive.");
        RuleFor(x => x.MinimumDue).LessThanOrEqualTo(x => x.TotalAmount)
            .WithMessage("MinimumDue cannot exceed TotalAmount.");
        RuleFor(x => x.DueDate).GreaterThan(DateTimeOffset.UtcNow)
            .WithMessage("DueDate must be in the future.");
        RuleFor(x => x.BillingMonth).NotEmpty().WithMessage("BillingMonth is required.")
            .Matches(@"^\d{4}-(0[1-9]|1[0-2])$").WithMessage("BillingMonth must be YYYY-MM format.");
    }
}
