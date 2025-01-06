# Spring Cloud Gateway

Spring Cloud Gateway is a powerful, easy-to-use API Gateway built on top of the Spring Framework, providing a simple, effective way to route and filter requests to different microservices in a Spring Cloud architecture.

## Key Features

### Routing
- Allows routing requests to microservices based on URL paths, headers, etc.
- Enables dynamic route creation easily.

### Filters
- Supports **pre-** and **post-filters** for request manipulation (e.g., logging, authentication, adding headers) and response manipulation.

### Load Balancing
- Integrates with **Spring Cloud Load Balancer**, enabling easy load balancing across multiple services.

### Security
- Can integrate with **Spring Security** for authenticating and authorizing incoming requests.

### Monitoring
- Supports monitoring and tracing with **Spring Cloud Sleuth** and **Zipkin** for observability.

### Rate Limiting
- Built-in support for **rate-limiting** to avoid service overload.

### API Gateway
- Handles **cross-cutting concerns** like logging, metrics, and security centrally.


### 1. Add Dependencies
Add the following dependencies to your `pom.xml`:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-gateway</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```
Ensure the Spring Cloud version is compatible with your Spring Boot version. You may need to include the Spring Cloud BOM for dependency management.

### 2. Create a Configuration Class
Define routes and filters programmatically in a Spring configuration class:
```java
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return routeLocatorBuilder.routes()
						.route(p -> p
								.path("/eazybank/accounts/**")
								.filters( f -> f.rewritePath("/eazybank/accounts/(?<segment>.*)","/${segment}")
										.addResponseHeader("X-Response-Time", LocalDateTime.now().toString())
										.circuitBreaker(config -> config.setName("accountsCircuitBreaker")
												.setFallbackUri("forward:/contactSupport")))
								.uri("lb://ACCOUNTS"))
					.route(p -> p
							.path("/eazybank/loans/**")
							.filters( f -> f.rewritePath("/eazybank/loans/(?<segment>.*)","/${segment}")
									.addResponseHeader("X-Response-Time", LocalDateTime.now().toString())
									.retry(retryConfig -> retryConfig.setRetries(3)
											.setMethods(HttpMethod.GET)
											.setBackoff(Duration.ofMillis(100),Duration.ofMillis(1000),2,true)))
							.uri("lb://LOANS"))
					.route(p -> p
							.path("/eazybank/cards/**")
							.filters( f -> f.rewritePath("/eazybank/cards/(?<segment>.*)","/${segment}")
									.addResponseHeader("X-Response-Time", LocalDateTime.now().toString())
									.requestRateLimiter(config -> config.setRateLimiter(redisRateLimiter())
											.setKeyResolver(userKeyResolver())))
							.uri("lb://CARDS")).build();
    }
}
```
