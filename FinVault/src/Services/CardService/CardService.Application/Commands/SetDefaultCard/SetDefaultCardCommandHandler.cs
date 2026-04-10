using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;

namespace CardService.Application.Commands.SetDefaultCard;

public class SetDefaultCardCommandHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<SetDefaultCardCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        SetDefaultCardCommand cmd, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(cmd.CardId, ct);
        if (card is null || card.IsDeleted)
            throw new CardNotFoundException("The requested card could not be found.");

        if (card.UserId != cmd.UserId)
            throw new UnauthorizedAccessException("You can only manage your own cards.");

        // Unset all current defaults for this user
        var userCards = await cardRepo.GetByUserIdAsync(cmd.UserId, ct);
        foreach (var c in userCards.Where(c => c.IsDefault))
        {
            c.UnsetDefault();
            cardRepo.Update(c);
        }

        // Set new default
        card.SetAsDefault();
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true, "Default card updated.");
    }
}
