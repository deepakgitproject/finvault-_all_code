using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NotificationService.Application.Commands.MarkNotificationRead;
using NotificationService.Application.Commands.MarkAllRead;
using NotificationService.Application.Queries.GetNotifications;
using NotificationService.Application.Queries.GetUnreadCount;

namespace NotificationService.API.Controllers;

[ApiController]
[Route("api/notifications")]
[Produces("application/json")]
[Authorize]
public class NotificationsController(ISender mediator) : ControllerBase
{
    /// <summary>Get paginated notifications for a user</summary>
    [HttpGet("user/{userId:guid}")]
    [ProducesResponseType(typeof(FinVault.Shared.Contracts.Responses.ApiResponse<
        List<FinVault.Shared.Contracts.Notification.Responses.NotificationResponse>>), 200)]
    public async Task<IActionResult> GetNotifications(
        Guid userId,
        [FromQuery] bool? isRead = null,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20,
        CancellationToken ct = default)
    {
        var query = new GetNotificationsQuery(userId, isRead, page, pageSize);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    /// <summary>Get unread notification count for a user</summary>
    [HttpGet("user/{userId:guid}/unread-count")]
    public async Task<IActionResult> GetUnreadCount(Guid userId, CancellationToken ct)
    {
        var query = new GetUnreadCountQuery(userId);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    /// <summary>Mark a single notification as read</summary>
    [HttpPut("{notificationId:guid}/read")]
    public async Task<IActionResult> MarkRead(Guid notificationId, CancellationToken ct)
    {
        var cmd = new MarkNotificationReadCommand(notificationId);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : NotFound(result);
    }

    /// <summary>Mark all notifications as read for a user</summary>
    [HttpPut("user/{userId:guid}/read-all")]
    public async Task<IActionResult> MarkAllRead(Guid userId, CancellationToken ct)
    {
        var cmd = new MarkAllReadCommand(userId);
        var result = await mediator.Send(cmd, ct);
        return Ok(result);
    }
}
