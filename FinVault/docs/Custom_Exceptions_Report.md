# 📋 FinVault Custom Exceptions Report

**Generated:** April 10, 2026  
**Project:** FinVault Microservices Platform  
**Architecture:** Clean Architecture / Domain-Driven Design with CQRS

---

## 📑 Table of Contents

1. [Exception Architecture Overview](#exception-architecture-overview)
2. [Base Exception Class](#base-exception-class)
3. [All Custom Exceptions](#all-custom-exceptions)
4. [Exception Usage by Service](#exception-usage-by-service)
5. [Exception Middleware Implementation](#exception-middleware-implementation)
6. [HTTP Status Code Mapping](#http-status-code-mapping)
7. [Code Quality Findings](#code-quality-findings)

---

## Exception Architecture Overview

FinVault uses a **hierarchical custom exception system** built on a shared base class. All exceptions are defined in the **FinVault.Shared** library and are consumed across all microservices.

### Architecture Pattern:
```
FinVault.Shared (Library)
    └── Exceptions/
        ├── FinVaultException (Base Class)
        └── 18 Derived Exceptions (Business-specific)

Each Microservice (API Layer)
    └── Middleware/
        └── ExceptionMiddleware.cs (HTTP Response Handler)
```

### Key Characteristics:
- **Location:** All exceptions are in `src\Shared\FinVault.Shared\Exceptions\`
- **Namespace:** `FinVault.Shared.Exceptions`
- **Inheritance:** All custom exceptions inherit from `FinVaultException`
- **HTTP Mapping:** Each exception maps to a specific HTTP status code via ExceptionMiddleware
- **Response Format:** All exceptions return standardized `ApiResponse<object>` JSON

---

## Base Exception Class

### FinVaultException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\FinVaultException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class FinVaultException : Exception
{
    public FinVaultException(string message) : base(message) { }
    public FinVaultException(string message, Exception inner) : base(message, inner) { }
}
```

**Purpose:**  
Serves as the base class for all FinVault business exceptions. Provides two constructors:
1. Simple message constructor
2. Message with inner exception constructor (for exception chaining)

**Usage:**  
Used as a catch-all fallback in ExceptionMiddleware to handle any business rule violations that don't match specific exception types.

---

## All Custom Exceptions

### 1. EntityNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\EntityNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class EntityNotFoundException : FinVaultException
{
    public EntityNotFoundException(string message) : base(message) { }
    public EntityNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **IdentityService.API** - ExceptionMiddleware.cs (line 33)

**Thrown When:**  
Generic entity not found scenarios (currently unused in application code, reserved for future use)

---

### 2. InvalidCredentialsException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\InvalidCredentialsException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class InvalidCredentialsException : FinVaultException
{
    public InvalidCredentialsException(string message) : base(message) { }
    public InvalidCredentialsException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `401 Unauthorized`

**Used By:**  
- **IdentityService.Application** - `LoginUserCommandHandler.cs` (line 23)
- **IdentityService.API** - ExceptionMiddleware.cs (line 41)

**Thrown When:**  
User provides incorrect email or password during login

**Actual Throw Location:**
```csharp
// File: src\Services\IdentityService\IdentityService.Application\Commands\LoginUser\LoginUserCommandHandler.cs
throw new InvalidCredentialsException("Invalid email or password.");
```

---

### 3. UserAlreadyExistsException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\UserAlreadyExistsException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class UserAlreadyExistsException : FinVaultException
{
    public UserAlreadyExistsException(string message) : base(message) { }
    public UserAlreadyExistsException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **IdentityService.Application** - `RegisterUserCommandHandler.cs` (line 25)
- **IdentityService.API** - ExceptionMiddleware.cs (line 49)

**Thrown When:**  
User tries to register with an email that already exists in the system

**Actual Throw Location:**
```csharp
// File: src\Services\IdentityService\IdentityService.Application\Commands\RegisterUser\RegisterUserCommandHandler.cs
throw new UserAlreadyExistsException("A user with this email already exists.");
```

---

### 4. InvalidTokenException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\InvalidTokenException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class InvalidTokenException : FinVaultException
{
    public InvalidTokenException(string message) : base(message) { }
    public InvalidTokenException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `401 Unauthorized`

**Used By:**  
- **PaymentService.API** - `TransactionsController.cs` (line 20)
- **PaymentService.API** - `PaymentsController.cs` (line 23)
- **PaymentService.API** - `ExternalBillsController.cs` (line 19)
- **CardService.API** - `CardsController.cs` (line 27)
- **IdentityService.API** - ExceptionMiddleware.cs (line 57)

**Thrown When:**  
JWT token is missing or doesn't contain the user ID claim

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.API\Controllers\TransactionsController.cs
private Guid GetUserId() =>
    Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? throw new InvalidTokenException("User ID not found in token."));
```

Same pattern in:
- `PaymentsController.cs` (line 23)
- `ExternalBillsController.cs` (line 19)
- `CardsController.cs` (line 27)

---

### 5. CardNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\CardNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class CardNotFoundException : FinVaultException
{
    public CardNotFoundException(string message) : base(message) { }
    public CardNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **CardService.Application** - `RevealCardHandler.cs` (line 23)
- **CardService.Application** - `GetCardByIdQueryHandler.cs` (line 19)
- **CardService.Application** - `VerifyCardCommandHandler.cs` (line 17)
- **CardService.Application** - `UpdateCardLimitCommandHandler.cs` (line 17)
- **CardService.Application** - `SetDefaultCardCommandHandler.cs` (line 17)
- **CardService.Application** - `RemoveCardCommandHandler.cs` (line 17)
- **CardService.API** - ExceptionMiddleware.cs (line 32)

**Thrown When:**  
Requested card ID doesn't exist or has been deleted

**Actual Throw Locations:**
```csharp
// File: src\Services\CardService\CardService.Application\Queries\RevealCard\RevealCardHandler.cs
throw new CardNotFoundException("The requested card could not be found.");
```

---

### 6. CardAlreadyVerifiedException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\CardAlreadyVerifiedException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class CardAlreadyVerifiedException : FinVaultException
{
    public CardAlreadyVerifiedException(string message) : base(message) { }
    public CardAlreadyVerifiedException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **CardService.Application** - `VerifyCardCommandHandler.cs` (line 20)
- **CardService.API** - ExceptionMiddleware.cs (line 40)

**Thrown When:**  
User tries to verify a card that is already verified

**Actual Throw Location:**
```csharp
// File: src\Services\CardService\CardService.Application\Commands\VerifyCard\VerifyCardCommandHandler.cs
if (card.IsVerified)
    throw new CardAlreadyVerifiedException("This card is already verified.");
```

---

### 7. CardDecryptionFailedException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\CardDecryptionFailedException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class CardDecryptionFailedException : FinVaultException
{
    public CardDecryptionFailedException(string message) : base(message) { }
    public CardDecryptionFailedException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `500 Internal Server Error`

**Used By:**  
- **CardService.Application** - `RevealCardHandler.cs` (line 46)
- **CardService.API** - ExceptionMiddleware.cs (line 48)

**Thrown When:**  
AES decryption of card details fails

**Actual Throw Location:**
```csharp
// File: src\Services\CardService\CardService.Application\Queries\RevealCard\RevealCardHandler.cs
catch (Exception ex)
{
    throw new CardDecryptionFailedException("Failed to decrypt card details. Please try again.", ex);
}
```

---

### 8. BillNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\BillNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class BillNotFoundException : FinVaultException
{
    public BillNotFoundException(string message) : base(message) { }
    public BillNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **BillingService.Application** - `GetBillByIdQueryHandler.cs` (line 19)
- **BillingService.Application** - `UpdateBillStatusCommandHandler.cs` (line 25)
- **BillingService.Application** - `SchedulePaymentCommandHandler.cs` (line 20)
- **BillingService.API** - ExceptionMiddleware.cs (line 28)

**Thrown When:**  
Requested bill ID doesn't exist or has been deleted

**Actual Throw Locations:**
```csharp
// File: src\Services\BillingService\BillingService.Application\Queries\GetBillById\GetBillByIdQueryHandler.cs
throw new BillNotFoundException("The requested bill could not be found.");
```

---

### 9. BillAlreadyExistsException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\BillAlreadyExistsException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class BillAlreadyExistsException : FinVaultException
{
    public BillAlreadyExistsException(string message) : base(message) { }
    public BillAlreadyExistsException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **BillingService.Application** - `GenerateBillCommandHandler.cs` (line 22)
- **BillingService.API** - ExceptionMiddleware.cs (line 44)

**Thrown When:**  
A bill already exists for the same user/card/billing period

---

### 10. InvalidBillStatusException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\InvalidBillStatusException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class InvalidBillStatusException : FinVaultException
{
    public InvalidBillStatusException(string message) : base(message) { }
    public InvalidBillStatusException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **PaymentService.Application** - `ReversePaymentCommandHandler.cs` (line 25)
- **BillingService.Application** - `UpdateBillStatusCommandHandler.cs` (lines 20, 38)
- **BillingService.Application** - `SchedulePaymentCommandHandler.cs` (line 23)
- **BillingService.Application** - `CancelScheduleCommandHandler.cs` (line 20)
- **BillingService.API** - ExceptionMiddleware.cs (line 52)

**Thrown When:**  
Invalid bill status transition (e.g., trying to reverse a non-completed payment)

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Commands\ReversePayment\ReversePaymentCommandHandler.cs
if (!payment.IsCompleted)
    throw new InvalidBillStatusException("Only completed payments can be reversed.");
```

---

### 11. PaymentNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\PaymentNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class PaymentNotFoundException : FinVaultException
{
    public PaymentNotFoundException(string message) : base(message) { }
    public PaymentNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **PaymentService.Application** - `GetPaymentByIdQueryHandler.cs` (line 20)
- **PaymentService.Application** - `ReversePaymentCommandHandler.cs` (line 23)
- **PaymentService.Application** - `CompletePaymentCommandHandler.cs` (line 23)
- **PaymentService.Application** - `CompleteExternalBillPaymentCommandHandler.cs` (line 26)
- **PaymentService.API** - ExceptionMiddleware.cs (line 20)

**Thrown When:**  
Requested payment ID doesn't exist

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Queries\GetPaymentById\GetPaymentByIdQueryHandler.cs
throw new PaymentNotFoundException("The requested payment could not be found.");
```

---

### 12. PaymentScheduleNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\PaymentScheduleNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class PaymentScheduleNotFoundException : FinVaultException
{
    public PaymentScheduleNotFoundException(string message) : base(message) { }
    public PaymentScheduleNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **BillingService.Application** - `CancelScheduleCommandHandler.cs` (line 17)
- **BillingService.API** - ExceptionMiddleware.cs (line 36)

**Thrown When:**  
Requested payment schedule ID doesn't exist

**Actual Throw Location:**
```csharp
// File: src\Services\BillingService\BillingService.Application\Commands\CancelSchedule\CancelScheduleCommandHandler.cs
throw new PaymentScheduleNotFoundException("The requested payment schedule could not be found.");
```

---

### 13. PaymentAlreadyCompletedException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\PaymentAlreadyCompletedException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class PaymentAlreadyCompletedException : FinVaultException
{
    public PaymentAlreadyCompletedException(string message) : base(message) { }
    public PaymentAlreadyCompletedException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **PaymentService.Application** - `CompletePaymentCommandHandler.cs` (line 25)
- **PaymentService.Application** - `CompleteExternalBillPaymentCommandHandler.cs` (line 29)
- **PaymentService.API** - ExceptionMiddleware.cs (line 27)

**Thrown When:**  
User tries to complete a payment that is already completed

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Commands\CompletePayment\CompletePaymentCommandHandler.cs
if (payment.IsCompleted)
    throw new PaymentAlreadyCompletedException("This payment is already completed.");
```

---

### 14. PaymentSagaNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\PaymentSagaNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class PaymentSagaNotFoundException : FinVaultException
{
    public PaymentSagaNotFoundException(string message) : base(message) { }
    public PaymentSagaNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **PaymentService.Application** - `CompletePaymentCommandHandler.cs` (line 34)
- **PaymentService.API** - ExceptionMiddleware.cs (line 48)

**Thrown When:**  
Payment saga state is not found in database (distributed transaction tracking)

**Actual Throw Location:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Commands\CompletePayment\CompletePaymentCommandHandler.cs
throw new PaymentSagaNotFoundException("Payment saga not found.");
```

---

### 15. InsufficientFundsException ⚠️ UNUSED

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\InsufficientFundsException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class InsufficientFundsException : FinVaultException
{
    public InsufficientFundsException(string message) : base(message) { }
    public InsufficientFundsException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** N/A (Not currently used)

**Used By:**  
**NONE** - This exception is defined but never thrown in the codebase

**Intended Use:**  
Likely reserved for future implementation of balance checking logic

---

### 16. TransactionFailedException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\TransactionFailedException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class TransactionFailedException : FinVaultException
{
    public TransactionFailedException(string message) : base(message) { }
    public TransactionFailedException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `500 Internal Server Error`

**Used By:**  
- **PaymentService.Application** - `CompletePaymentCommandHandler.cs` (line 27)
- **PaymentService.Application** - `CompleteExternalBillPaymentCommandHandler.cs` (line 32)
- **PaymentService.API** - ExceptionMiddleware.cs (line 41)

**Thrown When:**  
Payment transaction fails during processing

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Commands\CompletePayment\CompletePaymentCommandHandler.cs
if (payment.IsFailed)
    throw new TransactionFailedException("Cannot complete a failed payment.");
```

---

### 17. OTPVerificationFailedException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\OTPVerificationFailedException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class OTPVerificationFailedException : FinVaultException
{
    public OTPVerificationFailedException(string message) : base(message) { }
    public OTPVerificationFailedException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `400 Bad Request`

**Used By:**  
- **PaymentService.Application** - `CompleteExternalBillPaymentCommandHandler.cs` (lines 35, 40)
- **PaymentService.API** - ExceptionMiddleware.cs (line 34)

**Thrown When:**  
OTP code is invalid or expired during payment verification

**Actual Throw Locations:**
```csharp
// File: src\Services\PaymentService\PaymentService.Application\Commands\CompleteExternalBillPayment\CompleteExternalBillPaymentCommandHandler.cs
if (payment.IsOtpExpired)
    throw new OTPVerificationFailedException("OTP has expired. Please initiate payment again.");

if (!otpHasher.Verify(otpCode, payment.OtpHash!))
    throw new OTPVerificationFailedException("Invalid OTP code. Please try again.");
```

---

### 18. NotificationNotFoundException

**File Path:**  
`src\Shared\FinVault.Shared\Exceptions\NotificationNotFoundException.cs`

**Complete Code:**
```csharp
namespace FinVault.Shared.Exceptions;

public class NotificationNotFoundException : FinVaultException
{
    public NotificationNotFoundException(string message) : base(message) { }
    public NotificationNotFoundException(string message, Exception inner) : base(message, inner) { }
}
```

**HTTP Status:** `404 Not Found`

**Used By:**  
- **NotificationService.Application** - `MarkNotificationReadCommandHandler.cs` (line 17)
- **NotificationService.API** - ExceptionMiddleware.cs (line 28)

**Thrown When:**  
Requested notification ID doesn't exist

**Actual Throw Location:**
```csharp
// File: src\Services\NotificationService\NotificationService.Application\Commands\MarkNotificationRead\MarkNotificationReadCommandHandler.cs
throw new NotificationNotFoundException($"Notification with ID {request.NotificationId} was not found.");
```

---

## Exception Usage by Service

### IdentityService
| Exception | Thrown In | Caught In |
|-----------|-----------|-----------|
| InvalidCredentialsException | LoginUserCommandHandler.cs | ExceptionMiddleware |
| UserAlreadyExistsException | RegisterUserCommandHandler.cs | ExceptionMiddleware |
| InvalidTokenException | - | ExceptionMiddleware |
| EntityNotFoundException | - | ExceptionMiddleware |

### CardService
| Exception | Thrown In | Caught In |
|-----------|-----------|-----------|
| CardNotFoundException | 6 handlers | ExceptionMiddleware |
| CardAlreadyVerifiedException | VerifyCardCommandHandler.cs | ExceptionMiddleware |
| CardDecryptionFailedException | RevealCardHandler.cs | ExceptionMiddleware |
| InvalidTokenException | CardsController.cs | ExceptionMiddleware |

### BillingService
| Exception | Thrown In | Caught In |
|-----------|-----------|-----------|
| BillNotFoundException | 3 handlers | ExceptionMiddleware |
| BillAlreadyExistsException | GenerateBillCommandHandler.cs | ExceptionMiddleware |
| InvalidBillStatusException | 3 handlers | ExceptionMiddleware |
| PaymentScheduleNotFoundException | CancelScheduleCommandHandler.cs | ExceptionMiddleware |

### PaymentService
| Exception | Thrown In | Caught In |
|-----------|-----------|-----------|
| PaymentNotFoundException | 4 handlers | ExceptionMiddleware |
| PaymentAlreadyCompletedException | 2 handlers | ExceptionMiddleware |
| TransactionFailedException | 2 handlers | ExceptionMiddleware |
| PaymentSagaNotFoundException | CompletePaymentCommandHandler.cs | ExceptionMiddleware |
| OTPVerificationFailedException | CompleteExternalBillPaymentCommandHandler.cs | ExceptionMiddleware |
| InvalidBillStatusException | ReversePaymentCommandHandler.cs | ExceptionMiddleware |
| InvalidTokenException | 3 controllers | ExceptionMiddleware |

### NotificationService
| Exception | Thrown In | Caught In |
|-----------|-----------|-----------|
| NotificationNotFoundException | MarkNotificationReadCommandHandler.cs | ExceptionMiddleware |

---

## Exception Middleware Implementation

Each microservice has its own **ExceptionMiddleware** that catches exceptions and converts them to standardized HTTP responses.

### File Locations:

1. `src\Services\IdentityService\IdentityService.API\Middleware\ExceptionMiddleware.cs`
2. `src\Services\CardService\CardService.API\Middleware\ExceptionMiddleware.cs`
3. `src\Services\BillingService\BillingService.API\Middleware\ExceptionMiddleware.cs`
4. `src\Services\PaymentService\PaymentService.API\Middleware\ExceptionMiddleware.cs`
5. `src\Services\NotificationService\NotificationService.API\Middleware\ExceptionMiddleware.cs`

### Middleware Pattern:

All ExceptionMiddleware implementations follow this structure:

```csharp
public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext ctx)
    {
        try 
        { 
            await next(ctx); 
        }
        catch (SpecificException ex)
        {
            // Log warning/error
            // Set HTTP status code
            // Return ApiResponse<object>.Fail(ex.Message)
        }
        catch (Exception ex)
        {
            // Fallback for unhandled exceptions (500)
        }
    }
}
```

### Registration in Program.cs:

Each service registers the middleware in its `Program.cs`:

```csharp
app.UseMiddleware<ExceptionMiddleware>();
```

---

## HTTP Status Code Mapping

| HTTP Status | Exceptions | Meaning |
|-------------|-----------|---------|
| **400 Bad Request** | UserAlreadyExistsException, CardAlreadyVerifiedException, BillAlreadyExistsException, InvalidBillStatusException, PaymentAlreadyCompletedException, OTPVerificationFailedException | Client error - request validation failed |
| **401 Unauthorized** | InvalidCredentialsException, InvalidTokenException | Authentication/authorization failed |
| **404 Not Found** | EntityNotFoundException, CardNotFoundException, BillNotFoundException, PaymentNotFoundException, PaymentScheduleNotFoundException, PaymentSagaNotFoundException, NotificationNotFoundException | Requested resource doesn't exist |
| **500 Internal Server Error** | CardDecryptionFailedException, TransactionFailedException, Exception (fallback) | Server-side error |

---

## Code Quality Findings

### ⚠️ Issues Identified:

1. **Unused Exception:**
   - `InsufficientFundsException` is defined but never used
   - **Recommendation:** Either implement the logic to use it or remove it

2. **Duplicated Middleware:**
   - ExceptionMiddleware is duplicated across 5 services (~80% identical code)
   - **Recommendation:** Extract to `FinVault.Shared` as a reusable middleware component

3. **Inconsistent Null Handling:**
   - UsersController uses unsafe `Guid.Parse` with `!` operator
   - Other controllers use proper null coalescing with `?? throw`
   - **Recommendation:** Standardize across all controllers

### ✅ Strengths:

1. **Centralized Exception Definitions:** All exceptions in shared library
2. **Consistent Naming Convention:** All follow `*Exception` suffix
3. **Proper Inheritance:** All inherit from FinVaultException base
4. **Standardized Response Format:** All return `ApiResponse<object>`
5. **Logging Integration:** All exceptions are logged before returning response
6. **Security:** No stack traces exposed to clients

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| **Total Custom Exceptions** | 19 |
| **Base Exceptions** | 1 (FinVaultException) |
| **Derived Exceptions** | 18 |
| **Actively Used Exceptions** | 17 |
| **Unused Exceptions** | 1 (InsufficientFundsException) |
| **Services Using Exceptions** | 5 |
| **ExceptionMiddleware Files** | 5 |
| **Total Throw Locations** | ~35 |

---

**End of Report**
