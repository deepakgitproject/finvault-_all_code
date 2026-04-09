using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCardById;

public record GetCardByIdQuery(Guid CardId) : IRequest<ApiResponse<CardResponse>>;
