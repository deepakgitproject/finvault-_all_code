using MediatR;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Contracts.Billing.Responses;
using FinVault.Shared.Contracts.Billing.Events;

namespace BillingService.Application.Commands.GenerateBill;

public class GenerateBillCommandHandler(
    IBillRepository billRepo,
    IEventPublisher eventPublisher
) : IRequestHandler<GenerateBillCommand, ApiResponse<BillResponse>>
{
    public async Task<ApiResponse<BillResponse>> Handle(
        GenerateBillCommand cmd, CancellationToken ct)
    {
        // 1. Check for duplicate bill
        if (await billRepo.ExistsAsync(cmd.UserId, cmd.CardId, cmd.BillingMonth, ct))
            return ApiResponse<BillResponse>.Fail(
                $"Bill already exists for card {cmd.CardId} in {cmd.BillingMonth}.");

        // 2. Create domain entity via factory method
        var bill = Bill.Create(cmd.UserId, cmd.CardId, cmd.TotalAmount,
            cmd.MinimumDue, cmd.DueDate, cmd.BillingMonth);

        // 3. Persist
        await billRepo.AddAsync(bill, ct);
        await billRepo.SaveChangesAsync(ct);

        // 4. Publish event
        await eventPublisher.PublishAsync(new BillGeneratedEvent
        {
            BillId = bill.Id,
            UserId = bill.UserId,
            CardId = bill.CardId,
            TotalAmount = bill.TotalAmount,
            MinimumDue = bill.MinimumDue,
            DueDate = bill.DueDate,
            BillingMonth = bill.BillingMonth,
            CorrelationId = Guid.NewGuid().ToString()
        }, ct);

        // 5. Map to response
        return ApiResponse<BillResponse>.Ok(MapToResponse(bill), "Bill generated successfully.");
    }

    private static BillResponse MapToResponse(Bill b) => new()
    {
        Id = b.Id,
        UserId = b.UserId,
        CardId = b.CardId,
        TotalAmount = b.TotalAmount,
        MinimumDue = b.MinimumDue,
        AmountPaid = b.AmountPaid,
        RemainingBalance = b.RemainingBalance,
        DueDate = b.DueDate,
        BillingMonth = b.BillingMonth,
        Status = b.Status,
        CreatedAt = b.CreatedAt,
        UpdatedAt = b.UpdatedAt
    };
}
