using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace CardService.Application.Commands.SetDefaultCard;

public record SetDefaultCardCommand(
    Guid UserId,
    Guid CardId
) : IRequest<ApiResponse<bool>>;
