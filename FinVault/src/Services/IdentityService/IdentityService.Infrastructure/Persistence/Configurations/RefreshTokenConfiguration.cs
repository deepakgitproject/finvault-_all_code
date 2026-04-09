using IdentityService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityService.Infrastructure.Persistence.Configurations
{
    public class RefreshTokenConfiguration : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> b)
        {
            b.HasKey(r => r.Id);
            b.Property(r => r.Token).HasMaxLength(512).IsRequired();
            b.HasIndex(r => r.Token).IsUnique();
            b.Property(r => r.IsRevoked).IsRequired().HasDefaultValue(false);
            b.Property(r => r.ExpiresAt).IsRequired();
            b.Ignore(r => r.IsExpired);
            b.Ignore(r => r.IsActive);
        }
    }
}
