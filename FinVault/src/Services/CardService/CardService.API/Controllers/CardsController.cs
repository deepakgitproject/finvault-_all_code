using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CardService.Application.Commands.AddCard;
using CardService.Application.Commands.RemoveCard;
using CardService.Application.Commands.SetDefaultCard;
using CardService.Application.Commands.VerifyCard;
using CardService.Application.Commands.UpdateCardLimit;
using CardService.Application.Queries.GetCards;
using CardService.Application.Queries.GetCardById;
using CardService.Application.Queries.GetCardUtilization;
using CardService.Application.Queries.RevealCard;

namespace CardService.API.Controllers;

[ApiController]
[Route("api/cards")]
[Produces("application/json")]
[Authorize]
public class CardsController(ISender mediator) : ControllerBase
{
    private Guid GetUserId() =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new UnauthorizedAccessException("User ID not found in token."));


    /// <summary>Add a new credit card</summary>
    [HttpPost]
    public async Task<IActionResult> AddCard(
        [FromBody] AddCardCommand cmd, CancellationToken ct)
    {
        // Override UserId from JWT token for security
        var command = cmd with { UserId = GetUserId() };
        var result = await mediator.Send(command, ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Soft-delete a card</summary>
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> RemoveCard(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new RemoveCardCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Set a card as the default</summary>
    [HttpPut("{id:guid}/default")]
    public async Task<IActionResult> SetDefault(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(
            new SetDefaultCardCommand(GetUserId(), id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Verify a card via Rs.1 micro-auth</summary>
    [HttpPut("{id:guid}/verify")]
    public async Task<IActionResult> Verify(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new VerifyCardCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Update credit limit</summary>
    [HttpPut("{id:guid}/limit")]
    public async Task<IActionResult> UpdateLimit(
        Guid id, [FromBody] UpdateLimitRequest req, CancellationToken ct)
    {
        var result = await mediator.Send(
            new UpdateCardLimitCommand(id, req.NewLimit), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    /// <summary>Get all cards for the current user</summary>
    [HttpGet]
    public async Task<IActionResult> GetCards(CancellationToken ct)
    {
        var result = await mediator.Send(
            new GetCardsQuery(GetUserId()), ct);
        return Ok(result);
    }

    /// <summary>Get a card by ID</summary>
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new GetCardByIdQuery(id), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }

    /// <summary>Get card utilization for the current user</summary>
    [HttpGet("utilization")]
    public async Task<IActionResult> GetUtilization(CancellationToken ct)
    {
        var result = await mediator.Send(
            new GetCardUtilizationQuery(GetUserId()), ct);
        return Ok(result);
    }

    /// <summary>Reveal full card details (decrypted)</summary>
    [HttpGet("{id:guid}/reveal")]
    public async Task<IActionResult> RevealCard(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new RevealCardQuery(id, GetUserId()), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}

public class UpdateLimitRequest
{
    public decimal NewLimit { get; set; }
}