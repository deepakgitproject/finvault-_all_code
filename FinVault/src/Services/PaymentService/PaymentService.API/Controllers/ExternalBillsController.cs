using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PaymentService.Application.Commands.InitiateExternalBillPayment;
using PaymentService.Application.Commands.CompleteExternalBillPayment;
using PaymentService.Application.Queries.GetExternalBillPayments;

namespace PaymentService.API.Controllers;

[ApiController]
[Route("api/external-bills")]
[Authorize]
public class ExternalBillsController(ISender mediator) : ControllerBase
{
    private Guid GetUserId() =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new UnauthorizedAccessException("User ID not found in token."));

    /// <summary>Initiate a new external bill payment</summary>
    [HttpPost("pay")]
    public async Task<IActionResult> Initiate(
        [FromBody] InitiateExternalBillPaymentCommand cmd,
        [FromServices] ILogger<ExternalBillsController> logger,
        CancellationToken ct)
    {
        logger.LogInformation("Received InitiateExternalBillPaymentCommand for card: {CardId}, amount: {Amount}", cmd.CardId, cmd.Amount);
        var command = cmd with { UserId = GetUserId() };
        var result = await mediator.Send(command, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Verify and complete an external bill payment</summary>
    [HttpPut("{id:guid}/verify")]
    public async Task<IActionResult> Verify(Guid id, [FromBody] VerifyExternalBillPaymentRequest request, CancellationToken ct)
    {
        var result = await mediator.Send(new CompleteExternalBillPaymentCommand(id, request.OtpCode), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Get all external bill payments for the current user</summary>
    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken ct)
    {
        var result = await mediator.Send(new GetExternalBillPaymentsQuery(GetUserId()), ct);
        return Ok(result);
    }

    public class VerifyExternalBillPaymentRequest
    {
        public string OtpCode { get; set; } = string.Empty;
    }
}
