using MediatR;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

namespace IdentityService.Application.Queries.GetUserProfile;

public class GetUserProfileQueryHandler(
    IUserRepository userRepo
) : IRequestHandler<GetUserProfileQuery, ApiResponse<UserProfileResponse>>
{
    public async Task<ApiResponse<UserProfileResponse>> Handle(
        GetUserProfileQuery query, CancellationToken ct)
    {
        var user = await userRepo.GetByIdAsync(query.UserId, ct);
        if (user is null)
            return ApiResponse<UserProfileResponse>.Fail("User not found.");

        return ApiResponse<UserProfileResponse>.Ok(new UserProfileResponse
        {
            UserId = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Role = user.Role,
            IsEmailVerified = user.IsEmailVerified,
            CreatedAt = user.CreatedAt
        });
    }
}