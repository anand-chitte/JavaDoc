# RestTemplate in Spring

**RestTemplate** is a synchronous HTTP client provided by Spring for communicating with RESTful web services. It allows your application to consume REST APIs easily and efficiently. Although it is widely used in Spring applications, it is considered a legacy tool as of Spring 5. **WebClient** (from the Spring WebFlux module) is recommended for new development due to its support for asynchronous and reactive programming.

## Key Features of RestTemplate
- **Simplifies interaction with HTTP servers**: Makes it easier to work with RESTful APIs.
- **Supports various HTTP methods**: Includes methods like `GET`, `POST`, `PUT`, `DELETE`, etc.
- **Automatic data conversion**: Converts Java objects to and from JSON or XML when interacting with RESTful services.
- **Customization**:
  - **Interceptors**: To modify requests and responses.
  - **Error Handlers**: To handle HTTP errors.
  - **Message Converters**: For customizing data formats (e.g., JSON, XML).

---

### 1. Add Dependency in `pom.xml`
```properties
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

```
### 2. Creating a RestTemplate Bean
You can configure RestTemplate as a Spring Bean so that it can be injected into any component.

```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### 3. Using RestTemplate in a Service
Here’s how you can use RestTemplate to make a GET request:
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyService {

    @Autowired
    private RestTemplate restTemplate;

    public String getDataFromApi() {
        String url = "https://api.example.com/data";
        return restTemplate.getForObject(url, String.class);
    }
}
```

### 4. Handling JSON Responses
If you're working with JSON data, you can use RestTemplate with HttpEntity and HttpHeaders to send and receive JSON.
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyService {

    @Autowired
    private RestTemplate restTemplate;

    public ResponseDTO sendDataToApi(Object data) {
        String url = "https://api.example.com/submit";  // URL of the API

        // Create HttpHeaders and set Content-Type
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Create HttpEntity with request body and headers
        HttpEntity<Object> entity = new HttpEntity<>(data, headers);

        // Make the POST request
        ResponseEntity<ResponseDTO> responseEntity = restTemplate.exchange(
                url,               // URL
                HttpMethod.POST,   // HTTP Method (POST)
                entity,            // HttpEntity containing request body and headers
                ResponseDTO.class  // Expected response type
        );

        // Return the response body (ResponseDTO)
        return responseEntity.getBody();
    }
}

```

### Recommended Alternative
With the introduction of **Spring WebFlux**, the **WebClient** is preferred for new applications as it supports asynchronous and reactive programming paradigms, offering better performance and scalability in reactive systems.
