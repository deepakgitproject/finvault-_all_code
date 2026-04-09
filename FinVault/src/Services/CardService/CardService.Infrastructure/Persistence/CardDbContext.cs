using Microsoft.EntityFrameworkCore;
using CardService.Domain.Entities;

namespace CardService.Infrastructure.Persistence;

public class CardDbContext(DbContextOptions<CardDbContext> options)
    : DbContext(options)
{
    public DbSet<CreditCard> CreditCards => Set<CreditCard>();
    public DbSet<CardIssuer> CardIssuers => Set<CardIssuer>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.ApplyConfigurationsFromAssembly(typeof(CardDbContext).Assembly);
        base.OnModelCreating(mb);
    }
}
