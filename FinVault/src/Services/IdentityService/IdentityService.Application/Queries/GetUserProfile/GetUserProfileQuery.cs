using MediatR;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Queries.GetUserProfile;

public record GetUserProfileQuery(Guid UserId) : IRequest<ApiResponse<UserProfileResponse>>;