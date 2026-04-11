// ============================================================================
// CardsController.cs
// ============================================================================
// Purpose: Manages credit card operations for users including adding, removing,
//          verifying, and managing card settings. Also provides card retrieval
//          and utilization tracking features.
// 
// Architecture: Uses MediatR CQRS pattern. All endpoints require JWT authentication.
//          User ID is extracted from JWT token to ensure users can only manage
//          their own cards. Card data is encrypted at rest and decrypted on demand.
//
// Endpoints:
//   POST   /api/cards                    - Add a new credit card
//   DELETE /api/cards/{id}               - Soft-delete a card
//   PUT    /api/cards/{id}/default       - Set card as default payment method
//   PUT    /api/cards/{id}/verify        - Verify card via Rs.1 micro-authentication
//   PUT    /api/cards/{id}/limit         - Update card's credit limit
//   GET    /api/cards                    - Get all cards for current user
//   GET    /api/cards/{id}               - Get specific card by ID
//   GET    /api/cards/utilization        - Get utilization across all user's cards
//   GET    /api/cards/{id}/reveal        - Reveal full card details (decrypted)
// ============================================================================

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
using FinVault.Shared.Exceptions;

namespace CardService.API.Controllers;

[ApiController]
[Route("api/cards")]
[Produces("application/json")]
[Authorize]
public class CardsController(ISender mediator) : ControllerBase
{
    // Helper method to extract user ID from JWT token for security
    // Ensures users can only access/modify their own cards
    private Guid GetUserId() =>
        Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new InvalidTokenException("User ID not found in token."));


    // -------------------------------------------------------------------------
    // POST /api/cards
    // Purpose: Add a new credit card to the user's account
    // Input: AddCardCommand (card number, expiry date, issuer, etc.)
    // Output: ApiResponse<CardResponse> with the newly added card details
    // Notes: UserId is overridden from JWT token for security (ignores any UserId
    //        in the request body). Card details are encrypted before storage.
    // -------------------------------------------------------------------------
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

    // -------------------------------------------------------------------------
    // DELETE /api/cards/{id}
    // Purpose: Soft-delete a credit card (marks as deleted, doesn't remove from DB)
    // Input: Card ID (GUID) in URL path
    // Output: ApiResponse indicating success/failure of deletion
    // Notes: This is a soft delete - the card remains in the database with
    //        IsDeleted flag set to true. Prevents accidental data loss.
    // -------------------------------------------------------------------------
    /// <summary>Soft-delete a card</summary>
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> RemoveCard(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new RemoveCardCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // -------------------------------------------------------------------------
    // PUT /api/cards/{id}/default
    // Purpose: Set a specific card as the user's default payment method
    // Input: Card ID (GUID) in URL path
    // Output: ApiResponse indicating success/failure
    // Notes: UserId extracted from JWT token. Only the user's own cards can be
    //        set as default. Used when no specific card is selected for payment.
    // -------------------------------------------------------------------------
    /// <summary>Set a card as the default</summary>
    [HttpPut("{id:guid}/default")]
    public async Task<IActionResult> SetDefault(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(
            new SetDefaultCardCommand(GetUserId(), id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // -------------------------------------------------------------------------
    // PUT /api/cards/{id}/verify
    // Purpose: Verify card ownership via Rs.1 micro-authorization transaction
    // Input: Card ID (GUID) in URL path
    // Output: ApiResponse indicating success/failure of verification
    // Notes: Charges Rs.1 to the card to verify it's legitimate and owned by
    //        the user. This is a common pattern to prevent fraud.
    // -------------------------------------------------------------------------
    /// <summary>Verify a card via Rs.1 micro-auth</summary>
    [HttpPut("{id:guid}/verify")]
    public async Task<IActionResult> Verify(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new VerifyCardCommand(id), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // -------------------------------------------------------------------------
    // PUT /api/cards/{id}/limit
    // Purpose: Update the credit limit for a specific card
    // Input: Card ID (GUID) in URL path, UpdateLimitRequest (newLimit) in body
    // Output: ApiResponse indicating success/failure of limit update
    // Notes: Allows users to manage their card's credit limit. May trigger
    //        validation checks based on user's creditworthiness.
    // -------------------------------------------------------------------------
    /// <summary>Update credit limit</summary>
    [HttpPut("{id:guid}/limit")]
    public async Task<IActionResult> UpdateLimit(
        Guid id, [FromBody] UpdateLimitRequest req, CancellationToken ct)
    {
        var result = await mediator.Send(
            new UpdateCardLimitCommand(id, req.NewLimit), ct);
        return result.Success ? Ok(result) : BadRequest(result);
    }

    // -------------------------------------------------------------------------
    // GET /api/cards
    // Purpose: Retrieve all credit cards belonging to the current user
    // Input: None (User ID from JWT token)
    // Output: ApiResponse<List<CardSummaryResponse>> with all user's cards
    // Notes: Returns only non-deleted cards. Cards are returned with masked
    //        details for security (only last 4 digits visible).
    // -------------------------------------------------------------------------
    /// <summary>Get all cards for the current user</summary>
    [HttpGet]
    public async Task<IActionResult> GetCards(CancellationToken ct)
    {
        var result = await mediator.Send(
            new GetCardsQuery(GetUserId()), ct);
        return Ok(result);
    }

    // -------------------------------------------------------------------------
    // GET /api/cards/{id}
    // Purpose: Retrieve a specific card by its ID
    // Input: Card ID (GUID) in URL path
    // Output: ApiResponse<CardResponse> with card details (masked)
    // Notes: Returns card with masked details. For full decrypted details,
    //        use the /reveal endpoint instead.
    // -------------------------------------------------------------------------
    /// <summary>Get a card by ID</summary>
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new GetCardByIdQuery(id), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }

    // -------------------------------------------------------------------------
    // GET /api/cards/utilization
    // Purpose: Get credit utilization summary across all user's cards
    // Input: None (User ID from JWT token)
    // Output: ApiResponse with utilization data (spent vs. total limit)
    // Notes: Shows how much of the available credit limit is being used.
    //        Important for credit score management.
    // -------------------------------------------------------------------------
    /// <summary>Get card utilization for the current user</summary>
    [HttpGet("utilization")]
    public async Task<IActionResult> GetUtilization(CancellationToken ct)
    {
        var result = await mediator.Send(
            new GetCardUtilizationQuery(GetUserId()), ct);
        return Ok(result);
    }

    // -------------------------------------------------------------------------
    // GET /api/cards/{id}/reveal
    // Purpose: Reveal full card details with decrypted sensitive information
    // Input: Card ID (GUID) in URL path
    // Output: ApiResponse<RevealCardResponse> with full card number, CVV, etc.
    // Notes: This endpoint decrypts and returns full card details. Requires
    //        authentication and ownership verification for security.
    // -------------------------------------------------------------------------
    /// <summary>Reveal full card details (decrypted)</summary>
    [HttpGet("{id:guid}/reveal")]
    public async Task<IActionResult> RevealCard(Guid id, CancellationToken ct)
    {
        var result = await mediator.Send(new RevealCardQuery(id, GetUserId()), ct);
        return result.Success ? Ok(result) : NotFound(result);
    }
}

// Request DTO for updating card credit limit
public class UpdateLimitRequest
{
    public decimal NewLimit { get; set; }
}