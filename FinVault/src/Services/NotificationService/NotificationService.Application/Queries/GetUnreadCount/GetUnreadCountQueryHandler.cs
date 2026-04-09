using MediatR;
using FinVault.Shared.Contracts.Responses;
using NotificationService.Domain.Interfaces.Repositories;

namespace NotificationService.Application.Queries.GetUnreadCount;

public class GetUnreadCountQueryHandler(
    INotificationRepository repo
) : IRequestHandler<GetUnreadCountQuery, ApiResponse<int>>
{
    public async Task<ApiResponse<int>> Handle(
        GetUnreadCountQuery request, CancellationToken ct)
    {
        var count = await repo.GetUnreadCountAsync(request.UserId, ct);
        return ApiResponse<int>.Ok(count);
    }
}
