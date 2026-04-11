// Represents a billing statement for a user's card with payment tracking
namespace BillingService.Domain.Entities;

public class Bill
{
    public Guid Id { get; private set; }  // Unique identifier
    public Guid UserId { get; private set; }  // Owner of the bill
    public Guid CardId { get; private set; }  // Associated payment card
    public decimal TotalAmount { get; private set; }  // Total amount owed
    public decimal MinimumDue { get; private set; }  // Minimum required payment
    public decimal AmountPaid { get; private set; }  // Amount already paid
    public DateTimeOffset DueDate { get; private set; }  // Payment deadline
    public string BillingMonth { get; private set; } = string.Empty;  // Billing period label
    public string Status { get; private set; } = "Pending";  // Payment status (Pending/Paid/PartiallyPaid/Overdue)
    public bool IsDeleted { get; private set; }  // Soft delete flag
    public DateTimeOffset? DeletedAt { get; private set; }  // Timestamp of soft deletion
    public DateTimeOffset CreatedAt { get; private set; }  // Record creation time
    public DateTimeOffset? UpdatedAt { get; private set; }  // Last modification time

    private Bill() { } // Required by EF Core

    // Factory method to create a new bill with validation
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

    // Record a payment toward the bill and update status
    public void RecordPayment(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Payment amount must be positive.");
        AmountPaid += amount;
        Status = AmountPaid >= TotalAmount ? "Paid" : "PartiallyPaid";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Mark the bill as overdue when past due date
    public void MarkOverdue()
    {
        if (Status == "Paid") return;
        Status = "Overdue";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Mark the bill as fully paid
    public void MarkPaid()
    {
        Status = "Paid";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Soft delete the bill record
    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Computed property: remaining amount to be paid
    public decimal RemainingBalance => TotalAmount - AmountPaid;
}
