namespace PaymentService.Domain.Tests.Entities;

using FluentAssertions;
using PaymentService.Domain.Entities;
using NUnit.Framework;

[TestFixture]
public class PaymentTests
{
    [Test]
    public void Create_WithValidParameters_ShouldCreatePayment()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var cardId = Guid.NewGuid();
        var billId = Guid.NewGuid();
        var amount = 100.50m;
        var paymentType = "CreditCard";

        // Act
        var payment = Payment.Create(userId, cardId, billId, amount, paymentType);

        // Assert
        payment.Should().NotBeNull();
        payment.Id.Should().NotBeEmpty();
        payment.UserId.Should().Be(userId);
        payment.CardId.Should().Be(cardId);
        payment.BillId.Should().Be(billId);
        payment.Amount.Should().Be(amount);
        payment.PaymentType.Should().Be(paymentType);
        payment.Status.Should().Be("Initiated");
        payment.IsDeleted.Should().BeFalse();
        payment.CreatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
        payment.UpdatedAt.Should().BeNull();
    }

    [Test]
    public void Complete_ShouldUpdateStatusToCompleted()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.SetOtp("somehash");

        // Act
        payment.Complete();

        // Assert
        payment.Status.Should().Be("Completed");
        payment.IsCompleted.Should().BeTrue();
        payment.OtpHash.Should().BeNull();
        payment.OtpExpiresAt.Should().BeNull();
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void Fail_WithReason_ShouldUpdateStatusToFailed()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.SetOtp("somehash");
        var reason = "Insufficient funds";

        // Act
        payment.Fail(reason);

        // Assert
        payment.Status.Should().Be("Failed");
        payment.IsFailed.Should().BeTrue();
        payment.FailureReason.Should().Be(reason);
        payment.OtpHash.Should().BeNull();
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void Reverse_ShouldUpdateStatusToReversed()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");

        // Act
        payment.Reverse();

        // Assert
        payment.Status.Should().Be("Reversed");
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void SetOtp_ShouldSetOtpData()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        var otpHash = "otp hash value";

        // Act
        payment.SetOtp(otpHash);

        // Assert
        payment.OtpHash.Should().Be(otpHash);
        payment.OtpExpiresAt.Should().NotBeNull();
        payment.OtpExpiresAt.Should().BeCloseTo(DateTimeOffset.UtcNow.AddMinutes(5), TimeSpan.FromSeconds(5));
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void ClearOtp_ShouldRemoveOtpData()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.SetOtp("somehash");

        // Act
        payment.ClearOtp();

        // Assert
        payment.OtpHash.Should().BeNull();
        payment.OtpExpiresAt.Should().BeNull();
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void SoftDelete_ShouldMarkAsDeleted()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.IsDeleted.Should().BeFalse();

        // Act
        payment.SoftDelete();

        // Assert
        payment.IsDeleted.Should().BeTrue();
        payment.DeletedAt.Should().NotBeNull();
        payment.DeletedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
        payment.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void IsOtpExpired_WhenOtpExpiresAtIsPast_ShouldReturnTrue()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.SetOtp("somehash");
        
        // Manually set expiry to the past
        typeof(Payment).GetProperty(nameof(Payment.OtpExpiresAt))!
            .SetValue(payment, DateTimeOffset.UtcNow.AddMinutes(-10));

        // Assert
        payment.IsOtpExpired.Should().BeTrue();
    }

    [Test]
    public void IsOtpExpired_WhenOtpExpiresAtIsFuture_ShouldReturnFalse()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");
        payment.SetOtp("somehash");

        // Assert
        payment.IsOtpExpired.Should().BeFalse();
    }

    [Test]
    public void IsOtpExpired_WhenNoOtpSet_ShouldReturnFalse()
    {
        // Arrange
        var payment = Payment.Create(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 100m, "CreditCard");

        // Assert
        payment.IsOtpExpired.Should().BeFalse();
    }
}
