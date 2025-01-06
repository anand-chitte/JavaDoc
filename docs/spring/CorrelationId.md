# Correlation ID

A **Correlation ID** is a unique identifier used to track and associate related requests or transactions across different services in a distributed system. It helps in tracing requests as they pass through various microservices, enabling better debugging, monitoring, and logging.

## How Correlation IDs Work:
1. **Request Initiation:** When a client makes a request, a Correlation ID is generated if one is not provided.
2. **Propagation:** The Correlation ID is passed along with the request headers as the request flows through multiple services.
3. **Logging and Monitoring:** Each service logs the request with the Correlation ID, making it easier to trace the entire request flow.

## Why Use Correlation IDs:
- **Debugging:** Identify issues by tracing requests across services.
- **Performance Monitoring:** Measure the time taken by each service in a request's lifecycle.
- **Error Tracking:** Pinpoint where failures occur.

## Implementation Tips:
- Generate a Correlation ID at the start of a request if it doesn't exist.
- Pass the ID through all internal service calls.
- Include the ID in logs for all services involved.
- Use UUIDs or similar globally unique identifiers for Correlation IDs.
