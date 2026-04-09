using MediatR;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.LoginUser;

public record LoginUserCommand(string Email, string Password)
    : IRequest<ApiResponse<AuthResponse>>;