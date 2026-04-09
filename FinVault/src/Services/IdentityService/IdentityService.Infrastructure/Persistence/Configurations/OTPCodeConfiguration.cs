using IdentityService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityService.Infrastructure.Persistence.Configurations
{
    public class OTPCodeConfiguration : IEntityTypeConfiguration<OTPCode>
    {
        public void Configure(EntityTypeBuilder<OTPCode> b)
        {
            b.HasKey(o => o.Id);
            b.Property(o => o.CodeHash).HasMaxLength(512).IsRequired();
            b.Property(o => o.Purpose).HasMaxLength(30).IsRequired();
            b.HasIndex(o => new { o.UserId, o.Purpose, o.IsUsed });
            b.Ignore(o => o.IsExpired);
            b.Ignore(o => o.IsValid);
        }
    }
}
