using FluentValidation;

namespace CardService.Application.Commands.UpdateCardLimit;

public class UpdateCardLimitValidator : AbstractValidator<UpdateCardLimitCommand>
{
    public UpdateCardLimitValidator()
    {
        RuleFor(x => x.CardId).NotEmpty();
        RuleFor(x => x.NewLimit).GreaterThan(0)
            .WithMessage("Credit limit must be greater than zero.");
    }
}
