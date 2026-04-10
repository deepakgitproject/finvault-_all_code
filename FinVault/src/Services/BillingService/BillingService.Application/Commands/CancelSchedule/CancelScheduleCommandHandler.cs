using MediatR;
using BillingService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using FinVault.Shared.Exceptions;

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
            throw new PaymentScheduleNotFoundException("The requested payment schedule could not be found.");

        if (schedule.Status != "Pending")
            throw new InvalidBillStatusException(
                $"Cannot cancel schedule with status '{schedule.Status}'. Only pending schedules can be cancelled.");

        schedule.Cancel();
        scheduleRepo.Update(schedule);
        await scheduleRepo.SaveChangesAsync(ct);

        return ApiResponse<string>.Ok("Cancelled", "Payment schedule cancelled successfully.");
    }
}
