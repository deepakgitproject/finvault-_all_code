using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace NotificationService.Application.Commands.MarkNotificationRead;

public record MarkNotificationReadCommand(Guid NotificationId) : IRequest<ApiResponse<bool>>;
