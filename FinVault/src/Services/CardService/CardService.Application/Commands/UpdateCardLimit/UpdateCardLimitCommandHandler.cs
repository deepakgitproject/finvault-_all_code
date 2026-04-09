using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

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
            return ApiResponse<bool>.Fail("Card not found.");

        if (cmd.NewLimit < card.OutstandingBalance)
            return ApiResponse<bool>.Fail(
                $"New limit (₹{cmd.NewLimit:N2}) cannot be less than outstanding balance (₹{card.OutstandingBalance:N2}).");

        card.UpdateLimit(cmd.NewLimit);
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true,
            $"Credit limit updated to ₹{cmd.NewLimit:N2}.");
    }
}
