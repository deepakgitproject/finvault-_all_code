// Represents a scheduled future payment for a bill
namespace BillingService.Domain.Entities;

public class PaymentSchedule
{
    public Guid Id { get; private set; }  // Unique identifier
    public Guid BillId { get; private set; }  // Associated bill
    public Guid UserId { get; private set; }  // User who owns the schedule
    public decimal Amount { get; private set; }  // Scheduled payment amount
    public DateTimeOffset ScheduledDate { get; private set; }  // When payment should execute
    public string Status { get; private set; } = "Pending";  // Schedule status (Pending/Executed/Cancelled)
    public DateTimeOffset CreatedAt { get; private set; }  // Record creation time
    public DateTimeOffset? UpdatedAt { get; private set; }  // Last modification time

    // Navigation property to the associated bill
    public Bill Bill { get; private set; } = null!;

    private PaymentSchedule() { } // Required by EF Core

    // Factory method to create a new payment schedule with validation
    public static PaymentSchedule Create(Guid billId, Guid userId,
        decimal amount, DateTimeOffset scheduledDate)
    {
        if (billId == Guid.Empty) throw new ArgumentException("BillId is required.");
        if (userId == Guid.Empty) throw new ArgumentException("UserId is required.");
        if (amount <= 0) throw new ArgumentException("Amount must be positive.");
        if (scheduledDate <= DateTimeOffset.UtcNow)
            throw new ArgumentException("ScheduledDate must be in the future.");

        return new PaymentSchedule
        {
            Id = Guid.NewGuid(),
            BillId = billId,
            UserId = userId,
            Amount = amount,
            ScheduledDate = scheduledDate,
            Status = "Pending",
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    // Execute the scheduled payment
    public void Execute()
    {
        if (Status != "Pending")
            throw new InvalidOperationException("Only pending schedules can be executed.");
        Status = "Executed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    // Cancel the scheduled payment
    public void Cancel()
    {
        if (Status != "Pending")
            throw new InvalidOperationException("Only pending schedules can be cancelled.");
        Status = "Cancelled";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
