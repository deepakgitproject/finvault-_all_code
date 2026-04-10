using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;
using FluentValidation;

namespace IdentityService.API.Middleware;
// Global error handler — catches ALL unhandled exceptions
// Returns consistent ApiResponse<object> format for every error
// Without this, exceptions expose stack traces in HTTP responses
public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext ctx)
    {
        try
        {
            await next(ctx);
        }
        catch (ValidationException ex)
        {
            // FluentValidation errors → 400
            logger.LogWarning("Validation failed: {Errors}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            var errors = ex.Errors.Select(e => e.ErrorMessage).ToList();
            await ctx.Response.WriteAsJsonAsync(
            ApiResponse<object>.Fail("Validation failed.", errors));
        }
        catch (UnauthorizedAccessException ex)
        {
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (EntityNotFoundException ex)
        {
            logger.LogWarning(ex, "Entity not found: {Message}", ex.Message);
            ctx.Response.StatusCode = StatusCodes.Status404NotFound;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (InvalidCredentialsException ex)
        {
            logger.LogWarning(ex, "Invalid credentials attempt");
            ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("Invalid credentials. Please check and try again."));
        }
        catch (UserAlreadyExistsException ex)
        {
            logger.LogWarning(ex, "Duplicate user registration attempt");
            ctx.Response.StatusCode = StatusCodes.Status400BadRequest;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (InvalidTokenException ex)
        {
            logger.LogWarning(ex, "Invalid token usage");
            ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("Invalid or expired token."));
        }
        catch (FinVaultException ex)
        {
            logger.LogWarning(ex, "Business rule violation: {Message}", ex.Message);
            ctx.Response.StatusCode = StatusCodes.Status400BadRequest;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (KeyNotFoundException ex)
        {
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (Exception ex)
        {
            // 500 — never expose internal details in response
            logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
            ApiResponse<object>.Fail("An internal error occurred. Please try again."));
        }
    }
}