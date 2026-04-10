namespace BillingService.Domain.Tests.Entities;

using FluentAssertions;
using BillingService.Domain.Entities;
using NUnit.Framework;

[TestFixture]
public class BillTests
{
    [Test]
    public void Create_WithValidParameters_ShouldCreateBill()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var totalAmount = 5000m;
        var minimumDue = 500m;
        var dueDate = DateTimeOffset.UtcNow.AddDays(30);
        var billingMonth = "March 2026";

        // Act
        var bill = Bill.Create(userId, cardId, totalAmount, minimumDue, dueDate, billingMonth);

        // Assert
        bill.Should().NotBeNull();
        bill.Id.Should().NotBeEmpty();
        bill.UserId.Should().Be(userId);
        bill.CardId.Should().Be(cardId);
        bill.TotalAmount.Should().Be(totalAmount);
        bill.MinimumDue.Should().Be(minimumDue);
        bill.AmountPaid.Should().Be(0);
        bill.DueDate.Should().Be(dueDate);
        bill.BillingMonth.Should().Be(billingMonth);
        bill.Status.Should().Be("Pending");
        bill.IsDeleted.Should().BeFalse();
        bill.CreatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void Create_WithZeroTotalAmount_ShouldThrowArgumentException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var totalAmount = 0m;
        var minimumDue = 500m;
        var dueDate = DateTimeOffset.UtcNow.AddDays(30);
        var billingMonth = "March 2026";

        // Act
        var act = () => Bill.Create(userId, cardId, totalAmount, minimumDue, dueDate, billingMonth);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("TotalAmount must be positive.*");
    }

    [Test]
    public void Create_WithNegativeTotalAmount_ShouldThrowArgumentException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var totalAmount = -100m;
        var minimumDue = 500m;
        var dueDate = DateTimeOffset.UtcNow.AddDays(30);
        var billingMonth = "March 2026";

        // Act
        var act = () => Bill.Create(userId, cardId, totalAmount, minimumDue, dueDate, billingMonth);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("TotalAmount must be positive.*");
    }

    [Test]
    public void Create_WithMinimumDueExceedingTotalAmount_ShouldThrowArgumentException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var totalAmount = 1000m;
        var minimumDue = 1500m;
        var dueDate = DateTimeOffset.UtcNow.AddDays(30);
        var billingMonth = "March 2026";

        // Act
        var act = () => Bill.Create(userId, cardId, totalAmount, minimumDue, dueDate, billingMonth);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("MinimumDue cannot exceed TotalAmount.*");
    }

    [Test]
    public void Create_WithEmptyBillingMonth_ShouldThrowArgumentException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var totalAmount = 1000m;
        var minimumDue = 500m;
        var dueDate = DateTimeOffset.UtcNow.AddDays(30);
        var billingMonth = "";

        // Act
        var act = () => Bill.Create(userId, cardId, totalAmount, minimumDue, dueDate, billingMonth);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("BillingMonth is required.*");
    }

    [Test]
    public void RecordPayment_WithValidAmount_ShouldUpdateAmountPaid()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");
        var paymentAmount = 2000m;

        // Act
        bill.RecordPayment(paymentAmount);

        // Assert
        bill.AmountPaid.Should().Be(paymentAmount);
        bill.RemainingBalance.Should().Be(3000);
        bill.Status.Should().Be("PartiallyPaid");
        bill.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void RecordPayment_WithFullAmount_ShouldMarkAsPaid()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");

        // Act
        bill.RecordPayment(5000m);

        // Assert
        bill.AmountPaid.Should().Be(5000m);
        bill.RemainingBalance.Should().Be(0);
        bill.Status.Should().Be("Paid");
    }

    [Test]
    public void RecordPayment_WithMultiplePayments_ShouldAccumulateAmount()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");

        // Act
        bill.RecordPayment(2000m);
        bill.RecordPayment(3000m);

        // Assert
        bill.AmountPaid.Should().Be(5000m);
        bill.Status.Should().Be("Paid");
    }

    [Test]
    public void RecordPayment_WithNegativeAmount_ShouldThrowArgumentException()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");

        // Act
        var act = () => bill.RecordPayment(-100m);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Payment amount must be positive.*");
    }

    [Test]
    public void MarkOverdue_WhenNotPaid_ShouldUpdateStatus()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");

        // Act
        bill.MarkOverdue();

        // Assert
        bill.Status.Should().Be("Overdue");
        bill.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void MarkOverdue_WhenAlreadyPaid_ShouldNotChangeStatus()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");
        bill.RecordPayment(5000m);
        var originalStatus = bill.Status;

        // Act
        bill.MarkOverdue();

        // Assert
        bill.Status.Should().Be("Paid");
    }

    [Test]
    public void MarkPaid_ShouldUpdateStatusToPaid()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");
        bill.Status.Should().Be("Pending");

        // Act
        bill.MarkPaid();

        // Assert
        bill.Status.Should().Be("Paid");
        bill.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void SoftDelete_ShouldMarkAsDeleted()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");
        bill.IsDeleted.Should().BeFalse();

        // Act
        bill.SoftDelete();

        // Assert
        bill.IsDeleted.Should().BeTrue();
        bill.DeletedAt.Should().NotBeNull();
        bill.DeletedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
        bill.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void RemainingBalance_ShouldCalculateCorrectly()
    {
        // Arrange
        var bill = Bill.Create(Guid.NewGuid(), Guid.NewGuid(), 5000m, 500m, 
            DateTimeOffset.UtcNow.AddDays(30), "March 2026");
        bill.RecordPayment(2000m);

        // Act
        var remainingBalance = bill.RemainingBalance;

        // Assert
        remainingBalance.Should().Be(3000);
    }
}
