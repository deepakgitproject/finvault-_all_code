using MediatR;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetTransactions;

public class GetTransactionsQueryHandler(
    ITransactionRepository txRepo
) : IRequestHandler<GetTransactionsQuery, ApiResponse<List<TransactionResponse>>>
{
    public async Task<ApiResponse<List<TransactionResponse>>> Handle(
        GetTransactionsQuery query, CancellationToken ct)
    {
        var transactions = query.CardId.HasValue
            ? await txRepo.GetByCardIdAsync(query.UserId, query.CardId.Value, ct)
            : await txRepo.GetByUserIdAsync(query.UserId, ct);
        var response = transactions.Select(t => new TransactionResponse
        {
            Id = t.Id, PaymentId = t.PaymentId, CardId = t.CardId,
            Amount = t.Amount, Type = t.Type, Category = t.Category,
            Description = t.Description, CreatedAt = t.CreatedAt
        }).ToList();

        return ApiResponse<List<TransactionResponse>>.Ok(response,
            $"Found {response.Count} transaction(s).");
    }
}
