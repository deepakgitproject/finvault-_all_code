using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace BillingService.Application.Commands.CancelSchedule;

public record CancelScheduleCommand(
    Guid ScheduleId
) : IRequest<ApiResponse<string>>;
