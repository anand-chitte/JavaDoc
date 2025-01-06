# WebClient 
WebClient is a non-blocking, reactive web client provided by Spring WebFlux, which is part of the Spring Framework. It is designed to perform HTTP requests and consume RESTful web services asynchronously. WebClient is a better alternative to RestTemplate when dealing with reactive applications.

Here’s an example of how to use WebClient in a Spring Boot application:

### 1. Add dependency in pom.xml
You need to add the Spring WebFlux dependency if it's not already in your project:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```
### 2. Configure WebClient Bean
You can define a WebClient bean in your configuration class:

```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}
```
### 3. Using WebClient to make a request
Here’s how you can use WebClient to make an HTTP GET request:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class WebClientService {

    @Autowired
    private WebClient.Builder webClientBuilder;

    public Mono<String> fetchData(String url) {
        return webClientBuilder.baseUrl(url)
                               .build()
                               .get()
                               .retrieve()
                               .bodyToMono(String.class);
    }
}
```
### 4. Example Controller
You can inject the WebClientService into your controller to use it:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class WebClientController {

    @Autowired
    private WebClientService webClientService;

    @GetMapping("/fetch-data")
    public Mono<String> fetchData() {
        return webClientService.fetchData("https://api.example.com/data");
    }
}
```
### 5. Handling Error Responses
WebClient has powerful error handling capabilities. You can customize error handling by using onStatus():

```java
public Mono<String> fetchDataWithErrorHandling(String url) {
    return webClientBuilder.baseUrl(url)
                           .build()
                           .get()
                           .retrieve()
                           .onStatus(status -> status.is4xxClientError(), response -> Mono.error(new RuntimeException("Client error")))
                           .onStatus(status -> status.is5xxServerError(), response -> Mono.error(new RuntimeException("Server error")))
                           .bodyToMono(String.class);
}
```
WebClient is highly useful for handling asynchronous, non-blocking HTTP requests, especially in reactive systems built using Spring WebFlux.

**Example of a Blocking WebClient Call**
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class WebClientBlockingService {

    @Autowired
    private WebClient.Builder webClientBuilder;

    public String fetchDataBlocking(String url) {
        return webClientBuilder.baseUrl(url)
                               .build()
                               .get()
                               .retrieve()
                               .bodyToMono(String.class)
                               .block(); // This makes it a blocking call
    }
}
```

Mono and Flux are two core classes in Project Reactor, the reactive library used in Spring WebFlux to represent asynchronous and non-blocking sequences of data.

### 1. Mono
Mono represents a sequence that contains at most one item or is empty. It is similar to a Future or Optional, but it is reactive and can be used to represent a single value or a potential error.

**Use cases for Mono:**
- Returning a single value or no value (empty).
- Performing operations that complete with one result.

**Example:**
```java
import reactor.core.publisher.Mono;

public class MonoExample {
    public static void main(String[] args) {
        Mono<String> mono = Mono.just("Hello, World!");
        
        // Subscribe to the Mono and print the value
        mono.subscribe(value -> System.out.println(value));  // Output: Hello, World!
    }
}
```

### 2. Flux
Flux represents a sequence of 0 to N items and can be thought of as a stream of data over time. It is used when you expect multiple values or an indefinite sequence, like reading multiple records from a database, consuming a stream of events, etc.

**Use cases for Flux:**
- Returning multiple items in a stream-like fashion.
- Handling collections or lists asynchronously.

**Example:**

```java
import reactor.core.publisher.Flux;

public class FluxExample {
    public static void main(String[] args) {
        Flux<String> flux = Flux.just("Apple", "Banana", "Cherry");

        // Subscribe to the Flux and print each value
        flux.subscribe(value -> System.out.println(value));
        // Output:
        // Apple
        // Banana
        // Cherry
    }
}
```