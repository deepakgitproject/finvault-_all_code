using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;

namespace CardService.Application.Commands.UpdateCardLimit;

public class UpdateCardLimitCommandHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<UpdateCardLimitCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        UpdateCardLimitCommand cmd, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(cmd.CardId, ct);
        if (card is null || card.IsDeleted)
            throw new CardNotFoundException("The requested card could not be found.");

        if (cmd.NewLimit < card.OutstandingBalance)
            return ApiResponse<bool>.Fail(
                $"New limit cannot be less than outstanding balance.");

        card.UpdateLimit(cmd.NewLimit);
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true,
            $"Credit limit updated to ₹{cmd.NewLimit:N2}.");
    }
}
