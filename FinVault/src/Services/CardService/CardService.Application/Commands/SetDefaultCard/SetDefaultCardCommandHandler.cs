using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

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
            return ApiResponse<bool>.Fail("Card not found.");

        if (card.UserId != cmd.UserId)
            return ApiResponse<bool>.Fail("Card does not belong to this user.");

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
