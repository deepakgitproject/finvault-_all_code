using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;

namespace CardService.Application.Commands.RemoveCard;

public class RemoveCardCommandHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<RemoveCardCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        RemoveCardCommand cmd, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(cmd.CardId, ct);
        if (card is null || card.IsDeleted)
            throw new CardNotFoundException("The card could not be found or has already been removed.");

        card.SoftDelete();
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true, "Card removed successfully.");
    }
}
