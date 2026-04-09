using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.RevealCard;

public record RevealCardQuery(Guid CardId, Guid UserId) : IRequest<ApiResponse<RevealCardResponse>>;
