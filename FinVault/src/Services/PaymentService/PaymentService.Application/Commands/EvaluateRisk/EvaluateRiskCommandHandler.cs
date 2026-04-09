using MediatR;
using PaymentService.Domain.Entities;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace PaymentService.Application.Commands.EvaluateRisk;

public class EvaluateRiskCommandHandler(
    IRiskScoreRepository riskRepo,
    IFraudAlertRepository fraudRepo
) : IRequestHandler<EvaluateRiskCommand, ApiResponse<RiskResult>>
{
    public async Task<ApiResponse<RiskResult>> Handle(
        EvaluateRiskCommand cmd, CancellationToken ct)
    {
        decimal score = 0;
        var factors = new List<string>();

        // HighAmount check
        if (cmd.Amount > 50000)
        {
            score += 40;
            factors.Add("HighAmount: Payment exceeds ₹50,000");
        }

        // UnusualTime check
        var hour = DateTimeOffset.UtcNow.Hour;
        if (hour is >= 0 and < 5)
        {
            score += 25;
            factors.Add("UnusualTime: Transaction during 12AM-5AM");
        }

        // Base factor
        var baseFactor = (cmd.UserId.GetHashCode() % 20 + 20) % 20;
        score += baseFactor;
        score = Math.Min(score, 100);

        var risk = RiskScore.Create(cmd.UserId, cmd.PaymentId, score);
        await riskRepo.AddAsync(risk, ct);

        // Create fraud alert if blocked
        if (risk.Decision == "Blocked")
        {
            var alertType = cmd.Amount > 50000 ? "HighAmount" : "UnusualTime";
            var alert = FraudAlert.Create(cmd.UserId, cmd.PaymentId, alertType, score);
            await fraudRepo.AddAsync(alert, ct);
        }

        await riskRepo.SaveChangesAsync(ct);

        return ApiResponse<RiskResult>.Ok(new RiskResult
        {
            Score = score,
            Decision = risk.Decision,
            Factors = factors
        }, $"Risk evaluation: {risk.Decision}");
    }
}
