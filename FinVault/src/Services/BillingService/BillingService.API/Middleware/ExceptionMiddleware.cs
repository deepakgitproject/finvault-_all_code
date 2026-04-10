using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;
using FluentValidation;

namespace BillingService.API.Middleware;

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
        catch (BillNotFoundException ex)
        {
            logger.LogWarning(ex, "Bill not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (PaymentScheduleNotFoundException ex)
        {
            logger.LogWarning(ex, "Payment schedule not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (BillAlreadyExistsException ex)
        {
            logger.LogWarning(ex, "Duplicate bill attempt: {Message}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (InvalidBillStatusException ex)
        {
            logger.LogWarning(ex, "Invalid bill status: {Message}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail(ex.Message));
        }
        catch (UnauthorizedAccessException ex)
        {
            logger.LogWarning(ex, "Unauthorized access attempt");
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("You are not authorized to perform this action."));
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
            // 500 — never expose internal details in response
            logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("An internal error occurred. Please try again."));
        }
    }
}
