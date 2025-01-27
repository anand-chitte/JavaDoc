# Resiliency
Resilience4j is a lightweight and easy-to-use library for building resilient systems in Java. It provides fault tolerance and resilience patterns like circuit breaker, rate limiter, bulkhead, retry, and time limiter.

## Steps to Integrate Resilience4j with Spring Boot
### 1. Add Dependencies
Include the required Resilience4j modules in your pom.xml if you're using Maven:

```xml

<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
    <version>2.0.2</version> <!-- Replace with the latest version -->
</dependency>
```
### 2. Enable Resilience4j
Resilience4j automatically configures itself in a Spring Boot application. You just need to create configuration properties in your application.yml or application.properties file.

#### 2.1. Retry Configuration
To set up retry for a specific service method, you can configure it in application.properties like this:
```properties
resilience4j.retry.instances.myServiceRetry.maxAttempts=3
resilience4j.retry.instances.myServiceRetry.waitDuration=500ms
resilience4j.retry.instances.myServiceRetry.enableExponentialBackoff=true
resilience4j.retry.instances.myServiceRetry.randomize=true
```

- `maxAttempts:` The maximum number of retry attempts (e.g., 3).
- `waitDuration:` The wait time between retry attempts (e.g., 500ms).
- `enableExponentialBackoff:` Enable exponential backoff between retries.
- `randomize:` Randomize the backoff duration to avoid retries happening at the same time.

#### 2.2. Circuit Breaker Configuration
For a circuit breaker, configure it like so:
```properties
resilience4j.circuitbreaker.instances.myServiceCircuitBreaker.registerHealthIndicator=true
resilience4j.circuitbreaker.instances.myServiceCircuitBreaker.slidingWindowSize=10
resilience4j.circuitbreaker.instances.myServiceCircuitBreaker.failureRateThreshold=50
resilience4j.circuitbreaker.instances.myServiceCircuitBreaker.waitDurationInOpenState=10000ms
```

- `slidingWindowSize:` Defines the number of calls to consider for calculating failure rate.
- `failureRateThreshold:` Percentage of failures above which the circuit breaker will open (e.g., 50%).
- `waitDurationInOpenState:` Time the circuit breaker will stay open before attempting to close again.
#### 2.3. Rate Limiter Configuration
To limit the number of calls in a given time period, use:

```properties
resilience4j.ratelimiter.instances.myServiceRateLimiter.limitForPeriod=5
resilience4j.ratelimiter.instances.myServiceRateLimiter.limitRefreshPeriod=1s
resilience4j.ratelimiter.instances.myServiceRateLimiter.timeoutDuration=500ms
```

- `limitForPeriod:` Maximum number of requests allowed in the specified period.
- `limitRefreshPeriod:` Time interval for refreshing the rate limit (e.g., 1 second).
- `timeoutDuration:` Timeout if the rate limit is exceeded.
### Example
```java
@Retry(name = "myServiceRetry")
@CircuitBreaker(name = "myServiceCircuitBreaker")
```
If 5 requests have already been made within 1 second, additional requests will be queued for up to 500 milliseconds.
If the queued request cannot proceed within the timeout period, it will fail (typically by throwing a RequestNotPermitted exception).