namespace PaymentService.Domain.Entities;

public class Transaction
{
    public Guid Id { get; private set; }
    public Guid PaymentId { get; private set; }
    public Guid UserId { get; private set; }
    public Guid CardId { get; private set; }
    public decimal Amount { get; private set; }
    public string Type { get; private set; } = string.Empty;
    public string Category { get; private set; } = string.Empty;
    public string? Description { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }

    private Transaction() { }

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
