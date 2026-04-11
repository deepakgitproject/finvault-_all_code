// ============================================================================
// AuthController.cs
// ============================================================================
// Purpose: Handles all authentication-related endpoints for the Identity Service.
//          This includes user registration, login, email verification, password 
//          reset, and token refresh operations.
// 
// Architecture: This controller uses the MediatR pattern (CQRS) where each endpoint
//          receives a request, creates a Command object, and sends it to the 
//          application layer handler for processing. All endpoints are anonymous
//          (no authentication required) as they deal with auth operations.
//
// Endpoints:
//   POST /api/identity/auth/register     - Register a new user account
//   POST /api/identity/auth/login        - Login with email/password credentials  
//   POST /api/identity/auth/verify-email - Verify email using 6-digit OTP code
//   POST /api/identity/auth/refresh      - Exchange refresh token for new JWT
//   POST /api/identity/auth/forgot-password - Request OTP for password reset
//   POST /api/identity/auth/reset-password  - Reset password using OTP verification
// ============================================================================

using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using IdentityService.Application.Commands.LoginUser;
using IdentityService.Application.Commands.RegisterUser;
using IdentityService.Application.Commands.VerifyEmail;
using IdentityService.Application.Commands.SendOTP;
using IdentityService.Application.Commands.RefreshToken;
using IdentityService.Application.Commands.ResetPassword;
namespace IdentityService.API.Controllers;

[ApiController]
[Route("api/identity/auth")]
[Produces("application/json")]
public class AuthController(ISender mediator) : ControllerBase
{
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/register
    // Purpose: Register a new user account with email, password, and profile info
    // Input: RegisterUserCommand (email, password, name, etc.)
    // Output: ApiResponse<AuthResponse> containing JWT tokens and user info
    // Notes: This is a public endpoint (AllowAnonymous). Validates user input
    //        and creates the user account in the database.
    // -------------------------------------------------------------------------
    [HttpPost("register")]
    [AllowAnonymous]
    [ProducesResponseType(typeof(FinVault.Shared.Contracts.Responses.ApiResponse<
    FinVault.Shared.Contracts.Responses.AuthResponse>), 200)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Register(
    [FromBody] RegisterUserCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
    
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/login
    // Purpose: Authenticate user with email and password credentials
    // Input: LoginUserCommand (email, password)
    // Output: ApiResponse<AuthResponse> containing JWT access token and refresh token
    // Notes: Returns 401 Unauthorized if credentials are invalid. On success,
    //        returns JWT token pair for subsequent authenticated requests.
    // -------------------------------------------------------------------------
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(
    [FromBody] LoginUserCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : Unauthorized(result);
    }
    
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/verify-email
    // Purpose: Verify user's email address using a 6-digit OTP code sent via email
    // Input: VerifyEmailCommand (email, otpCode)
    // Output: ApiResponse indicating success/failure of email verification
    // Notes: Users must verify their email before they can use the system fully.
    //        OTP expires after a configured time period.
    // -------------------------------------------------------------------------
    [HttpPost("verify-email")]
    [AllowAnonymous]
    public async Task<IActionResult> VerifyEmail(
    [FromBody] VerifyEmailCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
    
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/refresh
    // Purpose: Exchange a valid refresh token for a new JWT access token
    // Input: RefreshTokenCommand (refreshToken)
    // Output: ApiResponse<AuthResponse> with new JWT access token
    // Notes: Used when the JWT access token expires. Allows users to stay
    //        logged in without re-entering credentials.
    // -------------------------------------------------------------------------
    [HttpPost("refresh")]
    [AllowAnonymous]
    public async Task<IActionResult> RefreshToken(
    [FromBody] RefreshTokenCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : Unauthorized(result);
    }
    
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/forgot-password
    // Purpose: Request an OTP code for password reset (sent to user's email)
    // Input: SendOTPCommand (email address)
    // Output: ApiResponse indicating OTP was sent (always returns 200 for security)
    // Notes: Always returns 200 OK to prevent email enumeration attacks.
    //        If email doesn't exist, no OTP is sent but response is still 200.
    // -------------------------------------------------------------------------
    [HttpPost("forgot-password")]
    [AllowAnonymous]
    public async Task<IActionResult> ForgotPassword(
    [FromBody] SendOTPCommand cmd, CancellationToken ct)
    {
        // Always return 200 — never reveal if email exists
        var result = await mediator.Send(cmd with { Purpose = "PasswordReset" }, ct);
        return Ok(result);
    }
    
    // -------------------------------------------------------------------------
    // POST /api/identity/auth/reset-password
    // Purpose: Reset user's password using the OTP code received via email
    // Input: ResetPasswordCommand (email, otpCode, newPassword)
    // Output: ApiResponse indicating success/failure of password reset
    // Notes: Validates the OTP code and updates the user's password in the database.
    //        OTP must be valid and not expired for this to succeed.
    // -------------------------------------------------------------------------
    [HttpPost("reset-password")]
    [AllowAnonymous]
    public async Task<IActionResult> ResetPassword(
    [FromBody] ResetPasswordCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
