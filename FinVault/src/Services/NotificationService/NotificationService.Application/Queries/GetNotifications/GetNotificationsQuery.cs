using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Notification.Responses;

namespace NotificationService.Application.Queries.GetNotifications;

public record GetNotificationsQuery(
    Guid UserId,
    bool? IsRead = null,
    int Page = 1,
    int PageSize = 20
) : IRequest<ApiResponse<List<NotificationResponse>>>;
