# Spring Boot Actuator

Spring Boot Actuator is a set of tools that helps you monitor and manage your Spring Boot application in production. It provides built-in endpoints that expose useful application information, such as health status, metrics, environment properties, and much more.

## Key Endpoints:

1. **Health Endpoint (`/actuator/health`)**  
   Displays the health status of the application (e.g., up, down, etc.).

2. **Metrics Endpoint (`/actuator/metrics`)**  
   Provides a variety of metrics such as memory usage, garbage collection, and request statistics.

3. **Info Endpoint (`/actuator/info`)**  
   Shows arbitrary application information (e.g., version, build, or custom info).

4. **Environment Endpoint (`/actuator/env`)**  
   Exposes environment properties such as system properties, environment variables, etc.

5. **Logs Endpoint (`/actuator/loggers`)**  
   Allows viewing and changing the logging levels of various application components.

## How to Enable Spring Boot Actuator:

### 1. Add Dependency:
Add the `spring-boot-starter-actuator` dependency to your `pom.xml` or `build.gradle` file.

**Maven:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
### 2. Enable Actuator Endpoints:
By default, only a few endpoints (like /actuator/health) are enabled. You can enable additional endpoints in the application.properties or application.yml file.

```properties
management.endpoints.web.exposure.include=health,metrics,info
```

### 3. Access Endpoints:
Once the application is running, you can access the available endpoints through HTTP. For example:

- **Health**: http://localhost:8080/actuator/health
- **Metrics**: http://localhost:8080/actuator/metrics
- **Info**: http://localhost:8080/actuator/info

# Prometheus with Spring Boot Actuator

Prometheus is an open-source monitoring and alerting toolkit widely used for gathering and storing time-series data, primarily focused on metrics. It collects and stores metrics in a time-series format, allowing you to query and analyze these metrics over time. Prometheus is often used for monitoring microservices and infrastructure.

### 1. Add Dependency:
Add the required dependencies for Spring Boot Actuator and the Prometheus metrics endpoint.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```
### 2. Enable Prometheus Endpoint
Configure Spring Boot to expose the Prometheus-compatible metrics by adding the following in your `application.properties` or `application.yml`:
```properties
management.endpoints.web.exposure.include=health,metrics,prometheus
management.endpoint.prometheus.enabled=true
```