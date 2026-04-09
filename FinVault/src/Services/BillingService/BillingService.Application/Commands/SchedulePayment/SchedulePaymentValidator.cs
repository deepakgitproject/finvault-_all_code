using FluentValidation;

namespace BillingService.Application.Commands.SchedulePayment;

public class SchedulePaymentValidator : AbstractValidator<SchedulePaymentCommand>
{
    public SchedulePaymentValidator()
    {
        RuleFor(x => x.BillId).NotEmpty().WithMessage("BillId is required.");
        RuleFor(x => x.UserId).NotEmpty().WithMessage("UserId is required.");
        RuleFor(x => x.Amount).GreaterThan(0).WithMessage("Amount must be positive.");
        RuleFor(x => x.ScheduledDate).GreaterThan(DateTimeOffset.UtcNow)
            .WithMessage("ScheduledDate must be in the future.");
    }
}
