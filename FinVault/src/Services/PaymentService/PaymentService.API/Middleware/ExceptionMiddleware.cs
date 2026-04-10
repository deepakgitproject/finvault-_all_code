using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;
using FluentValidation;

namespace PaymentService.API.Middleware;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext ctx)
    {
        try { await next(ctx); }
        catch (ValidationException ex)
        {
            var errors = ex.Errors.Select(e => e.ErrorMessage).ToList();
            logger.LogWarning("Validation failed: {Errors}", string.Join("; ", errors));
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("Validation failed.", errors));
        }
        catch (PaymentNotFoundException ex)
        {
            logger.LogWarning(ex, "Payment not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (PaymentAlreadyCompletedException ex)
        {
            logger.LogWarning(ex, "Payment already completed: {Message}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (OTPVerificationFailedException ex)
        {
            logger.LogWarning(ex, "OTP verification failed");
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (TransactionFailedException ex)
        {
            logger.LogError(ex, "Transaction failed: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("Transaction failed. Please try again."));
        }
        catch (PaymentSagaNotFoundException ex)
        {
            logger.LogWarning(ex, "Payment saga not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        catch (KeyNotFoundException ex)
        {
            logger.LogWarning(ex, "Entity not found");
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("The requested resource could not be found."));
        }
        catch (UnauthorizedAccessException ex)
        {
            logger.LogWarning(ex, "Unauthorized access attempt");
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("You are not authorized to perform this action."));
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("An internal error occurred. Please try again."));
        }
    }
}
