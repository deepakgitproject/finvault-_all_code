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
    /// <summary>Register a new user account</summary>
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
    /// <summary>Login with email and password</summary>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(
    [FromBody] LoginUserCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : Unauthorized(result);
    }
    /// <summary>Verify email address with 6-digit OTP code</summary>
    [HttpPost("verify-email")]
    [AllowAnonymous]
    public async Task<IActionResult> VerifyEmail(
    [FromBody] VerifyEmailCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
    /// <summary>Exchange refresh token for new JWT pair</summary>
    [HttpPost("refresh")]
    [AllowAnonymous]
    public async Task<IActionResult> RefreshToken(
    [FromBody] RefreshTokenCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : Unauthorized(result);
    }
    /// <summary>Request OTP for password reset</summary>
    [HttpPost("forgot-password")]
    [AllowAnonymous]
    public async Task<IActionResult> ForgotPassword(
    [FromBody] SendOTPCommand cmd, CancellationToken ct)
    {
        // Always return 200 — never reveal if email exists
        var result = await mediator.Send(cmd with { Purpose = "PasswordReset" }, ct);
        return Ok(result);
    }
    /// <summary>Reset password using OTP</summary>
    [HttpPost("reset-password")]
    [AllowAnonymous]
    public async Task<IActionResult> ResetPassword(
    [FromBody] ResetPasswordCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
