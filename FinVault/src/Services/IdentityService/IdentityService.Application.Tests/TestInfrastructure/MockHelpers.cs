namespace IdentityService.Application.Tests.TestInfrastructure;

using Moq;
using IdentityService.Domain.Interfaces;
using IdentityService.Domain.Interfaces.Repositories;
using IdentityService.Domain.Entities;

public static class MockHelpers
{
    public static Mock<IUserRepository> CreateUserRepositoryMock()
    {
        var mock = new Mock<IUserRepository>();
        mock.Setup(r => r.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);
        return mock;
    }

    public static Mock<IOTPRepository> CreateOTPRepositoryMock()
    {
        var mock = new Mock<IOTPRepository>();
        mock.Setup(r => r.SaveChangesAsync(It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);
        return mock;
    }

    public static Mock<IOTPHasher> CreateOTPHasherMock()
    {
        var mock = new Mock<IOTPHasher>();
        return mock;
    }

    public static OTPCode CreateValidOTP(
        Guid userId, 
        string codeHash, 
        string purpose = "EmailVerification")
    {
        return OTPCode.Create(
            userId,
            codeHash,
            purpose);
    }
}
