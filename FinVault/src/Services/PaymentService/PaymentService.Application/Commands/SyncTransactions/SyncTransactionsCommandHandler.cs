using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using Microsoft.Extensions.Logging;

namespace PaymentService.Application.Commands.SyncTransactions;

public class SyncTransactionsCommandHandler(
    IPaymentRepository paymentRepo,
    IExternalBillPaymentRepository extPaymentRepo,
    ITransactionRepository txRepo,
    ILogger<SyncTransactionsCommandHandler> logger
) : IRequestHandler<SyncTransactionsCommand, ApiResponse<int>>
{
    public async Task<ApiResponse<int>> Handle(SyncTransactionsCommand cmd, CancellationToken ct)
    {
        int count = 0;

        // 1. Sync External Bill Payments
        var extPayments = await extPaymentRepo.GetByUserIdAsync(cmd.UserId, ct);
        foreach (var ep in extPayments.Where(p => p.IsCompleted))
        {
            if (!await txRepo.ExistsForPaymentAsync(ep.Id, ct))
            {
                var tx = Transaction.CreatePayment(
                    ep.Id, 
                    ep.UserId, 
                    ep.CardId,
                    ep.Amount,
                    ep.BillerCategory,
                    $"Legacy External Bill: {ep.BillerName} (Migrated)");
                
                await txRepo.AddAsync(tx, ct);
                count++;
            }
        }

        // 2. Sync Internal Card Payments
        var internalPayments = await paymentRepo.GetByUserIdAsync(cmd.UserId, ct);
        foreach (var ip in internalPayments.Where(p => p.IsCompleted))
        {
            if (!await txRepo.ExistsForPaymentAsync(ip.Id, ct))
            {
                var tx = Transaction.CreatePayment(
                    ip.Id, 
                    ip.UserId, 
                    ip.CardId,
                    ip.Amount,
                    "Card Bill",
                    $"Legacy Card Payment (Migrated)");
                
                await txRepo.AddAsync(tx, ct);
                count++;
            }
        }

        if (count > 0)
        {
            await txRepo.SaveChangesAsync(ct);
            logger.LogInformation("Successfully synced {Count} legacy transactions for User {UserId}", count, cmd.UserId);
        }

        return ApiResponse<int>.Ok(count, $"Successfully synced {count} transactions.");
    }
}
