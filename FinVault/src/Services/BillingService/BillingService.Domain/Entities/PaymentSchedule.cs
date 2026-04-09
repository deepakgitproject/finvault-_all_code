namespace BillingService.Domain.Entities;

public class PaymentSchedule
{
    public Guid Id { get; private set; }
    public Guid BillId { get; private set; }
    public Guid UserId { get; private set; }
    public decimal Amount { get; private set; }
    public DateTimeOffset ScheduledDate { get; private set; }
    public string Status { get; private set; } = "Pending";
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset? UpdatedAt { get; private set; }

    // Navigation
    public Bill Bill { get; private set; } = null!;

    private PaymentSchedule() { } // Required by EF Core

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

    public void Execute()
    {
        if (Status != "Pending")
            throw new InvalidOperationException("Only pending schedules can be executed.");
        Status = "Executed";
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void Cancel()
    {
        if (Status != "Pending")
            throw new InvalidOperationException("Only pending schedules can be cancelled.");
        Status = "Cancelled";
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}
