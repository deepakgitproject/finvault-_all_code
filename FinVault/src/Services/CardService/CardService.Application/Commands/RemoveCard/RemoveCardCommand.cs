using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace CardService.Application.Commands.RemoveCard;

public record RemoveCardCommand(Guid CardId) : IRequest<ApiResponse<bool>>;
