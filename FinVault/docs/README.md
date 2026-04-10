# 📚 FinVault Documentation Index

**Project:** FinVault Microservices Platform  
**Last Updated:** April 10, 2026

---

## 📖 Available Reports

### 1. Custom Exceptions Report
**File:** [Custom_Exceptions_Report.md](./Custom_Exceptions_Report.md)

**What It Covers:**
- Complete list of all 19 custom exception classes
- File locations for each exception
- Full source code for each exception
- Where each exception are thrown (with file paths and line numbers)
- Exception Middleware implementations across 5 services
- HTTP status code mapping
- Code quality findings and recommendations

**Read This If You Want To:**
- Understand error handling architecture
- Add new custom exceptions
- Debug exception-related issues
- Review exception usage patterns

---

### 2. Unit Testing Report
**File:** [Unit_Testing_Report.md](./Unit_Testing_Report.md)

**What It Covers:**
- Testing architecture and framework choices (NUnit)
- All 10 test projects created
- Detailed explanation of **what testing does** and **why**
- Complete test coverage breakdown (56 tests)
- Test infrastructure and mock helpers
- How to run tests with various options
- Test results summary
- Complete list of files modified/created
- Future testing recommendations

**Read This If You Want To:**
- Understand what unit tests validate
- Add new tests to the project
- Run tests and interpret results
- Learn about the testing strategy
- Extend test coverage

---

### 3. Manual Testing Guide
**File:** [Manual_Testing_Guide.md](./Manual_Testing_Guide.md)

**What It Covers:**
- Prerequisites and environment setup
- Architecture overview with port mappings
- How to start/stop services (Docker and local)
- **14 complete cURL examples** for testing all endpoints
- Postman GUI testing setup and instructions
- Swagger UI testing guide
- Test scenarios for all 5 services (50+ scenarios)
- Database verification queries
- RabbitMQ monitoring instructions
- Troubleshooting for 8 common errors
- Complete testing checklist

**Read This If You Want To:**
- Set up the development environment
- Test APIs manually using terminal or GUI
- Verify service functionality
- Debug integration issues
- Perform end-to-end testing

---

## 🚀 Quick Start

### For Developers:
1. Read [Manual Testing Guide](./Manual_Testing_Guide.md) → Environment Setup
2. Start services with Docker
3. Test endpoints using cURL or Swagger
4. Run unit tests to verify code quality

### For Testers:
1. Read [Manual Testing Guide](./Manual_Testing_Guide.md) → Test Scenarios by Service
2. Follow step-by-step test scenarios
3. Use Testing Checklist to track progress
4. Report any failures or issues

### For Architects/Reviewers:
1. Read [Custom Exceptions Report](./Custom_Exceptions_Report.md) → Error handling patterns
2. Read [Unit Testing Report](./Unit_Testing_Report.md) → Test coverage and quality
3. Review code quality findings and recommendations

---

## 📊 Project Statistics

| Metric | Count |
|--------|-------|
| **Microservices** | 5 (Identity, Card, Billing, Payment, Notification) |
| **API Endpoints** | 50+ |
| **Custom Exceptions** | 19 |
| **Unit Tests** | 56 (all passing) |
| **Test Projects** | 10 |
| **Domain Entities** | 18 |
| **Controllers** | 9 |
| **Databases** | 5 (SQL Server) |
| **Message Queues** | 1 (RabbitMQ) |

---

## 🔗 Useful Links

### Local URLs (When Services Running):

| Service | URL |
|---------|-----|
| API Gateway | http://localhost:5000 |
| IdentityService Swagger | http://localhost:5001/swagger |
| CardService Swagger | http://localhost:5002/swagger |
| BillingService Swagger | http://localhost:5003/swagger |
| PaymentService Swagger | http://localhost:5004/swagger |
| NotificationService Swagger | http://localhost:5005/swagger |
| RabbitMQ Management | http://localhost:15672 |

---

## 📝 Notes

- All reports are in **Markdown** format and can be viewed in any Markdown viewer
- For best viewing experience, use:
  - VS Code with Markdown preview
  - GitHub
  - Any modern browser with Markdown viewer extension
- cURL commands use Windows syntax (`^` for line continuation)
  - For Linux/Mac, replace `^` with `\`

---

**End of Documentation Index**
