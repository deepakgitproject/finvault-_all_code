using Microsoft.EntityFrameworkCore;
using IdentityService.Domain.Entities;
namespace IdentityService.Infrastructure.Persistence;

public class IdentityDbContext(DbContextOptions<IdentityDbContext> options)
: DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();
    public DbSet<OTPCode> OTPCodes => Set<OTPCode>();
    protected override void OnModelCreating(ModelBuilder mb)
    {
        // Picks up all IEntityTypeConfiguration<T> files in this assembly automatically
        mb.ApplyConfigurationsFromAssembly(typeof(IdentityDbContext).Assembly);
        base.OnModelCreating(mb);
    }
}