# Microservice Design Patterns

## 1. Service per Business Capability
- Each microservice is designed around a specific business capability.
- Helps in achieving better modularity and scalability.
- Enables independent development and deployment.
- Example: In an e-commerce application, different microservices can be:
  - **Order Service** (manages orders)
  - **Payment Service** (handles payments)
  - **Inventory Service** (tracks stock levels)

## 2. Strangler Pattern
- Used for gradually migrating from a monolithic architecture to microservices.
- The existing system is "strangled" piece by piece by replacing specific functionalities with microservices.
- A reverse proxy or API Gateway routes traffic between old and new systems.
- **Steps:**
  1. Identify a feature/module in the monolith to extract.
  2. Develop a microservice for the feature.
  3. Redirect traffic from the monolith to the new microservice.
  4. Repeat the process until the monolith is fully replaced.

## 3. Database per Service
- Each microservice has its own database to maintain data autonomy.
- Eliminates the need for a shared database, preventing tight coupling.
- Ensures better scalability, performance, and security.
- **Challenges:**
  - Data consistency across services (solved using Event Sourcing or Saga Pattern).
  - Complexity in managing multiple databases.
- Example:
  - **User Service** → User Database
  - **Order Service** → Order Database
  - **Payment Service** → Payment Database

## 4. Resilience Patterns
Microservices should be resilient to failures. Some key patterns include:

### a. Circuit Breaker Pattern
- Prevents repeated calls to a failing service.
- If a service fails, the circuit breaker "opens" to stop further calls until recovery.

### b. Bulkhead Pattern
- Isolates failures within a service to prevent cascading failures.
- Different parts of a system are partitioned to handle failures independently.

### c. Retry Pattern
- Retries a failed operation with exponential backoff.
- Useful for handling temporary network issues or service unavailability.

### d. Fail-Fast Pattern
- If a request is likely to fail, it fails immediately instead of consuming resources.

### e. Timeouts and Rate Limiting
- Timeouts prevent long waits for unresponsive services.
- Rate limiting prevents excessive API calls from overloading services.

## 5. API Gateway Pattern
- A single entry point for all client requests to microservices.
- Handles authentication, logging, request routing, and response aggregation.
- Reduces direct client-to-microservice communication, improving security and performance.
- Example: Netflix Zuul, Spring Cloud Gateway, Kong API Gateway.

## 6. Gateway Routing Pattern
- The API Gateway routes requests to the appropriate microservices based on predefined rules.
- Enables better load balancing and service discovery.
- Example: A request to `/users` is routed to the User Service, while `/orders` is routed to the Order Service.

## 7. Gateway Offloading Pattern
- The API Gateway offloads common tasks from microservices such as:
  - Authentication and authorization.
  - Request and response transformation.
  - Rate limiting and caching.
  - Logging and monitoring.
- Helps microservices remain lightweight and focused on business logic.

## 8. Backend for Frontend (BFF) Pattern
- A specialized API Gateway tailored for different frontend clients (web, mobile, desktop, etc.).
- Improves user experience by optimizing API responses based on client needs.
- Example: A mobile BFF service returns lightweight JSON responses, while a web BFF service provides richer data.

---
This document provides an overview of key microservice design patterns that help in building scalable and resilient applications.
