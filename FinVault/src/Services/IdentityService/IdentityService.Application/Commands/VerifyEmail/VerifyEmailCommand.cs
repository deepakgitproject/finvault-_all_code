using MediatR;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.VerifyEmail;

public record VerifyEmailCommand(Guid UserId, string OtpCode)
    : IRequest<ApiResponse<string>>;