using MediatR;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.RefreshToken;

public record RefreshTokenCommand(string RefreshToken)
    : IRequest<ApiResponse<AuthResponse>>;