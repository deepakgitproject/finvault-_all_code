// File: Transaction.cs - Domain entity representing a financial transaction ledger entry
namespace PaymentService.Domain.Entities;

public class Transaction
{
    public Guid Id { get; private set; }  // Unique transaction identifier
    public Guid PaymentId { get; private set; }  // Parent payment this transaction belongs to
    public Guid UserId { get; private set; }  // User who made this transaction
    public Guid CardId { get; private set; }  // Card used for this transaction
    public decimal Amount { get; private set; }  // Transaction amount
    public string Type { get; private set; } = string.Empty;  // "Payment" or "Reversal"
    public string Category { get; private set; } = string.Empty;  // Transaction category (e.g., "Electricity", "Credit Card")
    public string? Description { get; private set; }  // Optional description
    public DateTimeOffset CreatedAt { get; private set; }  // When transaction was created

    // Private constructor for EF Core
    private Transaction() { }

    // Factory method to create a payment transaction
    public static Transaction CreatePayment(Guid paymentId, Guid userId, Guid cardId,
        decimal amount, string category, string? description = null)
    {
        return new Transaction
        {
            Id = Guid.NewGuid(),
            PaymentId = paymentId,
            UserId = userId,
            CardId = cardId,
            Amount = amount,
            Type = "Payment",
            Category = category,
            Description = description,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    // Factory method to create a reversal (refund) transaction
    public static Transaction CreateReversal(Guid paymentId, Guid userId, Guid cardId,
        decimal amount, string category, string? description = null)
    {
        return new Transaction
        {
            Id = Guid.NewGuid(),
            PaymentId = paymentId,
            UserId = userId,
            CardId = cardId,
            Amount = amount,
            Type = "Reversal",
            Category = category,
            Description = description,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
}
