using MediatR;
using FinVault.Shared.Contracts.Responses;
using NotificationService.Domain.Interfaces.Repositories;

namespace NotificationService.Application.Commands.MarkNotificationRead;

public class MarkNotificationReadCommandHandler(
    INotificationRepository repo
) : IRequestHandler<MarkNotificationReadCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        MarkNotificationReadCommand request, CancellationToken ct)
    {
        var notification = await repo.GetByIdAsync(request.NotificationId, ct);
        if (notification is null)
            return ApiResponse<bool>.Fail("Notification not found.");

        notification.MarkAsRead();
        repo.Update(notification);
        await repo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true, "Notification marked as read.");
    }
}
