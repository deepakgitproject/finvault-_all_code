using MediatR;
using CardService.Domain.Entities;
using CardService.Domain.Interfaces;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;
using FinVault.Shared.Contracts.Card.Events;

namespace CardService.Application.Commands.AddCard;

public class AddCardCommandHandler(
    ICreditCardRepository cardRepo,
    ICardIssuerRepository issuerRepo,
    IEventPublisher eventPublisher,
    ICardEncryptionService encryptionService
) : IRequestHandler<AddCardCommand, ApiResponse<CardResponse>>
{
    public async Task<ApiResponse<CardResponse>> Handle(
        AddCardCommand cmd, CancellationToken ct)
    {
        var lastFour = cmd.CardNumber[^4..];
        var maskedNumber = "**** **** **** " + lastFour;

        // Check duplicate last four + cardholder for same user
        if (await cardRepo.ExistsByLastFourAsync(cmd.UserId, lastFour, cmd.CardholderName, ct))
            return ApiResponse<CardResponse>.Fail(
                "A card with this number and cardholder name already exists for this user.");

        // Look up issuer
        var issuer = await issuerRepo.GetByNameAsync(cmd.IssuerName, ct);
        if (issuer is null)
            return ApiResponse<CardResponse>.Fail($"Unknown card issuer: {cmd.IssuerName}");

        // Encrypt sensitive data
        var encryptedNumber = encryptionService.Encrypt(cmd.CardNumber);
        var encryptedCvv = encryptionService.Encrypt(cmd.CVV);

        var card = CreditCard.Create(
            cmd.UserId, maskedNumber, cmd.CardholderName,
            cmd.ExpiryMonth, cmd.ExpiryYear, issuer.Id,
            cmd.CreditLimit, cmd.BillingCycleStartDay,
            encryptedNumber, encryptedCvv, lastFour);

        await cardRepo.AddAsync(card, ct);
        await cardRepo.SaveChangesAsync(ct);

        // Publish event (no sensitive data)
        await eventPublisher.PublishAsync(new CardAddedEvent
        {
            UserId = card.UserId,
            CardId = card.Id,
            MaskedNumber = card.MaskedNumber,
            IssuerName = issuer.Name,
            CreditLimit = card.CreditLimit,
            CorrelationId = Guid.NewGuid().ToString()
        }, ct);

        return ApiResponse<CardResponse>.Ok(MapToResponse(card, issuer.Name),
            "Card added successfully.");
    }

    private static CardResponse MapToResponse(CreditCard c, string issuerName) => new()
    {
        Id = c.Id,
        UserId = c.UserId,
        MaskedNumber = c.MaskedNumber,
        CardNumberLastFour = c.CardNumberLastFour,
        CardholderName = c.CardholderName,
        ExpiryMonth = c.ExpiryMonth,
        ExpiryYear = c.ExpiryYear,
        IssuerName = issuerName,
        CreditLimit = c.CreditLimit,
        OutstandingBalance = c.OutstandingBalance,
        AvailableCredit = c.AvailableCredit,
        Utilization = c.Utilization,
        BillingCycleStartDay = c.BillingCycleStartDay,
        IsDefault = c.IsDefault,
        IsVerified = c.IsVerified,
        CreatedAt = c.CreatedAt
    };
}
