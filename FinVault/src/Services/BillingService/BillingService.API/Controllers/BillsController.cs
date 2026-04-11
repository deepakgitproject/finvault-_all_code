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

/// <summary>
/// ============================================================================
/// File: BillsController.cs
/// ============================================================================
/// Purpose: REST API controller for bill management operations within the
///          BillingService. Handles bill generation, status updates, retrieval
///          (by ID, by user, with filters), upcoming bills, and spending
///          summaries.
///
/// Architecture: This controller follows the CQRS pattern using MediatR. Each
///               endpoint maps to a corresponding command or query handler. The
///               controller itself is thin -- it delegates all business logic
///               to the application layer and only handles HTTP concerns
///               (routing, model binding, response formatting).
///
/// Endpoints:
///   POST   /api/billing/bills                  - Generate a new bill
///   PUT    /api/billing/bills/{billId}/status  - Update bill status
///   GET    /api/billing/bills/user/{userId}    - Get bills for a user (with optional filters)
///   GET    /api/billing/bills/{billId}         - Get a single bill by ID
///   GET    /api/billing/bills/user/{userId}/upcoming     - Get upcoming bills for a user
///   GET    /api/billing/bills/user/{userId}/summary      - Get spending summary for a user
/// ============================================================================
/// </summary>
[ApiController]
[Route("api/billing/bills")]
[Produces("application/json")]
[Authorize]
public class BillsController(ISender mediator) : ControllerBase
{
    // ------------------------------------------------------------------
    // POST /api/billing/bills
    // Purpose: Generate a new bill for a user's card
    // Input: GenerateBillRequest (UserId, CardId, TotalAmount, MinimumDue, DueDate, BillingMonth)
    // Output: ApiResponse<BillResponse>
    // Notes: Maps the incoming request to a GenerateBillCommand and dispatches
    //        to the MediatR pipeline. Returns 200 on success, 400 on failure.
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // PUT /api/billing/bills/{billId}/status
    // Purpose: Update bill status (Overdue or Paid)
    // Input: billId (path), UpdateBillStatusRequest (Status)
    // Output: ApiResponse
    // Notes: Maps to UpdateBillStatusCommand. Returns 200 on success, 400 on failure.
    // ------------------------------------------------------------------
    [HttpPut("{billId:guid}/status")]
    public async Task<IActionResult> UpdateStatus(
        Guid billId, [FromBody] UpdateBillStatusRequest req, CancellationToken ct)
    {
        var cmd = new UpdateBillStatusCommand(billId, req.Status);
        var result = await mediator.Send(cmd, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // ------------------------------------------------------------------
    // GET /api/billing/bills/user/{userId}
    // Purpose: Get all bills for a user with optional filters
    // Input: userId (path), status (query, optional), billingMonth (query, optional)
    // Output: ApiResponse with list of bills
    // Notes: Maps to GetBillsQuery. Filters are optional -- omit for all bills.
    // ------------------------------------------------------------------
    [HttpGet("user/{userId:guid}")]
    public async Task<IActionResult> GetBills(
        Guid userId, [FromQuery] string? status, [FromQuery] string? billingMonth,
        CancellationToken ct)
    {
        var query = new GetBillsQuery(userId, status, billingMonth);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    // ------------------------------------------------------------------
    // GET /api/billing/bills/{billId}
    // Purpose: Get a single bill by ID
    // Input: billId (path)
    // Output: ApiResponse<BillResponse>
    // Notes: Maps to GetBillByIdQuery. Returns 404 if bill not found.
    // ------------------------------------------------------------------
    [HttpGet("{billId:guid}")]
    public async Task<IActionResult> GetById(Guid billId, CancellationToken ct)
    {
        var query = new GetBillByIdQuery(billId);
        var result = await mediator.Send(query, ct);
        return result.Success ? Ok(result) : NotFound(result);
    }

    // ------------------------------------------------------------------
    // GET /api/billing/bills/user/{userId}/upcoming
    // Purpose: Get upcoming bills due in the next N days
    // Input: userId (path), days (query, default 7)
    // Output: ApiResponse with list of upcoming bills
    // Notes: Maps to GetUpcomingBillsQuery. Default look-ahead is 7 days.
    // ------------------------------------------------------------------
    [HttpGet("user/{userId:guid}/upcoming")]
    public async Task<IActionResult> GetUpcoming(
        Guid userId, [FromQuery] int days = 7, CancellationToken ct = default)
    {
        var query = new GetUpcomingBillsQuery(userId, days);
        var result = await mediator.Send(query, ct);
        return Ok(result);
    }

    // ------------------------------------------------------------------
    // GET /api/billing/bills/user/{userId}/summary
    // Purpose: Get spending summary across all cards for a user
    // Input: userId (path)
    // Output: ApiResponse with spending summary data
    // Notes: Maps to GetSpendingSummaryQuery. Aggregates data across all user's cards.
    // ------------------------------------------------------------------
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
