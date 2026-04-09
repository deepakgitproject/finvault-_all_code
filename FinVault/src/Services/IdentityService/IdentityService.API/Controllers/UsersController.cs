using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using IdentityService.Application.Queries.GetUserProfile;
namespace IdentityService.API.Controllers;

[ApiController]
[Route("api/identity/users")]
[Authorize]
public class UsersController(ISender mediator) : ControllerBase
{
    /// <summary>Get current user profile (requires JWT)</summary>
    [HttpGet("me")]
    public async Task<IActionResult> GetProfile(CancellationToken ct)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
        var result = await mediator.Send(new GetUserProfileQuery(userId), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}