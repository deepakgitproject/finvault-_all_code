using MediatR;
using FinVault.Shared.Contracts.Responses;
using PaymentService.Application.Commands.EvaluateRisk;

namespace PaymentService.Application.Queries.GetRiskScore;

public record GetRiskScoreQuery(Guid PaymentId) : IRequest<ApiResponse<RiskResult>>;
