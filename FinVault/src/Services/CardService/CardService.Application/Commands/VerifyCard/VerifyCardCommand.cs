using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace CardService.Application.Commands.VerifyCard;

public record VerifyCardCommand(Guid CardId) : IRequest<ApiResponse<bool>>;
