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