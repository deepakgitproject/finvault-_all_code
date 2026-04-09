using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using IdentityService.Domain.Entities;
namespace IdentityService.Infrastructure.Persistence.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> b)
    {
        b.HasKey(u => u.Id);
        b.Property(u => u.Email).HasMaxLength(256).IsRequired();
        b.HasIndex(u => u.Email).IsUnique();
        b.Property(u => u.PasswordHash).HasMaxLength(512).IsRequired();
        b.Property(u => u.FirstName).HasMaxLength(100).IsRequired();
        b.Property(u => u.LastName).HasMaxLength(100).IsRequired();
        b.Property(u => u.Role).HasMaxLength(20).IsRequired().HasDefaultValue("User");
        b.Property(u => u.IsEmailVerified).IsRequired().HasDefaultValue(false);
        b.Property(u => u.IsActive).IsRequired().HasDefaultValue(true);
        b.Property(u => u.CreatedAt).IsRequired();
        b.Ignore(u => u.FullName); // Computed — not stored in DB
        b.HasMany<RefreshToken>().WithOne(r => r.User)
            .HasForeignKey(r => r.UserId).OnDelete(DeleteBehavior.Cascade);
    }
}