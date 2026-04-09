using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace NotificationService.Application.Commands.MarkAllRead;

public record MarkAllReadCommand(Guid UserId) : IRequest<ApiResponse<bool>>;
