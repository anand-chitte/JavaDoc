# Investigation and Loss Mitigation System (ILMS)

## Overview
The **Investigation and Loss Mitigation System (ILMS)** is an insurance domain project designed to track, investigate, and mitigate financial losses due to fraud, discrepancies, or policy violations.

## Key Users
The main users of the system include:
- **Location State Owner**
- **Regional Manager**
- **Central Coordinator**
- **Vertical Head**
- **Admin Controller**
- **Agency & Agency Head**
- **Investigator**

## Tech Stack
- **Backend:** Java, Spring Boot
- **Database:** PostgreSQL
- **Caching:** Redis
- **Messaging Queue:** RabbitMQ

---

# Project Architecture

## 1. Authentication & Authorization
- We use **Keycloak** as the Authentication Server.
- The **API Gateway** acts as a Resource Server and serves as the single entry point to the ILMS system.
- When a request comes from the frontend, the API Gateway validates the access token by communicating with **Keycloak**.
- If the token is valid, the request is forwarded to the appropriate microservice.

## 2. Microservices Architecture
- The system follows a **microservices-based architecture**.
- **Eureka Server** is used for service discovery, ensuring dynamic service registration and load balancing.
- Each microservice handles a specific module, such as:
  - Case Management
  - User Management
  - Reporting, etc.

## 3. Database & Caching
- **PostgreSQL** is used as the primary relational database for structured data.
- **Redis** is used for caching frequently accessed data to improve performance.

## 4. Asynchronous Messaging
- **RabbitMQ** is used for event-driven communication between microservices, ensuring smooth data processing without direct dependencies.

---

# Modules/Services
The project consists of the following microservices:
1. **Health Investigation Service**
2. **Motor TP (Third Party) Service**
3. **Motor OD (Own Damage) Service**
4. **Workflow Service**
5. **Vendor Service**
6. **Migration Service**
7. **Report Service**
8. **Message Service**

---

# Database Tables
## Key Tables
- **User Table** – Stores user details and roles.
- **Case Table** – Tracks investigation cases.
- **Risk Assessment Table** – Stores risk factors for fraud detection.
- **Action Log Table** – Logs all actions taken on a case.
- **Reports Table** – Stores generated reports for analysis.
- **Audit Logs Table** – Maintains system audit history.

### Most Significant Table
- **Case Table** – Tracks investigation cases.

---

# REST APIs
We have developed approximately **350-400 REST APIs**, distributed across different services.

## Sample APIs
### Case Management APIs
- **POST /cases** - Create a new case
- **GET /cases/{id}** - Retrieve case details by ID
- **PUT /cases/{id}** - Update case information
- **DELETE /cases/{id}** - Delete a case
- **GET /cases** - List all cases

### User Management APIs
- **POST /users** - Create a new user
- **GET /users/{id}** - Retrieve user details by ID
- **PUT /users/{id}** - Update user information
- **DELETE /users/{id}** - Delete a user
- **GET /users** - List all users

### Risk Assessment APIs
- **POST /risk-assessment** - Create a risk assessment entry
- **GET /risk-assessment/{id}** - Retrieve risk assessment details
- **PUT /risk-assessment/{id}** - Update risk assessment entry
- **DELETE /risk-assessment/{id}** - Delete a risk assessment

### Report APIs
- **POST /reports** - Generate a new report
- **GET /reports/{id}** - Retrieve a report
- **GET /reports** - List all reports

---

## Conclusion
ILMS is a robust and scalable insurance investigation platform built with a microservices architecture, ensuring efficient fraud detection, case tracking, and loss mitigation.

