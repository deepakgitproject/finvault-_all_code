using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace CardService.Application.Commands.VerifyCard;

public class VerifyCardCommandHandler(
    ICreditCardRepository cardRepo
) : IRequestHandler<VerifyCardCommand, ApiResponse<bool>>
{
    public async Task<ApiResponse<bool>> Handle(
        VerifyCardCommand cmd, CancellationToken ct)
    {
        var card = await cardRepo.GetByIdAsync(cmd.CardId, ct);
        if (card is null || card.IsDeleted)
            return ApiResponse<bool>.Fail("Card not found.");

        if (card.IsVerified)
            return ApiResponse<bool>.Fail("Card is already verified.");

        card.Verify();
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true, "Card verified via Rs.1 micro-auth.");
    }
}
