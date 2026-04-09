using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PaymentService.Application.Queries.GetTransactions;
using PaymentService.Application.Queries.GetRiskScore;

namespace PaymentService.API.Controllers;

[ApiController]
[Route("api/transactions")]
[Produces("application/json")]
[Authorize]
public class TransactionsController(ISender mediator) : ControllerBase
{
    private Guid GetUserId() =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new UnauthorizedAccessException("User ID not found in token."));

    /// <summary>Get all transactions for the current user</summary>
    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] Guid? cardId, CancellationToken ct)
    {
        var result = await mediator.Send(new GetTransactionsQuery(GetUserId(), cardId), ct);
        return Ok(result);
    }

    /// <summary>Sync legacy payments to transactions</summary>
    [HttpPost("sync")]
    public async Task<IActionResult> Sync(CancellationToken ct)
    {
        var result = await mediator.Send(new Application.Commands.SyncTransactions.SyncTransactionsCommand(GetUserId()), ct);
        return Ok(result);
    }

    /// <summary>Get risk score for a payment</summary>
    [HttpGet("risk/{paymentId:guid}")]
    public async Task<IActionResult> GetRisk(Guid paymentId, CancellationToken ct)
    {
        var result = await mediator.Send(new GetRiskScoreQuery(paymentId), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}