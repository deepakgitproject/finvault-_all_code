using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.SyncTransactions;

public record SyncTransactionsCommand(Guid UserId) : IRequest<ApiResponse<int>>;
