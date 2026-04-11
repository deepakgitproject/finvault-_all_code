// ============================================================================
// ExceptionMiddleware.cs - Global Exception Handler
// ============================================================================
// Purpose: Catches all unhandled exceptions in the Payment Service and 
//          converts them into consistent JSON API responses with appropriate
//          HTTP status codes. Prevents raw error details from leaking to clients.
//
// How It Works:
//   - Wraps the entire request pipeline in a try-catch
//   - Catches specific exception types and maps them to HTTP status codes
//   - Logs all exceptions using Serilog for debugging
//   - Returns standardized ApiResponse<T> format to clients
//
// Exception Mapping:
//   ValidationException (400)         - Invalid input data
//   PaymentNotFoundException (404)    - Payment doesn't exist
//   PaymentAlreadyCompletedException (400) - Can't complete already done payment
//   OTPVerificationFailedException (400)    - Invalid/expired OTP
//   TransactionFailedException (500)        - Database/transaction errors
//   PaymentSagaNotFoundException (404)      - Saga state missing
//   KeyNotFoundException (404)              - Generic not found
//   UnauthorizedAccessException (401)       - Insufficient permissions
//   Exception (500)                         - Catch-all for unexpected errors
// ============================================================================

using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;
using FluentValidation;

namespace PaymentService.API.Middleware;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    /// <summary>
    /// Middleware entry point - wraps request in try-catch and handles errors
    /// </summary>
    public async Task InvokeAsync(HttpContext ctx)
    {
        try { await next(ctx); }
        
        // -------------------------------------------------------------------------
        // Validation Errors (400 Bad Request)
        // FluentValidation exceptions from command/query validators
        // -------------------------------------------------------------------------
        catch (ValidationException ex)
        {
            var errors = ex.Errors.Select(e => e.ErrorMessage).ToList();
            logger.LogWarning("Validation failed: {Errors}", string.Join("; ", errors));
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("Validation failed.", errors));
        }
        
        // -------------------------------------------------------------------------
        // Payment Not Found (404 Not Found)
        // Requested payment ID doesn't exist in database
        // -------------------------------------------------------------------------
        catch (PaymentNotFoundException ex)
        {
            logger.LogWarning(ex, "Payment not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        
        // -------------------------------------------------------------------------
        // Payment Already Completed (400 Bad Request)
        // User tried to complete a payment that's already in Completed status
        // -------------------------------------------------------------------------
        catch (PaymentAlreadyCompletedException ex)
        {
            logger.LogWarning(ex, "Payment already completed: {Message}", ex.Message);
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        
        // -------------------------------------------------------------------------
        // OTP Verification Failed (400 Bad Request)
        // Invalid or expired OTP code during payment verification
        // -------------------------------------------------------------------------
        catch (OTPVerificationFailedException ex)
        {
            logger.LogWarning(ex, "OTP verification failed");
            ctx.Response.StatusCode = 400;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        
        // -------------------------------------------------------------------------
        // Transaction Failed (500 Internal Server Error)
        // Database transaction or saga orchestration failure
        // -------------------------------------------------------------------------
        catch (TransactionFailedException ex)
        {
            logger.LogError(ex, "Transaction failed: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("Transaction failed. Please try again."));
        }
        
        // -------------------------------------------------------------------------
        // Payment Saga Not Found (404 Not Found)
        // Distributed transaction saga state doesn't exist
        // -------------------------------------------------------------------------
        catch (PaymentSagaNotFoundException ex)
        {
            logger.LogWarning(ex, "Payment saga not found: {Message}", ex.Message);
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail(ex.Message));
        }
        
        // -------------------------------------------------------------------------
        // Generic Key Not Found (404 Not Found)
        // Fallback for any other "not found" scenarios
        // -------------------------------------------------------------------------
        catch (KeyNotFoundException ex)
        {
            logger.LogWarning(ex, "Entity not found");
            ctx.Response.StatusCode = 404;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("The requested resource could not be found."));
        }
        
        // -------------------------------------------------------------------------
        // Unauthorized Access (401 Unauthorized)
        // User doesn't have permission for the requested operation
        // -------------------------------------------------------------------------
        catch (UnauthorizedAccessException ex)
        {
            logger.LogWarning(ex, "Unauthorized access attempt");
            ctx.Response.StatusCode = 401;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(
                ApiResponse<object>.Fail("You are not authorized to perform this action."));
        }
        
        // -------------------------------------------------------------------------
        // Catch-All Exception (500 Internal Server Error)
        // Any unexpected error not specifically handled above
        // -------------------------------------------------------------------------
        catch (Exception ex)
        {
            logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            ctx.Response.StatusCode = 500;
            ctx.Response.ContentType = "application/json";
            await ctx.Response.WriteAsJsonAsync(ApiResponse<object>.Fail("An internal error occurred. Please try again."));
        }
    }
}
