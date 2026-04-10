namespace IdentityService.Domain.Tests.Entities;

using FluentAssertions;
using IdentityService.Domain.Entities;
using NUnit.Framework;

[TestFixture]
public class UserTests
{
    [Test]
    public void Create_WithValidParameters_ShouldCreateUser()
    {
        // Arrange
        var email = "test@example.com";
        var passwordHash = "hashedpassword123";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var user = User.Create(email, passwordHash, firstName, lastName);

        // Assert
        user.Should().NotBeNull();
        user.Id.Should().NotBeEmpty();
        user.Email.Should().Be(email.ToLowerInvariant());
        user.PasswordHash.Should().Be(passwordHash);
        user.FirstName.Should().Be(firstName);
        user.LastName.Should().Be(lastName);
        user.Role.Should().Be("User");
        user.IsEmailVerified.Should().BeFalse();
        user.IsActive.Should().BeTrue();
        user.CreatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
        user.UpdatedAt.Should().BeNull();
    }

    [Test]
    public void Create_WithNullEmail_ShouldThrowArgumentException()
    {
        // Arrange
        string email = null!;
        var passwordHash = "hashedpassword123";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var act = () => User.Create(email, passwordHash, firstName, lastName);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Email is required.*");
    }

    [Test]
    public void Create_WithEmptyEmail_ShouldThrowArgumentException()
    {
        // Arrange
        var email = "";
        var passwordHash = "hashedpassword123";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var act = () => User.Create(email, passwordHash, firstName, lastName);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Email is required.*");
    }

    [Test]
    public void Create_WithWhitespaceEmail_ShouldThrowArgumentException()
    {
        // Arrange
        var email = "   ";
        var passwordHash = "hashedpassword123";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var act = () => User.Create(email, passwordHash, firstName, lastName);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Email is required.*");
    }

    [Test]
    public void Create_WithNullPasswordHash_ShouldThrowArgumentException()
    {
        // Arrange
        var email = "test@example.com";
        string passwordHash = null!;
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var act = () => User.Create(email, passwordHash, firstName, lastName);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Password hash is required.*");
    }

    [Test]
    public void Create_WithEmptyPasswordHash_ShouldThrowArgumentException()
    {
        // Arrange
        var email = "test@example.com";
        var passwordHash = "";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var act = () => User.Create(email, passwordHash, firstName, lastName);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Password hash is required.*");
    }

    [Test]
    public void Create_WithTrimmedEmail_ShouldNormalizeEmail()
    {
        // Arrange
        var email = "  Test@Example.COM  ";
        var passwordHash = "hashedpassword123";
        var firstName = "John";
        var lastName = "Doe";

        // Act
        var user = User.Create(email, passwordHash, firstName, lastName);

        // Assert
        user.Email.Should().Be("test@example.com");
    }

    [Test]
    public void VerifyEmail_ShouldMarkEmailAsVerified()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        user.IsEmailVerified.Should().BeFalse();

        // Act
        user.VerifyEmail();

        // Assert
        user.IsEmailVerified.Should().BeTrue();
        user.UpdatedAt.Should().NotBeNull();
        user.UpdatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void UpdatePassword_WithValidHash_ShouldUpdatePassword()
    {
        // Arrange
        var user = User.Create("test@example.com", "oldhash", "John", "Doe");
        var newHash = "newhash456";

        // Act
        user.UpdatePassword(newHash);

        // Assert
        user.PasswordHash.Should().Be(newHash);
        user.UpdatedAt.Should().NotBeNull();
        user.UpdatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void UpdatePassword_WithNullHash_ShouldThrowArgumentException()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        string newHash = null!;

        // Act
        var act = () => user.UpdatePassword(newHash);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Password hash required.");
    }

    [Test]
    public void UpdatePassword_WithEmptyHash_ShouldThrowArgumentException()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        var newHash = "";

        // Act
        var act = () => user.UpdatePassword(newHash);

        // Assert
        act.Should().Throw<ArgumentException>()
            .WithMessage("Password hash required.");
    }

    [Test]
    public void UpdateProfile_WithValidParameters_ShouldUpdateProfile()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        var newFirstName = "Jane";
        var newLastName = "Smith";

        // Act
        user.UpdateProfile(newFirstName, newLastName);

        // Assert
        user.FirstName.Should().Be(newFirstName);
        user.LastName.Should().Be(newLastName);
        user.UpdatedAt.Should().NotBeNull();
        user.UpdatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void Deactivate_ShouldMarkUserAsInactive()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        user.IsActive.Should().BeTrue();

        // Act
        user.Deactivate();

        // Assert
        user.IsActive.Should().BeFalse();
        user.UpdatedAt.Should().NotBeNull();
        user.UpdatedAt.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(5));
    }

    [Test]
    public void FullName_ShouldReturnConcatenatedName()
    {
        // Arrange
        var user = User.Create("test@example.com", "hash", "John", "Doe");

        // Act
        var fullName = user.FullName;

        // Assert
        fullName.Should().Be("John Doe");
    }
}
