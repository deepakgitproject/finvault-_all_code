using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.EvaluateRisk;

public record EvaluateRiskCommand(
    Guid UserId,
    Guid PaymentId,
    decimal Amount
) : IRequest<ApiResponse<RiskResult>>;

public class RiskResult
{
    public decimal Score { get; set; }
    public string Decision { get; set; } = string.Empty;
    public List<string> Factors { get; set; } = new();
}
