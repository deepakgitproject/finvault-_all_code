namespace CardService.Domain.Tests.Entities;

using FluentAssertions;
using CardService.Domain.Entities;
using NUnit.Framework;

[TestFixture]
public class CreditCardTests
{
    [Test]
    public void Create_WithValidParameters_ShouldCreateCreditCard()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var maskedNumber = "****1234";
        var cardholderName = "John Doe";
        byte expiryMonth = 12;
        short expiryYear = 2027;
        var issuerId = Guid.NewGuid();
        var creditLimit = 5000m;
        byte billingCycleStartDay = 15;
        var encryptedCardNumber = "encrypted123";
        var encryptedCVV = "encryptedCVV";
        var cardNumberLastFour = "1234";

        // Act
        var card = CreditCard.Create(
            userId, maskedNumber, cardholderName,
            expiryMonth, expiryYear, issuerId,
            creditLimit, billingCycleStartDay,
            encryptedCardNumber, encryptedCVV, cardNumberLastFour);

        // Assert
        card.Should().NotBeNull();
        card.Id.Should().NotBeEmpty();
        card.UserId.Should().Be(userId);
        card.MaskedNumber.Should().Be(maskedNumber);
        card.CardholderName.Should().Be(cardholderName);
        card.ExpiryMonth.Should().Be(expiryMonth);
        card.ExpiryYear.Should().Be(expiryYear);
        card.IssuerId.Should().Be(issuerId);
        card.CreditLimit.Should().Be(creditLimit);
        card.OutstandingBalance.Should().Be(0);
        card.BillingCycleStartDay.Should().Be(billingCycleStartDay);
        card.EncryptedCardNumber.Should().Be(encryptedCardNumber);
        card.EncryptedCVV.Should().Be(encryptedCVV);
        card.CardNumberLastFour.Should().Be(cardNumberLastFour);
        card.IsDefault.Should().BeFalse();
        card.IsVerified.Should().BeFalse();
        card.IsDeleted.Should().BeFalse();
        card.CreatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void AvailableCredit_ShouldCalculateCorrectly()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        
        card.UpdateBalance(2000);

        // Act
        var availableCredit = card.AvailableCredit;

        // Assert
        availableCredit.Should().Be(3000); // 5000 - 2000
    }

    [Test]
    public void Utilization_ShouldCalculatePercentage()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        
        card.UpdateBalance(2500);

        // Act
        var utilization = card.Utilization;

        // Assert
        utilization.Should().Be(50); // (2500 / 5000) * 100
    }

    [Test]
    public void Utilization_WhenCreditLimitIsZero_ShouldReturnZero()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 0m, 15,
            "encrypted", "encryptedCVV", "1234");
        
        card.UpdateBalance(1000);

        // Act
        var utilization = card.Utilization;

        // Assert
        utilization.Should().Be(0);
    }

    [Test]
    public void UpdateBalance_WithPositiveAmount_ShouldIncreaseBalance()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");

        // Act
        card.UpdateBalance(1500);

        // Assert
        card.OutstandingBalance.Should().Be(1500);
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void UpdateBalance_WithNegativeAmount_ShouldDecreaseBalance()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        
        card.UpdateBalance(3000);

        // Act
        card.UpdateBalance(-1000);

        // Assert
        card.OutstandingBalance.Should().Be(2000);
    }

    [Test]
    public void UpdateBalance_ShouldNotGoBelowZero()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");

        // Act
        card.UpdateBalance(-500);

        // Assert
        card.OutstandingBalance.Should().Be(0);
    }

    [Test]
    public void UpdateLimit_ShouldUpdateCreditLimit()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");

        // Act
        card.UpdateLimit(10000);

        // Assert
        card.CreditLimit.Should().Be(10000);
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void SetAsDefault_ShouldMarkAsDefault()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        card.IsDefault.Should().BeFalse();

        // Act
        card.SetAsDefault();

        // Assert
        card.IsDefault.Should().BeTrue();
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void UnsetDefault_ShouldUnmarkAsDefault()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        
        card.SetAsDefault();
        card.IsDefault.Should().BeTrue();

        // Act
        card.UnsetDefault();

        // Assert
        card.IsDefault.Should().BeFalse();
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void Verify_ShouldMarkAsVerified()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        card.IsVerified.Should().BeFalse();

        // Act
        card.Verify();

        // Assert
        card.IsVerified.Should().BeTrue();
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void SoftDelete_ShouldMarkAsDeleted()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");
        card.IsDeleted.Should().BeFalse();

        // Act
        card.SoftDelete();

        // Assert
        card.IsDeleted.Should().BeTrue();
        card.DeletedAt.Should().NotBeNull();
        card.DeletedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
        card.UpdatedAt.Should().NotBeNull();
    }

    [Test]
    public void IsExpired_WithFutureExpiryDate_ShouldReturnFalse()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            12, 2027, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");

        // Assert
        card.IsExpired.Should().BeFalse();
    }

    [Test]
    public void IsExpired_WithPastExpiryDate_ShouldReturnTrue()
    {
        // Arrange
        var card = CreditCard.Create(
            Guid.NewGuid(), "****1234", "John Doe",
            1, 2020, Guid.NewGuid(), 5000m, 15,
            "encrypted", "encryptedCVV", "1234");

        // Assert
        card.IsExpired.Should().BeTrue();
    }
}
