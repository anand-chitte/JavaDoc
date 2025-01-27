# Spring Cloud Sleuth

Spring Cloud Sleuth is a distributed tracing solution that helps in tracking the flow of requests across various microservices in a system. It adds trace and span IDs to logs and other metadata, enabling you to track how requests propagate across different services. This helps in debugging, monitoring, and identifying performance bottlenecks in microservices-based applications.

## Key Concepts:

1. **Trace**: A trace represents the entire journey of a request as it passes through different services.
2. **Span**: A span is a single unit of work within a trace, typically representing the processing time in a specific service.
3. **Trace ID**: A unique identifier for a trace that helps link all the related spans together.
4. **Span ID**: A unique identifier for a span. It allows tracking the individual work done in a service.

## Features:
- **Context Propagation**: Sleuth automatically propagates the trace and span information across different services using HTTP headers (or other protocols).
- **Integration with Logging**: It integrates with popular logging frameworks (like SLF4J) to automatically include trace and span IDs in the logs.
- **Integration with Monitoring Systems**: Sleuth can work with monitoring systems like Zipkin or OpenTelemetry to visualize traces.

## Setup in a Spring Boot Application:

### 1. Add Dependencies:
To get started, include the following dependencies in your `pom.xml` for Maven or `build.gradle` for Gradle.

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
```

### 2. Configuration:
Spring Cloud Sleuth is often configured automatically with Spring Boot. However, you can customize its behavior in the application.properties or application.yml.

```properties
spring.sleuth.sampler.probability=1.0  # 100% of requests are traced
spring.sleuth.integration.enabled=true  # Enable integration with messaging systems
```

### 3. Integration with Zipkin:
If you want to send traces to Zipkin, you can add the Zipkin dependency:

```properties
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-zipkin</artifactId>
</dependency>
```

**Configuration for Zipkin:**
```properties
spring.zipkin.base-url=http://localhost:9411/
spring.sleuth.sampler.probability=1.0
```