using MediatR;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Payment.Responses;

namespace PaymentService.Application.Queries.GetTransactions;

public record GetTransactionsQuery(Guid UserId, Guid? CardId = null) : IRequest<ApiResponse<List<TransactionResponse>>>;
