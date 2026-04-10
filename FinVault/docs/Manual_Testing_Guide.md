# 🚀 FinVault Manual Testing Guide

**Generated:** April 10, 2026  
**Project:** FinVault Microservices Platform  
**Testing Methods:** Terminal (cURL), GUI (Postman/Swagger)

---

## 📑 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Architecture Overview](#architecture-overview)
3. [Service Ports & URLs](#service-ports--urls)
4. [Environment Setup](#environment-setup)
5. [Manual Testing - Terminal (cURL)](#manual-testing---terminal-curl)
6. [Manual Testing - GUI (Postman)](#manual-testing---gui-postman)
7. [Manual Testing - Swagger UI](#manual-testing---swagger-ui)
8. [Test Scenarios by Service](#test-scenarios-by-service)
9. [Database Verification](#database-verification)
10. [RabbitMQ Monitoring](#rabbitmq-monitoring)
11. [Common Errors & Troubleshooting](#common-errors--troubleshooting)
12. [Testing Checklist](#testing-checklist)

---

## Prerequisites

### Required Software:

| Tool | Version | Purpose | Download |
|------|---------|---------|----------|
| **Docker Desktop** | Latest | Run all services via docker-compose | https://www.docker.com/products/docker-desktop |
| **Postman** | Latest (optional) | GUI API testing | https://www.postman.com/downloads/ |
| **cURL** | Latest (built-in on Windows 10+) | Terminal API testing | Pre-installed on Windows |
| **.NET 9.0 SDK** | 9.0+ | Build and run services locally | https://dotnet.microsoft.com/download/dotnet/9.0 |
| **SQL Server Management Studio (SSMS)** | Latest (optional) | Database verification | https://learn.microsoft.com/en-us/sql/ssms/ |
| **Git Bash** (optional) | Latest | Better terminal for Windows | https://gitforwindows.org/ |

### System Requirements:

- **RAM:** Minimum 8GB (16GB recommended for all services)
- **Disk:** 10GB free space
- **CPU:** 4 cores minimum

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│         API Gateway (Port 5000)             │
│         http://localhost:5000               │
└──────────────┬──────────────────────────────┘
               │
        Routes to:
    ┌──────────┼──────────┬──────────┬─────────────┐
    │          │          │          │             │
    ▼          ▼          ▼          ▼             ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────────┐
│Identity│ │  Card  │ │Billing │ │Payment │ │Notification│
│:5001   │ │:5002   │ │:5003   │ │:5004   │ │:5005       │
└────────┘ └────────┘ └────────┘ └────────┘ └────────────┘
    │          │          │          │             │
    ▼          ▼          ▼          ▼             ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────────┐
│SQL :1433│ │SQL :1434│ │SQL :1435│ │SQL :1436│ │SQL :1437   │
└────────┘ └────────┘ └────────┘ └────────┘ └────────────┘
               │
               ▼
        ┌──────────────┐
        │  RabbitMQ    │
        │ :5672 / :15672│
        └──────────────┘
```

---

## Service Ports & URLs

### API Services:

| Service | Port | Gateway Route | Direct URL |
|---------|------|---------------|------------|
| **API Gateway** | 5000 | `http://localhost:5000` | N/A |
| **IdentityService** | 5001 | `/api/identity/*` | `http://localhost:5001` |
| **CardService** | 5002 | `/api/cards/*` | `http://localhost:5002` |
| **BillingService** | 5003 | `/api/billing/*` | `http://localhost:5003` |
| **PaymentService** | 5004 | `/api/payments/*`, `/api/transactions/*` | `http://localhost:5004` |
| **NotificationService** | 5005 | `/api/notifications/*` | `http://localhost:5005` |

### Databases:

| Database | Port | Service |
|----------|------|---------|
| **Identity DB** | 1433 | IdentityService |
| **Card DB** | 1434 | CardService |
| **Billing DB** | 1435 | BillingService |
| **Payment DB** | 1436 | PaymentService |
| **Notification DB** | 1437 | NotificationService |

### Infrastructure:

| Service | Port | URL |
|---------|------|-----|
| **RabbitMQ** | 5672 (AMQP) | `amqp://localhost:5672` |
| **RabbitMQ Management** | 15672 | `http://localhost:15672` (guest/guest) |
| **Redis** | 6379 | `localhost:6379` |

---

## Environment Setup

### Option 1: Run with Docker Compose (Recommended)

#### Step 1: Clone/Navigate to Project

```bash
cd C:\Dev\finvalult_complete_code\finVault
```

#### Step 2: Start All Services

```bash
# Build and start all services
docker-compose up -d

# Wait for services to be ready (1-2 minutes)
# Check if services are running
docker-compose ps
```

**Expected Output:**
```
NAME                          STATUS
finvault_gateway_1            Up
finvault_identity-service_1   Up
finvault_card-service_1       Up
finvault_billing-service_1    Up
finvault_payment-service_1    Up
finvault_notification-service_1 Up
finvault_rabbitmq_1           Up
finvault_redis_1              Up
finvault_identity-db_1        Up
finvault_card-db_1            Up
finvault_billing-db_1         Up
finvault_payment-db_1         Up
finvault_notification-db_1    Up
```

#### Step 3: Verify Services are Running

```bash
# Test Gateway
curl http://localhost:5000/api/identity/auth/health

# Test individual service
curl http://localhost:5001/api/identity/auth/health
```

#### Step 4: Stop Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (deletes all data)
docker-compose down -v
```

---

### Option 2: Run Services Locally (Development)

#### Step 1: Start Infrastructure

```bash
# Start only databases and RabbitMQ
docker-compose up -d identity-db card-db billing-db payment-db notification-db rabbitmq
```

#### Step 2: Run Individual Service

```bash
# Navigate to service directory
cd src\Services\IdentityService\IdentityService.API

# Run the service
dotnet run

# Service will start at http://localhost:5001
```

#### Step 3: Run All Services in Parallel

Open 5 separate terminal windows:

```bash
# Terminal 1 - IdentityService
cd src\Services\IdentityService\IdentityService.API
dotnet run

# Terminal 2 - CardService
cd src\Services\CardService\CardService.API
dotnet run

# Terminal 3 - BillingService
cd src\Services\BillingService\BillingService.API
dotnet run

# Terminal 4 - PaymentService
cd src\Services\PaymentService\PaymentService.API
dotnet run

# Terminal 5 - NotificationService
cd src\Services\NotificationService\NotificationService.API
dotnet run
```

---

## Manual Testing - Terminal (cURL)

### Test 1: User Registration

**Endpoint:** `POST /api/identity/auth/register`

```bash
# Via Gateway
curl -X POST http://localhost:5000/api/identity/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"Password123!\",\"firstName\":\"John\",\"lastName\":\"Doe\"}"

# Via Direct Service
curl -X POST http://localhost:5001/api/identity/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"Password123!\",\"firstName\":\"John\",\"lastName\":\"Doe\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "User registered successfully. Please verify your email.",
  "data": {
    "userId": "guid-here",
    "email": "test@example.com"
  },
  "errors": []
}
```

**Test Scenarios:**

| Test | cURL Command | Expected Result |
|------|--------------|-----------------|
| **Valid Registration** | Command above | 200 OK, success: true |
| **Duplicate Email** | Run same command again | 400 Bad Request, "A user with this email already exists." |
| **Missing Email** | `{"email":"","password":"Password123!"}` | 400 Bad Request, validation errors |
| **Weak Password** | `{"email":"test2@example.com","password":"123"}` | 400 Bad Request, validation errors |

---

### Test 2: User Login

**Endpoint:** `POST /api/identity/auth/login`

```bash
curl -X POST http://localhost:5000/api/identity/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"Password123!\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "guid-here",
    "userId": "guid-here",
    "email": "test@example.com"
  },
  "errors": []
}
```

**Save the token for later use:**

**Windows (PowerShell):**
```powershell
# Store token in variable
$TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Windows (CMD):**
```cmd
set TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Git Bash:**
```bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Test Scenarios:**

| Test | cURL Command | Expected Result |
|------|--------------|-----------------|
| **Valid Login** | Command above | 200 OK, returns JWT token |
| **Wrong Password** | Change password to "WrongPass123!" | 401 Unauthorized, "Invalid email or password." |
| **Non-existent User** | Use "nonexistent@example.com" | 401 Unauthorized, "Invalid email or password." |

---

### Test 3: Email Verification (OTP)

**Step 1: Request OTP**

```bash
curl -X POST http://localhost:5000/api/identity/auth/request-otp ^
  -H "Content-Type: application/json" ^
  -d "{\"userId\":\"YOUR_USER_ID\",\"purpose\":\"EmailVerification\"}"
```

**Step 2: Verify Email with OTP**

```bash
curl -X POST http://localhost:5000/api/identity/auth/verify-email ^
  -H "Content-Type: application/json" ^
  -d "{\"userId\":\"YOUR_USER_ID\",\"otpCode\":\"123456\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": "Email verified successfully.",
  "errors": []
}
```

**Test Scenarios:**

| Test | Expected Result |
|------|-----------------|
| **Valid OTP** | 200 OK, email verified |
| **Expired OTP** | 400 Bad Request, "OTP not found or expired." |
| **Wrong OTP Code** | 400 Bad Request, "Invalid OTP code." |
| **Already Verified** | 400 Bad Request, appropriate message |

---

### Test 4: Get User Profile (Requires Authentication)

**Endpoint:** `GET /api/identity/users/profile`

```bash
# Replace YOUR_TOKEN with actual JWT token
curl -X GET http://localhost:5000/api/identity/users/profile ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "userId": "guid-here",
    "email": "test@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "User",
    "isEmailVerified": true
  },
  "errors": []
}
```

**Test Scenarios:**

| Test | cURL Command | Expected Result |
|------|--------------|-----------------|
| **Valid Token** | Command above | 200 OK, user profile |
| **No Token** | Remove `-H "Authorization: ..."` line | 401 Unauthorized |
| **Invalid Token** | Use expired/modified token | 401 Unauthorized |
| **Malformed Token** | `-H "Authorization: Bearer invalid"` | 401 Unauthorized |

---

### Test 5: Add Credit Card (Requires Authentication)

**Endpoint:** `POST /api/cards`

```bash
curl -X POST http://localhost:5000/api/cards ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN" ^
  -d "{\"cardNumber\":\"4111111111111111\",\"cardholderName\":\"John Doe\",\"expiryMonth\":12,\"expiryYear\":2027,\"cvv\":\"123\",\"creditLimit\":5000,\"billingCycleStartDay\":15,\"issuerId\":\"00000000-0000-0000-0000-000000000001\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Card added successfully.",
  "data": {
    "cardId": "guid-here",
    "maskedNumber": "****1111",
    "cardholderName": "John Doe",
    "expiryMonth": 12,
    "expiryYear": 2027
  },
  "errors": []
}
```

**Test Scenarios:**

| Test | Expected Result |
|------|-----------------|
| **Valid Card** | 200 OK, card added |
| **No Authentication** | 401 Unauthorized |
| **Invalid Card Number** | 400 Bad Request, validation errors |
| **Past Expiry Date** | 400 Bad Request, card expired |

---

### Test 6: Get User's Cards

**Endpoint:** `GET /api/cards/my-cards`

```bash
curl -X GET http://localhost:5000/api/cards/my-cards ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": [
    {
      "cardId": "guid-here",
      "maskedNumber": "****1111",
      "cardholderName": "John Doe",
      "creditLimit": 5000,
      "outstandingBalance": 0,
      "availableCredit": 5000,
      "utilization": 0,
      "isDefault": false,
      "isVerified": false
    }
  ],
  "errors": []
}
```

---

### Test 7: Verify Card (Rs.1 Micro-Transaction)

**Endpoint:** `POST /api/cards/{cardId}/verify`

```bash
curl -X POST http://localhost:5000/api/cards/YOUR_CARD_ID/verify ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Card verified successfully.",
  "data": null,
  "errors": []
}
```

---

### Test 8: Generate Bill

**Endpoint:** `POST /api/billing/bills/generate`

```bash
curl -X POST http://localhost:5000/api/billing/bills/generate ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN" ^
  -d "{\"cardId\":\"YOUR_CARD_ID\",\"totalAmount\":5000,\"minimumDue\":500,\"billingMonth\":\"March 2026\",\"dueDate\":\"2026-04-30T00:00:00Z\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Bill generated successfully.",
  "data": {
    "billId": "guid-here",
    "totalAmount": 5000,
    "minimumDue": 500,
    "status": "Pending",
    "dueDate": "2026-04-30T00:00:00Z"
  },
  "errors": []
}
```

---

### Test 9: Get Bills

**Endpoint:** `GET /api/billing/bills/my-bills`

```bash
curl -X GET http://localhost:5000/api/billing/bills/my-bills ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": [
    {
      "billId": "guid-here",
      "totalAmount": 5000,
      "amountPaid": 0,
      "remainingBalance": 5000,
      "minimumDue": 500,
      "status": "Pending",
      "dueDate": "2026-04-30T00:00:00Z",
      "billingMonth": "March 2026"
    }
  ],
  "errors": []
}
```

---

### Test 10: Initiate Payment

**Endpoint:** `POST /api/payments/initiate`

```bash
curl -X POST http://localhost:5000/api/payments/initiate ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN" ^
  -d "{\"cardId\":\"YOUR_CARD_ID\",\"billId\":\"YOUR_BILL_ID\",\"amount\":5000,\"paymentType\":\"FullPayment\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Payment initiated successfully.",
  "data": {
    "paymentId": "guid-here",
    "amount": 5000,
    "status": "Initiated",
    "otpExpiresAt": "2026-04-10T12:35:00Z"
  },
  "errors": []
}
```

---

### Test 11: Complete Payment

**Endpoint:** `POST /api/payments/{paymentId}/complete`

```bash
curl -X POST http://localhost:5000/api/payments/YOUR_PAYMENT_ID/complete ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN" ^
  -d "{\"otpCode\":\"123456\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Payment completed successfully.",
  "data": {
    "paymentId": "guid-here",
    "status": "Completed",
    "amount": 5000
  },
  "errors": []
}
```

---

### Test 12: Get Transactions

**Endpoint:** `GET /api/transactions/my-transactions`

```bash
curl -X GET http://localhost:5000/api/transactions/my-transactions ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": [
    {
      "transactionId": "guid-here",
      "paymentId": "guid-here",
      "amount": 5000,
      "status": "Completed",
      "createdAt": "2026-04-10T12:30:00Z"
    }
  ],
  "errors": []
}
```

---

### Test 13: Get Notifications

**Endpoint:** `GET /api/notifications`

```bash
curl -X GET http://localhost:5000/api/notifications ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": [
    {
      "notificationId": "guid-here",
      "title": "Payment Completed",
      "message": "Your payment of Rs.5000 was completed successfully.",
      "isRead": false,
      "createdAt": "2026-04-10T12:30:00Z"
    }
  ],
  "errors": []
}
```

---

### Test 14: Mark Notification as Read

**Endpoint:** `PUT /api/notifications/{notificationId}/read`

```bash
curl -X PUT http://localhost:5000/api/notifications/YOUR_NOTIFICATION_ID/read ^
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Notification marked as read.",
  "data": null,
  "errors": []
}
```

---

## Manual Testing - GUI (Postman)

### Step 1: Import Postman Collection

1. Open Postman
2. Click **Import** button
3. Choose **File** and select the collection file (if available)
4. Or create requests manually as shown below

### Step 2: Create Environment Variables

1. Click **Environments** (left sidebar)
2. Click **Create Environment**
3. Add variables:

| Variable | Initial Value | Current Value |
|----------|---------------|---------------|
| `base_url` | `http://localhost:5000` | `http://localhost:5000` |
| `gateway_url` | `http://localhost:5000` | `http://localhost:5000` |
| `identity_url` | `http://localhost:5001` | `http://localhost:5001` |
| `card_url` | `http://localhost:5002` | `http://localhost:5002` |
| `billing_url` | `http://localhost:5003` | `http://localhost:5003` |
| `payment_url` | `http://localhost:5004` | `http://localhost:5004` |
| `notification_url` | `http://localhost:5005` | `http://localhost:5005` |
| `token` | (leave empty) | (will be set after login) |
| `user_id` | (leave empty) | (will be set after registration) |
| `card_id` | (leave empty) | (will be set after adding card) |
| `bill_id` | (leave empty) | (will be set after bill generation) |

4. Click **Save**

### Step 3: Create Requests

#### Registration Request

1. Click **New** → **HTTP Request**
2. Set method to **POST**
3. URL: `{{base_url}}/api/identity/auth/register`
4. Go to **Headers** tab:
   - Key: `Content-Type`, Value: `application/json`
5. Go to **Body** tab:
   - Select **raw** and **JSON**
   - Enter:
   ```json
   {
     "email": "test@example.com",
     "password": "Password123!",
     "firstName": "John",
     "lastName": "Doe"
   }
   ```
6. Click **Send**
7. Verify response shows `success: true`

#### Login Request

1. Create new **POST** request
2. URL: `{{base_url}}/api/identity/auth/login`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "email": "test@example.com",
     "password": "Password123!"
   }
   ```
5. Click **Send**
6. **Copy the token from response** and save to environment:
   ```javascript
   // In Tests tab
   var jsonData = pm.response.json();
   pm.environment.set("token", jsonData.data.token);
   pm.environment.set("user_id", jsonData.data.userId);
   ```

#### Authenticated Request (Example: Get Profile)

1. Create new **GET** request
2. URL: `{{base_url}}/api/identity/users/profile`
3. Go to **Authorization** tab:
   - Type: **Bearer Token**
   - Token: `{{token}}`
4. Click **Send**
5. Verify you receive user profile data

---

## Manual Testing - Swagger UI

### Access Swagger for Each Service:

| Service | Swagger URL |
|---------|-------------|
| **IdentityService** | http://localhost:5001/swagger |
| **CardService** | http://localhost:5002/swagger |
| **BillingService** | http://localhost:5003/swagger |
| **PaymentService** | http://localhost:5004/swagger |
| **NotificationService** | http://localhost:5005/swagger |

### Using Swagger UI:

#### Step 1: Open Swagger UI

Navigate to any service's swagger URL in your browser.

#### Step 2: Authenticate

1. Click the **Authorize** button (lock icon) at the top
2. Enter your JWT token: `Bearer YOUR_TOKEN_HERE`
3. Click **Authorize**
4. Click **Close**

#### Step 3: Test Endpoints

1. Click on an endpoint to expand it
2. Click **Try it out** button
3. Fill in required parameters
4. Click **Execute**
5. View response in the **Responses** section

#### Example: Register User via Swagger

1. Go to http://localhost:5001/swagger
2. Expand `POST /api/identity/auth/register`
3. Click **Try it out**
4. Enter request body:
   ```json
   {
     "email": "swagger@test.com",
     "password": "Password123!",
     "firstName": "Swagger",
     "lastName": "User"
   }
   ```
5. Click **Execute**
6. Verify response shows `success: true`

#### Example: Login via Swagger

1. Expand `POST /api/identity/auth/login`
2. Click **Try it out**
3. Enter credentials:
   ```json
   {
     "email": "swagger@test.com",
     "password": "Password123!"
   }
   ```
4. Click **Execute**
5. Copy the token from response
6. Use it to authenticate in Swagger (Step 2 above)

---

## Test Scenarios by Service

### IdentityService Tests

| # | Scenario | Endpoint | Method | Expected Result |
|---|----------|----------|--------|-----------------|
| 1 | Register new user | `/api/identity/auth/register` | POST | 200, success: true |
| 2 | Register duplicate email | `/api/identity/auth/register` | POST | 400, "A user with this email already exists." |
| 3 | Register with weak password | `/api/identity/auth/register` | POST | 400, validation errors |
| 4 | Login with valid credentials | `/api/identity/auth/login` | POST | 200, returns JWT token |
| 5 | Login with wrong password | `/api/identity/auth/login` | POST | 401, "Invalid email or password." |
| 6 | Request OTP | `/api/identity/auth/request-otp` | POST | 200, OTP sent |
| 7 | Verify email with OTP | `/api/identity/auth/verify-email` | POST | 200, email verified |
| 8 | Verify with expired OTP | `/api/identity/auth/verify-email` | POST | 400, "OTP not found or expired." |
| 9 | Get user profile | `/api/identity/users/profile` | GET | 200, user data |
| 10 | Get profile without token | `/api/identity/users/profile` | GET | 401, Unauthorized |
| 11 | Refresh token | `/api/identity/auth/refresh-token` | POST | 200, new token |
| 12 | Logout | `/api/identity/auth/logout` | POST | 200, logged out |
| 13 | Forgot password | `/api/identity/auth/forgot-password` | POST | 200, reset OTP sent |
| 14 | Reset password | `/api/identity/auth/reset-password` | POST | 200, password reset |

---

### CardService Tests

| # | Scenario | Endpoint | Method | Expected Result |
|---|----------|----------|--------|-----------------|
| 1 | Add card | `/api/cards` | POST | 200, card added |
| 2 | Add card without auth | `/api/cards` | POST | 401, Unauthorized |
| 3 | Get my cards | `/api/cards/my-cards` | GET | 200, list of cards |
| 4 | Get card by ID | `/api/cards/{cardId}` | GET | 200, card details |
| 5 | Get non-existent card | `/api/cards/{invalidId}` | GET | 404, "The requested card could not be found." |
| 6 | Verify card | `/api/cards/{cardId}/verify` | POST | 200, card verified |
| 7 | Verify already verified card | `/api/cards/{cardId}/verify` | POST | 400, "This card is already verified." |
| 8 | Reveal card details | `/api/cards/{cardId}/reveal` | GET | 200, full card details |
| 9 | Update card limit | `/api/cards/{cardId}/limit` | PUT | 200, limit updated |
| 10 | Set default card | `/api/cards/{cardId}/set-default` | PUT | 200, card set as default |
| 11 | Remove card | `/api/cards/{cardId}` | DELETE | 200, card removed |
| 12 | Get card utilization | `/api/cards/{cardId}/utilization` | GET | 200, utilization % |

---

### BillingService Tests

| # | Scenario | Endpoint | Method | Expected Result |
|---|----------|----------|--------|-----------------|
| 1 | Generate bill | `/api/billing/bills/generate` | POST | 200, bill created |
| 2 | Generate duplicate bill | `/api/billing/bills/generate` | POST | 400, "Bill already exists" |
| 3 | Get my bills | `/api/billing/bills/my-bills` | GET | 200, list of bills |
| 4 | Get bill by ID | `/api/billing/bills/{billId}` | GET | 200, bill details |
| 5 | Get non-existent bill | `/api/billing/bills/{invalidId}` | GET | 404, "The requested bill could not be found." |
| 6 | Update bill status | `/api/billing/bills/{billId}/status` | PUT | 200, status updated |
| 7 | Schedule payment | `/api/billing/schedules` | POST | 200, schedule created |
| 8 | Get my schedules | `/api/billing/schedules/my-schedules` | GET | 200, list of schedules |
| 9 | Cancel schedule | `/api/billing/schedules/{scheduleId}` | DELETE | 200, schedule cancelled |
| 10 | Cancel non-existent schedule | `/api/billing/schedules/{invalidId}` | DELETE | 404, "The requested payment schedule could not be found." |
| 11 | Get rewards | `/api/billing/rewards/my-rewards` | GET | 200, rewards data |
| 12 | Get spending summary | `/api/billing/bills/spending-summary` | GET | 200, spending data |

---

### PaymentService Tests

| # | Scenario | Endpoint | Method | Expected Result |
|---|----------|----------|--------|-----------------|
| 1 | Initiate payment | `/api/payments/initiate` | POST | 200, payment initiated |
| 2 | Initiate without auth | `/api/payments/initiate` | POST | 401, Unauthorized |
| 3 | Complete payment | `/api/payments/{paymentId}/complete` | POST | 200, payment completed |
| 4 | Complete with wrong OTP | `/api/payments/{paymentId}/complete` | POST | 400, "Invalid OTP code." |
| 5 | Complete with expired OTP | `/api/payments/{paymentId}/complete` | POST | 400, "OTP has expired." |
| 6 | Complete already completed payment | `/api/payments/{paymentId}/complete` | POST | 400, "This payment is already completed." |
| 7 | Reverse payment | `/api/payments/{paymentId}/reverse` | POST | 200, payment reversed |
| 8 | Reverse non-completed payment | `/api/payments/{paymentId}/reverse` | POST | 400, "Only completed payments can be reversed." |
| 9 | Get payment by ID | `/api/payments/{paymentId}` | GET | 200, payment details |
| 10 | Get non-existent payment | `/api/payments/{invalidId}` | GET | 404, "The requested payment could not be found." |
| 11 | Get my transactions | `/api/transactions/my-transactions` | GET | 200, transaction list |
| 12 | Get transaction by ID | `/api/transactions/{transactionId}` | GET | 200, transaction details |
| 13 | Initiate external bill payment | `/api/external-bills/pay` | POST | 200, payment initiated |
| 14 | Complete external bill payment | `/api/external-bills/{paymentId}/complete` | POST | 200, payment completed |

---

### NotificationService Tests

| # | Scenario | Endpoint | Method | Expected Result |
|---|----------|----------|--------|-----------------|
| 1 | Get my notifications | `/api/notifications` | GET | 200, notification list |
| 2 | Get unread notifications | `/api/notifications/unread` | GET | 200, unread notifications |
| 3 | Mark as read | `/api/notifications/{notificationId}/read` | PUT | 200, marked as read |
| 4 | Mark non-existent as read | `/api/notifications/{invalidId}/read` | PUT | 404, "Notification with ID {id} was not found." |
| 5 | Mark all as read | `/api/notifications/read-all` | PUT | 200, all marked as read |
| 6 | Delete notification | `/api/notifications/{notificationId}` | DELETE | 200, notification deleted |
| 7 | Get notification preferences | `/api/notifications/preferences` | GET | 200, preferences data |
| 8 | Update preferences | `/api/notifications/preferences` | PUT | 200, preferences updated |

---

## Database Verification

### Verify Data in SQL Server

#### Using SQL Server Management Studio (SSMS):

1. Open SSMS
2. Connect to database:
   - Server name: `localhost,1433` (or appropriate port)
   - Authentication: SQL Server Authentication
   - Login: `sa`
   - Password: `Your_password123` (from docker-compose.yml)

3. Query examples:

```sql
-- Check users
USE IdentityDb;
SELECT Id, Email, FirstName, LastName, IsEmailVerified, IsActive, CreatedAt 
FROM Users;

-- Check cards
USE CardDb;
SELECT Id, UserId, MaskedNumber, CardholderName, CreditLimit, OutstandingBalance, IsVerified 
FROM CreditCards;

-- Check bills
USE BillingDb;
SELECT Id, UserId, CardId, TotalAmount, AmountPaid, Status, DueDate 
FROM Bills;

-- Check payments
USE PaymentDb;
SELECT Id, UserId, CardId, BillId, Amount, Status, PaymentType, CreatedAt 
FROM Payments;

-- Check notifications
USE NotificationDb;
SELECT Id, UserId, Title, Message, IsRead, CreatedAt 
FROM Notifications;
```

#### Using Command Line (sqlcmd):

```bash
# Connect to Identity database
sqlcmd -S localhost,1433 -U sa -P "Your_password123" -d IdentityDb -Q "SELECT * FROM Users;"

# Connect to Payment database
sqlcmd -S localhost,1436 -U sa -P "Your_password123" -d PaymentDb -Q "SELECT * FROM Payments;"
```

---

## RabbitMQ Monitoring

### Access RabbitMQ Management UI:

1. Navigate to: http://localhost:15672
2. Login:
   - Username: `guest`
   - Password: `guest`

### What to Monitor:

#### Queues:

| Queue Name | Purpose | Expected Messages |
|------------|---------|-------------------|
| `notification-user-registered` | User registration events | 1 message per registration |
| `notification-payment-completed` | Payment completion events | 1 message per completed payment |
| `notification-payment-failed` | Payment failure events | 1 message per failed payment |
| `notification-bill-due-reminder` | Bill reminder events | Scheduled messages |
| `notification-reward-earned` | Reward events | 1 message per reward earned |
| `notification-card-expiry-soon` | Card expiry warnings | Scheduled messages |

#### Exchanges:

- Check that events are being published to correct exchanges
- Verify message routing to queues

#### Connections:

- Verify all services are connected to RabbitMQ
- Each service should have active connection

---

## Common Errors & Troubleshooting

### Error 1: Services Won't Start

**Symptoms:**
```
docker-compose up fails
```

**Solutions:**
```bash
# Check Docker is running
docker --version

# Check if ports are already in use
netstat -ano | findstr :5000
netstat -ano | findstr :1433

# Kill process using the port (replace PID)
taskkill /PID <PID> /F

# Rebuild containers
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

### Error 2: Connection Refused

**Symptoms:**
```
curl: (7) Failed to connect to localhost port 5000
```

**Solutions:**
```bash
# Check if service is running
docker-compose ps

# Check service logs
docker-compose logs identity-service
docker-compose logs gateway

# Restart specific service
docker-compose restart identity-service
```

---

### Error 3: Database Connection Failed

**Symptoms:**
```
A network-related or instance-specific error occurred
```

**Solutions:**
```bash
# Check database is running
docker-compose ps | findstr db

# Check database logs
docker-compose logs identity-db

# Restart database
docker-compose restart identity-db

# Wait 30 seconds for database to be ready
# Then restart application service
docker-compose restart identity-service
```

---

### Error 4: 401 Unauthorized

**Symptoms:**
```json
{
  "success": false,
  "message": "You are not authorized to perform this action."
}
```

**Solutions:**
- Verify JWT token is valid and not expired
- Check token is included in Authorization header: `Bearer YOUR_TOKEN`
- Token may have expired (default: 60 minutes)
- Login again to get fresh token

---

### Error 5: 400 Bad Request - Validation Errors

**Symptoms:**
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": ["Email is required", "Password must be at least 8 characters"]
}
```

**Solutions:**
- Check request body matches expected format
- Verify all required fields are present
- Check field types (strings, numbers, dates)
- Review API documentation for exact schema

---

### Error 6: RabbitMQ Connection Failed

**Symptoms:**
```
Failed to connect to RabbitMQ
```

**Solutions:**
```bash
# Check RabbitMQ is running
docker-compose ps rabbitmq

# Check RabbitMQ logs
docker-compose logs rabbitmq

# Restart RabbitMQ
docker-compose restart rabbitmq

# Verify connection string in appsettings.json
# Should be: amqp://guest:guest@rabbitmq:5672
```

---

### Error 7: CORS Error in Browser

**Symptoms:**
```
Access to fetch at 'http://localhost:5000' from origin 'http://localhost:4200' has been blocked by CORS policy
```

**Solutions:**
- CORS is already configured in gateway for `http://localhost:4200`
- If using different origin, update CORS configuration in `Program.cs`
- Rebuild and restart gateway

---

### Error 8: Token Expired

**Symptoms:**
```json
{
  "success": false,
  "message": "Token has expired."
}
```

**Solutions:**
```bash
# Refresh token
curl -X POST http://localhost:5000/api/identity/auth/refresh-token ^
  -H "Content-Type: application/json" ^
  -d "{\"refreshToken\":\"YOUR_REFRESH_TOKEN\"}"

# Or login again to get new token
```

---

## Testing Checklist

### Pre-Testing Setup

- [ ] Docker Desktop is running
- [ ] All services started (`docker-compose up -d`)
- [ ] All services healthy (`docker-compose ps`)
- [ ] RabbitMQ management accessible (http://localhost:15672)
- [ ] Swagger UI accessible for each service

### IdentityService Tests

- [ ] Register new user successfully
- [ ] Cannot register duplicate email
- [ ] Login with valid credentials
- [ ] Cannot login with invalid credentials
- [ ] Request OTP for email verification
- [ ] Verify email with valid OTP
- [ ] Cannot verify with expired OTP
- [ ] Cannot verify with invalid OTP
- [ ] Get user profile with valid token
- [ ] Cannot get profile without token
- [ ] Refresh token successfully
- [ ] Logout successfully
- [ ] Forgot password sends OTP
- [ ] Reset password with valid OTP

### CardService Tests

- [ ] Add card with valid data
- [ ] Cannot add card without authentication
- [ ] Cannot add card with invalid card number
- [ ] Get list of user's cards
- [ ] Get specific card by ID
- [ ] Cannot get non-existent card
- [ ] Verify card successfully
- [ ] Cannot verify already verified card
- [ ] Reveal card details (shows full number)
- [ ] Update card credit limit
- [ ] Set card as default
- [ ] Remove card (soft delete)
- [ ] Calculate card utilization correctly

### BillingService Tests

- [ ] Generate bill for card
- [ ] Cannot generate duplicate bill
- [ ] Get list of user's bills
- [ ] Get specific bill by ID
- [ ] Cannot get non-existent bill
- [ ] Update bill status
- [ ] Schedule payment for bill
- [ ] Get list of payment schedules
- [ ] Cancel payment schedule
- [ ] Cannot cancel non-existent schedule
- [ ] Get rewards information
- [ ] Get spending summary

### PaymentService Tests

- [ ] Initiate payment for bill
- [ ] Cannot initiate payment without auth
- [ ] Complete payment with valid OTP
- [ ] Cannot complete with wrong OTP
- [ ] Cannot complete with expired OTP
- [ ] Cannot complete already completed payment
- [ ] Reverse completed payment
- [ ] Cannot reverse non-completed payment
- [ ] Get payment details by ID
- [ ] Cannot get non-existent payment
- [ ] Get list of transactions
- [ ] Get specific transaction details
- [ ] Initiate external bill payment
- [ ] Complete external bill payment

### NotificationService Tests

- [ ] Get list of notifications
- [ ] Get unread notifications
- [ ] Mark notification as read
- [ ] Cannot mark non-existent notification
- [ ] Mark all notifications as read
- [ ] Delete notification
- [ ] Get notification preferences
- [ ] Update notification preferences

### Integration Tests

- [ ] Registration triggers notification event
- [ ] Payment completion triggers notification
- [ ] Payment updates bill amount paid
- [ ] Card verification updates card status
- [ ] All services communicating via gateway
- [ ] RabbitMQ receiving and routing messages

### Database Verification

- [ ] Users table has registered users
- [ ] CreditCards table has added cards
- [ ] Bills table has generated bills
- [ ] Payments table has payment records
- [ ] Notifications table has notifications
- [ ] Soft deleted records have IsDeleted = true
- [ ] Timestamps are accurate

### Error Handling Tests

- [ ] Invalid JSON returns 400
- [ ] Missing required fields returns 400
- [ ] Invalid token returns 401
- [ ] Non-existent resource returns 404
- [ ] Server errors return 500 with generic message
- [ ] Validation errors include detailed messages
- [ ] No stack traces exposed to client

### Performance Tests (Optional)

- [ ] Login responds in < 500ms
- [ ] Get cards responds in < 500ms
- [ ] Initiate payment responds in < 1000ms
- [ ] All endpoints respond in < 2000ms

---

## Quick Reference Commands

### Start Everything

```bash
cd C:\Dev\finvalult_complete_code\finVault
docker-compose up -d
```

### Check Service Status

```bash
docker-compose ps
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f identity-service
docker-compose logs -f payment-service
```

### Stop Everything

```bash
docker-compose down
```

### Clean Restart (Deletes All Data)

```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Run Tests

```bash
dotnet test FinVault.slnx
```

### Build Project

```bash
dotnet build FinVault.slnx
```

---

## Support & Resources

### Documentation Files:

- **Custom Exceptions Report:** `docs\Custom_Exceptions_Report.md`
- **Unit Testing Report:** `docs\Unit_Testing_Report.md`
- **API Flow Diagram:** `backend_api_flow.txt`

### Useful URLs:

| Resource | URL |
|----------|-----|
| Gateway | http://localhost:5000 |
| Identity Swagger | http://localhost:5001/swagger |
| Card Swagger | http://localhost:5002/swagger |
| Billing Swagger | http://localhost:5003/swagger |
| Payment Swagger | http://localhost:5004/swagger |
| Notification Swagger | http://localhost:5005/swagger |
| RabbitMQ Management | http://localhost:15672 |

### Configuration Files:

- **Docker Compose:** `docker-compose.yml`
- **Gateway Routes:** `src\Services\Gateway\FinVault.Gateway\ocelot.json`
- **Service Config:** `src\Services\{ServiceName}\{ServiceName}.API\appsettings.json`

---

## End of Manual Testing Guide

**Happy Testing! 🎉**
