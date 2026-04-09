using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BillingService.Application.Commands.SchedulePayment;
using BillingService.Application.Commands.CancelSchedule;

namespace BillingService.API.Controllers;

[ApiController]
[Route("api/billing/schedules")]
[Produces("application/json")]
[Authorize]
public class SchedulesController(ISender mediator) : ControllerBase
{
    /// <summary>Schedule a future payment for a bill</summary>
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

    /// <summary>Cancel a pending payment schedule</summary>
    [HttpPut("{scheduleId:guid}/cancel")]
    public async Task<IActionResult> Cancel(Guid scheduleId, CancellationToken ct)
    {
        var cmd = new CancelScheduleCommand(scheduleId);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }
}
