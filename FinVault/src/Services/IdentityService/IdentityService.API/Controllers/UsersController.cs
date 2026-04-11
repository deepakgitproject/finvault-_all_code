// ============================================================================
// UsersController.cs
// ============================================================================
// Purpose: Handles user profile management operations for the Identity Service.
//          Provides endpoints to retrieve and manage user account information.
// 
// Architecture: Uses MediatR CQRS pattern. All endpoints require authentication
//          (JWT token) as they access user-specific data. User ID is extracted
//          from the JWT token claims for security.
//
// Endpoints:
//   GET /api/identity/users/me - Get current authenticated user's profile
// ============================================================================

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
    // -------------------------------------------------------------------------
    // GET /api/identity/users/me
    // Purpose: Get the profile information of the currently authenticated user
    // Input: None (User ID extracted from JWT token)
    // Output: ApiResponse<UserProfileResponse> containing user profile data
    // Notes: Requires valid JWT authentication. Extracts user ID from the
    //        token's NameIdentifier claim and sends query to get user profile.
    // -------------------------------------------------------------------------
    /// <summary>Get current user profile (requires JWT)</summary>
    [HttpGet("me")]
    public async Task<IActionResult> GetProfile(CancellationToken ct)
    {
        var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
        var result = await mediator.Send(new GetUserProfileQuery(userId), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}