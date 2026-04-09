using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Card.Responses;

namespace CardService.Application.Queries.GetCardUtilization;

public record GetCardUtilizationQuery(Guid UserId) : IRequest<ApiResponse<CardSummaryResponse>>;
