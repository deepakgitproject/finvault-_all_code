using MediatR;
using BillingService.Domain.Entities;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace BillingService.Application.Commands.SchedulePayment;

public class SchedulePaymentCommandHandler(
    IBillRepository billRepo,
    IPaymentScheduleRepository scheduleRepo
) : IRequestHandler<SchedulePaymentCommand, ApiResponse<SchedulePaymentResponse>>
{
    public async Task<ApiResponse<SchedulePaymentResponse>> Handle(
        SchedulePaymentCommand cmd, CancellationToken ct)
    {
        // 1. Validate bill exists
        var bill = await billRepo.GetByIdAsync(cmd.BillId, ct);
        if (bill is null || bill.IsDeleted)
            return ApiResponse<SchedulePaymentResponse>.Fail("Bill not found.");

        if (bill.Status == "Paid")
            return ApiResponse<SchedulePaymentResponse>.Fail("Bill is already fully paid.");

        if (bill.UserId != cmd.UserId)
            return ApiResponse<SchedulePaymentResponse>.Fail("Bill does not belong to this user.");

        // 2. Create schedule via factory method
        var schedule = PaymentSchedule.Create(cmd.BillId, cmd.UserId,
            cmd.Amount, cmd.ScheduledDate);

        // 3. Persist
        await scheduleRepo.AddAsync(schedule, ct);
        await scheduleRepo.SaveChangesAsync(ct);

        return ApiResponse<SchedulePaymentResponse>.Ok(new SchedulePaymentResponse
        {
            Id = schedule.Id,
            BillId = schedule.BillId,
            UserId = schedule.UserId,
            Amount = schedule.Amount,
            ScheduledDate = schedule.ScheduledDate,
            Status = schedule.Status,
            CreatedAt = schedule.CreatedAt
        }, "Payment scheduled successfully.");
    }
}
