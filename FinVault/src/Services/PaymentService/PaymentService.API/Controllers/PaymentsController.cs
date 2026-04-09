using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PaymentService.Application.Commands.InitiatePayment;
using PaymentService.Application.Commands.CompletePayment;
using PaymentService.Application.Commands.ReversePayment;
using PaymentService.Application.Queries.GetPayments;
using PaymentService.Application.Queries.GetPaymentById;

namespace PaymentService.API.Controllers;

[ApiController]
[Route("api/payments")]
[Produces("application/json")]
[Authorize]
public class PaymentsController(ISender mediator) : ControllerBase
{
    private Guid GetUserId() =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new UnauthorizedAccessException("User ID not found in token."));

    /// <summary>Initiate a new payment</summary>
    [HttpPost]
    public async Task<IActionResult> Initiate(
        [FromBody] InitiatePaymentCommand cmd, CancellationToken ct)
    {
        var command = cmd with { UserId = GetUserId() };
        var result = await mediator.Send(command, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Complete a payment</summary>
    [HttpPut("{id:guid}/complete")]
    public async Task<IActionResult> Complete(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new CompletePaymentCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Reverse a completed payment</summary>
    [HttpPut("{id:guid}/reverse")]
    public async Task<IActionResult> Reverse(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new ReversePaymentCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Get all payments for the current user</summary>
    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken ct)
    {
        var result = await mediator.Send(new GetPaymentsQuery(GetUserId()), ct);
        return Ok(result);
    }

    /// <summary>Get payment by ID</summary>
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new GetPaymentByIdQuery(id), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}