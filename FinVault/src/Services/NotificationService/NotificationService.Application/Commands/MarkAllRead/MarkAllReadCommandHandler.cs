using MediatR;
using FinVault.Shared.Contracts.Responses;
using NotificationService.Domain.Interfaces.Repositories;

namespace NotificationService.Application.Commands.MarkAllRead;

public class MarkAllReadCommandHandler(
    INotificationRepository repo
) : IRequestHandler<MarkAllReadCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        MarkAllReadCommand request, CancellationToken ct)
    {
        await repo.MarkAllAsReadAsync(request.UserId, ct);
        return ApiResponse<bool>.Ok(true, "All notifications marked as read.");
    }
}
