using FluentValidation;
namespace IdentityService.Application.Commands.RegisterUser;

public class RegisterUserValidator : AbstractValidator<RegisterUserCommand>
{
    public RegisterUserValidator()
    {
        RuleFor(x => x.Email)
        .NotEmpty().WithMessage("Email is required.")
        .EmailAddress().WithMessage("A valid email is required.")
        .MaximumLength(256);
        RuleFor(x => x.Password)
        .NotEmpty()
        .MinimumLength(8).WithMessage("Password must be at least 8 characters.")
        .Matches("[A-Z]").WithMessage("Must contain at least one uppercase letter.")
        .Matches("[0-9]").WithMessage("Must contain at least one number.")
        .Matches("[^a-zA-Z0-9]").WithMessage("Must contain at least one special character.");
        RuleFor(x => x.FirstName).NotEmpty().MaximumLength(100);
        RuleFor(x => x.LastName).NotEmpty().MaximumLength(100);
    }
}