using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace NotificationService.Application.Queries.GetUnreadCount;

public record GetUnreadCountQuery(Guid UserId) : IRequest<ApiResponse<int>>;
