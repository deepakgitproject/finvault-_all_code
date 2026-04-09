using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace CardService.Application.Commands.UpdateCardLimit;

public record UpdateCardLimitCommand(
    Guid CardId,
    decimal NewLimit
) : IRequest<ApiResponse<bool>>;
