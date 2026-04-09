using Microsoft.EntityFrameworkCore;
using PaymentService.Infrastructure.Persistence;
using PaymentService.Domain.Entities;
using System.Text.Json;

// This is a scratch script to be run via dotnet-script or similar, 
// or I can just use it to verify my understanding of the data.

Console.WriteLine("Fetching transactions for all users...");

var options = new DbContextOptionsBuilder<PaymentDbContext>()
    .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=FinVault.PaymentService;Trusted_Connection=True;")
    .Options;

using var db = new PaymentDbContext(options);

var transactions = await db.Transactions.ToListAsync();

Console.WriteLine($"Total Transactions found: {transactions.Count}");

foreach (var t in transactions)
{
    Console.WriteLine($"- ID: {t.Id}, Type: {t.Type}, Category: {t.Category}, Amount: {t.Amount}, CardId: {t.CardId}");
}

var externalPayments = await db.ExternalBillPayments.ToListAsync();
Console.WriteLine($"\nTotal External Bill Payments: {externalPayments.Count}");
foreach (var ep in externalPayments)
{
    Console.WriteLine($"- ID: {ep.Id}, Status: {ep.Status}, Amount: {ep.Amount}");
}
