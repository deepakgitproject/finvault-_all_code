using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Commands.AddCard;

public record AddCardCommand(
    Guid UserId,
    string CardNumber,
    string CVV,
    string CardholderName,
    byte ExpiryMonth,
    short ExpiryYear,
    string IssuerName,
    decimal CreditLimit,
    byte BillingCycleStartDay
) : IRequest<ApiResponse<CardResponse>>;
