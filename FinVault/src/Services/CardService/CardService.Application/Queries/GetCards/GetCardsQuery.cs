using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCards;

public record GetCardsQuery(Guid UserId) : IRequest<ApiResponse<List<CardResponse>>>;
