using MediatR;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
namespace IdentityService.Application.Commands.ResetPassword;

public record ResetPasswordCommand(
    string Email, string OtpCode, string NewPassword)
    : IRequest<ApiResponse<string>>;