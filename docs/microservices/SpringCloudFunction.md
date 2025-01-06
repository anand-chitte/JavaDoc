# Spring Cloud Function

Spring Cloud Function enables the development of business logic as functions and decouples the development lifecycle from deployment. It allows you to write reusable and easily deployable functional code for various environments like AWS Lambda, Azure, or on-premise.

---

## Key Features
1. **Write Once, Run Anywhere**: Develop functions independently of the runtime.
2. **Adaptable**: Deploy on AWS Lambda, Azure Functions, Apache OpenWhisk, or your own server.
3. **Streamlined Testing**: Write and test your function locally.
4. **Efficient**: Focus on business logic without worrying about infrastructure.

---

## Getting Started

### 1. Add Dependencies
In your `pom.xml`, include:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-function-web</artifactId>
</dependency>
```

### 2. Create a Function
Write a function as a bean in a Spring Boot application.
**Example**: A function that converts strings to uppercase.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import java.util.function.Function;

@Component
public class FunctionExample {

    @Bean
    public Function<String, String> toUpperCase() {
        return input -> input.toUpperCase();
    }
}
```

## Deploying to the Cloud

### 1. AWS Lambda
Add the AWS adapter dependency:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-function-adapter-aws</artifactId>
</dependency>
```
Then package your app as a .jar and deploy to AWS Lambda.

### 2. Azure Functions
Add the Azure adapter dependency:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-function-adapter-azure</artifactId>
</dependency>
```