namespace IdentityService.Application.Tests.Commands.VerifyEmail;

using FluentAssertions;
using Moq;
using NUnit.Framework;
using IdentityService.Application.Commands.VerifyEmail;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using FinVault.Shared.Contracts.Responses;

[TestFixture]
public class VerifyEmailCommandHandlerTests
{
    private Mock<IUserRepository> _userRepositoryMock = null!;
    private Mock<IOTPRepository> _otpRepositoryMock = null!;
    private Mock<IOTPHasher> _otpHasherMock = null!;
    private VerifyEmailCommandHandler _handler = null!;

    [SetUp]
    public void SetUp()
    {
        _userRepositoryMock = new Mock<IUserRepository>();
        _otpRepositoryMock = new Mock<IOTPRepository>();
        _otpHasherMock = new Mock<IOTPHasher>();
        _handler = new VerifyEmailCommandHandler(
            _userRepositoryMock.Object,
            _otpRepositoryMock.Object,
            _otpHasherMock.Object);
    }

    [Test]
    public async Task Handle_WithValidOTP_ShouldVerifyEmailSuccessfully()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var otpCode = "123456";
        var otpHash = "hashedotp";
        var otp = OTPCode.Create(userId, otpHash, "EmailVerification");
        
        _otpRepositoryMock
            .Setup(r => r.GetLatestValidAsync(userId, "EmailVerification", It.IsAny<CancellationToken>()))
            .ReturnsAsync(otp);
        
        _otpHasherMock
            .Setup(h => h.Verify(otpCode, otpHash))
            .Returns(true);
        
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        _userRepositoryMock
            .Setup(r => r.GetByIdAsync(userId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);

        var command = new VerifyEmailCommand(userId, otpCode);

        // Act
        var result = await _handler.Handle(command, CancellationToken.None);

        // Assert
        result.Should().NotBeNull();
        result.Success.Should().BeTrue();
        result.Message.Should().Be("Success");
        user.IsEmailVerified.Should().BeTrue();
        otp.IsUsed.Should().BeTrue();
        
        _userRepositoryMock.Verify(r => r.Update(user), Times.Once);
        _userRepositoryMock.Verify(r => r.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
        _otpRepositoryMock.Verify(r => r.Update(otp), Times.Once);
    }

    [Test]
    public async Task Handle_WithExpiredOTP_ShouldReturnFailure()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var otpCode = "123456";
        
        _otpRepositoryMock
            .Setup(r => r.GetLatestValidAsync(userId, "EmailVerification", It.IsAny<CancellationToken>()))
            .ReturnsAsync((OTPCode?)null);

        var command = new VerifyEmailCommand(userId, otpCode);

        // Act
        var result = await _handler.Handle(command, CancellationToken.None);

        // Assert
        result.Should().NotBeNull();
        result.Success.Should().BeFalse();
        result.Message.Should().Be("OTP not found or expired.");
    }

    [Test]
    public async Task Handle_WithInvalidOTPCode_ShouldReturnFailure()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var otpCode = "wrongcode";
        var otpHash = "hashedotp";
        var otp = OTPCode.Create(userId, otpHash, "EmailVerification");
        
        _otpRepositoryMock
            .Setup(r => r.GetLatestValidAsync(userId, "EmailVerification", It.IsAny<CancellationToken>()))
            .ReturnsAsync(otp);
        
        _otpHasherMock
            .Setup(h => h.Verify(otpCode, otpHash))
            .Returns(false);

        var command = new VerifyEmailCommand(userId, otpCode);

        // Act
        var result = await _handler.Handle(command, CancellationToken.None);

        // Assert
        result.Should().NotBeNull();
        result.Success.Should().BeFalse();
        result.Message.Should().Be("Invalid OTP code.");
    }

    [Test]
    public async Task Handle_ShouldMarkOTPAsUsed()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var otpCode = "123456";
        var otpHash = "hashedotp";
        var otp = OTPCode.Create(userId, otpHash, "EmailVerification");
        
        _otpRepositoryMock
            .Setup(r => r.GetLatestValidAsync(userId, "EmailVerification", It.IsAny<CancellationToken>()))
            .ReturnsAsync(otp);
        
        _otpHasherMock
            .Setup(h => h.Verify(otpCode, otpHash))
            .Returns(true);
        
        var user = User.Create("test@example.com", "hash", "John", "Doe");
        _userRepositoryMock
            .Setup(r => r.GetByIdAsync(userId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);

        var command = new VerifyEmailCommand(userId, otpCode);

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        otp.IsUsed.Should().BeTrue();
        _otpRepositoryMock.Verify(r => r.Update(otp), Times.Once);
    }
}
