using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BillingService.Application.Commands.GenerateBill;
using BillingService.Application.Commands.UpdateBillStatus;
using BillingService.Application.Queries.GetBills;
using BillingService.Application.Queries.GetBillById;
using BillingService.Application.Queries.GetUpcomingBills;
using BillingService.Application.Queries.GetSpendingSummary;
using FinVault.Shared.Contracts.Billing.Requests;

namespace BillingService.API.Controllers;

[ApiController]
[Route("api/billing/bills")]
[Produces("application/json")]
[Authorize]
public class BillsController(ISender mediator) : ControllerBase
{
    /// <summary>Generate a new bill for a user's card</summary>
    [HttpPost]
    [ProducesResponseType(typeof(FinVault.Shared.Contracts.Responses.ApiResponse<
        FinVault.Shared.Contracts.Billing.Responses.BillResponse>), 200)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Generate(
        [FromBody] GenerateBillRequest req, CancellationToken ct)
    {
        var cmd = new GenerateBillCommand(
            req.UserId, req.CardId, req.TotalAmount,
            req.MinimumDue, req.DueDate, req.BillingMonth);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Update bill status (Overdue or Paid)</summary>
    [HttpPut("{billId:guid}/status")]
    public async Task<IActionResult> UpdateStatus(
        Guid billId, [FromBody] UpdateBillStatusRequest req, CancellationToken ct)
    {
        var cmd = new UpdateBillStatusCommand(billId, req.Status);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Get all bills for a user with optional filters</summary>
    [HttpGet("user/{userId:guid}")]
    public async Task<IActionResult> GetBills(
        Guid userId, [FromQuery] string? status, [FromQuery] string? billingMonth,
        CancellationToken ct)
    {
        var query = new GetBillsQuery(userId, status, billingMonth);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    /// <summary>Get a single bill by ID</summary>
    [HttpGet("{billId:guid}")]
    public async Task<IActionResult> GetById(Guid billId, CancellationToken ct)
    {
        var query = new GetBillByIdQuery(billId);
        var result = await mediator.Send(query, ct);
        return result.Success ? Ok(result) : NotFound(result);
    }

    /// <summary>Get upcoming bills due in the next N days</summary>
    [HttpGet("user/{userId:guid}/upcoming")]
    public async Task<IActionResult> GetUpcoming(
        Guid userId, [FromQuery] int days = 7, CancellationToken ct = default)
    {
        var query = new GetUpcomingBillsQuery(userId, days);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    /// <summary>Get spending summary across all cards</summary>
    [HttpGet("user/{userId:guid}/summary")]
    public async Task<IActionResult> GetSpendingSummary(
        Guid userId, CancellationToken ct)
    {
        var query = new GetSpendingSummaryQuery(userId);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }
}

// Inline request DTO for status update
public class UpdateBillStatusRequest
{
    public string Status { get; set; } = string.Empty;
}
