using MediatR;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.RegisterUser;
// 'record' makes it immutable — commands should never be mutated
// IRequest<T> tells MediatR the handler returns ApiResponse<AuthResponse>
public record RegisterUserCommand(
string Email,
string Password,
string FirstName,
string LastName
) : IRequest<ApiResponse<AuthResponse>>;