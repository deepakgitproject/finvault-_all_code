using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace BillingService.Application.Commands.SchedulePayment;

public record SchedulePaymentCommand(
    Guid BillId,
    Guid UserId,
    decimal Amount,
    DateTimeOffset ScheduledDate
) : IRequest<ApiResponse<SchedulePaymentResponse>>;

public class SchedulePaymentResponse
{
    public Guid Id { get; set; }
    public Guid BillId { get; set; }
    public Guid UserId { get; set; }
    public decimal Amount { get; set; }
    public DateTimeOffset ScheduledDate { get; set; }
    public string Status { get; set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; set; }
}
