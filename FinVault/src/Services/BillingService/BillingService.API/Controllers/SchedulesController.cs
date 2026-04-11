using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BillingService.Application.Commands.SchedulePayment;
using BillingService.Application.Commands.CancelSchedule;

namespace BillingService.API.Controllers;

/// <summary>
/// ============================================================================
/// File: SchedulesController.cs
/// ============================================================================
/// Purpose: REST API controller for payment schedule management within the
///          BillingService. Handles scheduling future payments and cancelling
///          pending scheduled payments.
///
/// Architecture: This controller follows the CQRS pattern using MediatR. Each
///               endpoint maps to a corresponding command handler. The controller
///               is thin -- it delegates all business logic to the application
///               layer and only handles HTTP concerns (routing, model binding,
///               response formatting).
///
/// Endpoints:
///   POST   /api/billing/schedules               - Schedule a future payment
///   PUT    /api/billing/schedules/{scheduleId}/cancel - Cancel a pending schedule
/// ============================================================================
/// </summary>
[ApiController]
[Route("api/billing/schedules")]
[Produces("application/json")]
[Authorize]
public class SchedulesController(ISender mediator) : ControllerBase
{
    // ------------------------------------------------------------------
    // POST /api/billing/schedules
    // Purpose: Schedule a future payment for a bill
    // Input: SchedulePaymentCommand (BillId, ScheduledDate, Amount, etc.)
    // Output: ApiResponse<SchedulePaymentResponse>
    // Notes: Maps to SchedulePaymentCommand via MediatR. Returns 200 on success,
    //        400 on failure. Creates a scheduled payment record for auto-pay.
    // ------------------------------------------------------------------
    [HttpPost]
    [ProducesResponseType(typeof(FinVault.Shared.Contracts.Responses.ApiResponse<
        SchedulePaymentResponse>), 200)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Schedule(
        [FromBody] SchedulePaymentCommand cmd, CancellationToken ct)
    {
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // ------------------------------------------------------------------
    // PUT /api/billing/schedules/{scheduleId}/cancel
    // Purpose: Cancel a pending payment schedule
    // Input: scheduleId (path)
    // Output: ApiResponse
    // Notes: Maps to CancelScheduleCommand. Returns 200 on success, 400 on failure.
    //        Only cancels schedules that are still in pending status.
    // ------------------------------------------------------------------
    [HttpPut("{scheduleId:guid}/cancel")]
    public async Task<IActionResult> Cancel(Guid scheduleId, CancellationToken ct)
    {
        var cmd = new CancelScheduleCommand(scheduleId);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
