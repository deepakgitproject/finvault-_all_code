using MassTransit;
using Microsoft.Extensions.Logging;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Payment.Events;
using FinVault.Shared.Contracts.Billing.Events;

namespace BillingService.Infrastructure.Messaging.Consumers;

public class PaymentCompletedConsumer(
    IBillRepository billRepo,
    IRewardAccountRepository rewardAccountRepo,
    IRewardTransactionRepository rewardTxRepo,
    IRewardTierRepository tierRepo,
    IEventPublisher eventPublisher,
    ILogger<PaymentCompletedConsumer> logger
) : IConsumer<PaymentCompletedEvent>
{
    public async Task Consume(ConsumeContext<PaymentCompletedEvent> context)
    {
        var msg = context.Message;
        logger.LogInformation(
            "Processing PaymentCompleted: BillId={BillId}, UserId={UserId}, Amount={Amount}",
            msg.BillId, msg.UserId, msg.Amount);

        // 1. Update bill's AmountPaid
        var bill = await billRepo.GetByIdAsync(msg.BillId, context.CancellationToken);
        if (bill is null)
        {
            logger.LogWarning("Bill {BillId} not found for payment {PaymentId}",
                msg.BillId, msg.PaymentId);
            return;
        }

        bill.RecordPayment(msg.Amount);
        billRepo.Update(bill);
        await billRepo.SaveChangesAsync(context.CancellationToken);

        logger.LogInformation("Bill {BillId} updated: AmountPaid={AmountPaid}, Status={Status}",
            bill.Id, bill.AmountPaid, bill.Status);

        // 2. Grant reward points (1 point per Rs.100 paid)
        var pointsEarned = (int)(msg.Amount / 100);
        if (pointsEarned <= 0) return;

        // Get or create reward account
        var account = await rewardAccountRepo.GetByUserIdAsync(msg.UserId, context.CancellationToken);
        if (account is null)
        {
            var defaultTier = await tierRepo.GetByNameAsync("Silver", context.CancellationToken);
            if (defaultTier is null)
            {
                logger.LogError("Default Silver tier not found. Cannot create reward account.");
                return;
            }
            account = RewardAccount.Create(msg.UserId, defaultTier.Id);
            await rewardAccountRepo.AddAsync(account, context.CancellationToken);
            await rewardAccountRepo.SaveChangesAsync(context.CancellationToken);
        }

        // Add points
        account.AddPoints(pointsEarned);

        // Check tier upgrade
        var newTier = await tierRepo.GetTierForPointsAsync(account.TotalEarned, context.CancellationToken);
        if (newTier is not null && newTier.Id != account.TierId)
        {
            account.UpgradeTier(newTier.Id);
            logger.LogInformation("User {UserId} upgraded to tier {TierName}", msg.UserId, newTier.Name);
        }

        rewardAccountRepo.Update(account);
        await rewardAccountRepo.SaveChangesAsync(context.CancellationToken);

        // Record transaction
        var tx = RewardTransaction.CreateEarned(account.Id, msg.PaymentId, pointsEarned,
            $"Earned {pointsEarned} pts on Rs.{msg.Amount:N0} payment");
        await rewardTxRepo.AddAsync(tx, context.CancellationToken);
        await rewardTxRepo.SaveChangesAsync(context.CancellationToken);

        // 3. Publish RewardEarnedEvent
        // Reload account to get the current tier name
        var currentAccount = await rewardAccountRepo.GetByUserIdAsync(msg.UserId, context.CancellationToken);
        await eventPublisher.PublishAsync(new RewardEarnedEvent
        {
            UserId = msg.UserId,
            RewardAccountId = account.Id,
            PaymentId = msg.PaymentId,
            PointsEarned = pointsEarned,
            TotalAvailablePoints = currentAccount?.AvailablePoints ?? account.AvailablePoints,
            TotalLifetimePoints = currentAccount?.TotalEarned ?? account.TotalEarned,
            TierName = newTier?.Name ?? "Silver",
            CorrelationId = msg.CorrelationId
        }, context.CancellationToken);

        logger.LogInformation(
            "Granted {Points} reward points to user {UserId}. Total: {Total}",
            pointsEarned, msg.UserId, account.TotalEarned);
    }
}
