using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Notification.Responses;
using NotificationService.Domain.Interfaces.Repositories;

namespace NotificationService.Application.Queries.GetNotifications;

public class GetNotificationsQueryHandler(
    INotificationRepository repo
) : IRequestHandler<GetNotificationsQuery, ApiResponse<List<NotificationResponse>>>
{
    public async Task<ApiResponse<List<NotificationResponse>>> Handle(
        GetNotificationsQuery request, CancellationToken ct)
    {
        var notifications = await repo.GetByUserIdAsync(
            request.UserId, request.IsRead, request.Page, request.PageSize, ct);

        var dtos = notifications.Select(n => new NotificationResponse
        {
            Id = n.Id,
            UserId = n.UserId,
            Type = n.Type,
            Title = n.Title,
            Message = n.Message,
            Channel = n.Channel,
            Priority = n.Priority,
            IsRead = n.IsRead,
            ReadAt = n.ReadAt,
            ReferenceId = n.ReferenceId,
            CreatedAt = n.CreatedAt
        }).ToList();

        return ApiResponse<List<NotificationResponse>>.Ok(dtos);
    }
}
