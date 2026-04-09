using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Commands.SendOTP;

public record SendOTPCommand(string Email, string Purpose) : IRequest<ApiResponse<string>>;