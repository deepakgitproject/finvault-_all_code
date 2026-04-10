using MediatR;
using CardService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;

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
            throw new CardNotFoundException("The requested card could not be found.");

        if (card.IsVerified)
            throw new CardAlreadyVerifiedException("This card is already verified.");

        card.Verify();
        cardRepo.Update(card);
        await cardRepo.SaveChangesAsync(ct);

        return ApiResponse<bool>.Ok(true, "Card verified via Rs.1 micro-auth.");
    }
}
