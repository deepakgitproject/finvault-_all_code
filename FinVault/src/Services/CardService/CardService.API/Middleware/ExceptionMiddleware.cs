using FinVault.Shared.Contracts.Responses;
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
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (KeyNotFoundException ex)
        {
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
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
