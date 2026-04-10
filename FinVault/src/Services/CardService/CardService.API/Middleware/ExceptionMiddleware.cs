using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;
using FluentValidation;

namespace CardService.API.Middleware;

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
            logger.LogWarning("Validation failed: {Errors}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            var errors = ex.Errors.Select(e => e.ErrorMessage).ToList();
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("Validation failed.", errors));
        }
        catch (UnauthorizedAccessException ex)
        {
            logger.LogWarning(ex, "Unauthorized access attempt");
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("You are not authorized to perform this action."));
        }
        catch (CardNotFoundException ex)
        {
            logger.LogWarning(ex, "Card not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (CardAlreadyVerifiedException ex)
        {
            logger.LogWarning(ex, "Card already verified: {Message}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (CardDecryptionFailedException ex)
        {
            logger.LogError(ex, "Card decryption failed");
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("Failed to decrypt card details. Please try again."));
        }
        catch (KeyNotFoundException ex)
        {
            logger.LogWarning(ex, "Entity not found");
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("The requested resource could not be found."));
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("An internal error occurred. Please try again."));
        }
    }
}
