using MediatR;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace BillingService.Application.Commands.CancelSchedule;

public class CancelScheduleCommandHandler(
    IPaymentScheduleRepository scheduleRepo
) : IRequestHandler<CancelScheduleCommand, ApiResponse<string>>
{
    public async Task<ApiResponse<string>> Handle(
        CancelScheduleCommand cmd, CancellationToken ct)
    {
        var schedule = await scheduleRepo.GetByIdAsync(cmd.ScheduleId, ct);
        if (schedule is null)
            return ApiResponse<string>.Fail("Payment schedule not found.");

        if (schedule.Status != "Pending")
            return ApiResponse<string>.Fail(
                $"Cannot cancel schedule with status '{schedule.Status}'. Only Pending schedules can be cancelled.");

        schedule.Cancel();
        scheduleRepo.Update(schedule);
        await scheduleRepo.SaveChangesAsync(ct);

        return ApiResponse<string>.Ok("Cancelled", "Payment schedule cancelled successfully.");
    }
}
