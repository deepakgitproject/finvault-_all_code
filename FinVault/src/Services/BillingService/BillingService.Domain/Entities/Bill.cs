namespace BillingService.Domain.Entities;

public class Bill
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid CardId { get; private set; }
    public decimal TotalAmount { get; private set; }
    public decimal MinimumDue { get; private set; }
    public decimal AmountPaid { get; private set; }
    public DateTimeOffset DueDate { get; private set; }
    public string BillingMonth { get; private set; } = string.Empty;
    public string Status { get; private set; } = "Pending";
    public bool IsDeleted { get; private set; }
    public DateTimeOffset? DeletedAt { get; private set; }
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    private Bill() { } // Required by EF Core

    public static Bill Create(Guid userId, Guid cardId, decimal totalAmount,
        decimal minimumDue, DateTimeOffset dueDate, string billingMonth)
    {
        if (userId == Guid.Empty) throw new ArgumentException("UserId is required.");
        if (cardId == Guid.Empty) throw new ArgumentException("CardId is required.");
        if (totalAmount <= 0) throw new ArgumentException("TotalAmount must be positive.");
        if (minimumDue <= 0) throw new ArgumentException("MinimumDue must be positive.");
        if (minimumDue > totalAmount) throw new ArgumentException("MinimumDue cannot exceed TotalAmount.");
        if (string.IsNullOrWhiteSpace(billingMonth)) throw new ArgumentException("BillingMonth is required.");

        return new Bill
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            CardId = cardId,
            TotalAmount = totalAmount,
            MinimumDue = minimumDue,
            AmountPaid = 0,
            DueDate = dueDate,
            BillingMonth = billingMonth.Trim(),
            Status = "Pending",
            IsDeleted = false,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void RecordPayment(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Payment amount must be positive.");
        AmountPaid += amount;
        Status = AmountPaid >= TotalAmount ? "Paid" : "PartiallyPaid";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void MarkOverdue()
    {
        if (Status == "Paid") return;
        Status = "Overdue";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void MarkPaid()
    {
        Status = "Paid";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Computed — no DB column
    public decimal RemainingBalance => TotalAmount - AmountPaid;
}
