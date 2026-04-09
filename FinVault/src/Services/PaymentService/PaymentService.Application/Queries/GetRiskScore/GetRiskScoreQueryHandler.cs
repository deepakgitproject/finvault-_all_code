using MediatR;
using PaymentService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;
using PaymentService.Application.Commands.EvaluateRisk;

namespace PaymentService.Application.Queries.GetRiskScore;

public class GetRiskScoreQueryHandler(
    IRiskScoreRepository riskRepo
) : IRequestHandler<GetRiskScoreQuery, ApiResponse<RiskResult>>
{
    public async Task<ApiResponse<RiskResult>> Handle(
        GetRiskScoreQuery query, CancellationToken ct)
    {
        var risk = await riskRepo.GetByPaymentIdAsync(query.PaymentId, ct);
        if (risk is null)
            return ApiResponse<RiskResult>.Fail("Risk score not found for this payment.");

        return ApiResponse<RiskResult>.Ok(new RiskResult
        {
            Score = risk.Score,
            Decision = risk.Decision,
            Factors = new List<string>()
        }, $"Risk score: {risk.Score} — {risk.Decision}");
    }
}
