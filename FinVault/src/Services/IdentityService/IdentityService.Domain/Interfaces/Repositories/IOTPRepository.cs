namespace IdentityService.Domain.Interfaces.Repositories;

using IdentityService.Domain.Entities;
public interface IOTPRepository
{
    Task<OTPCode?> GetLatestValidAsync(Guid userId, string purpose,
        CancellationToken ct = default);
    Task AddAsync(OTPCode otp, CancellationToken ct = default);
    void Update(OTPCode otp);
    Task SaveChangesAsync(CancellationToken ct = default);
}