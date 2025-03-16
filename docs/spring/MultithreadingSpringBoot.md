# Multithreading in Spring Boot

Multithreading in **Spring Boot** allows you to execute multiple tasks concurrently, improving performance and responsiveness. Spring Boot provides various ways to implement multithreading.

## 1. Using `@Async` (Asynchronous Methods)
Spring provides the `@Async` annotation to run methods asynchronously in a separate thread.

### Steps to Use `@Async`
1. **Enable Async Support**: Add `@EnableAsync` in your main class or a configuration class.
2. **Use `@Async` on Methods**: Mark the method you want to run asynchronously.

### Example
#### 1. Enable Async Support
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync // Enable async support
public class MultithreadingApplication {
    public static void main(String[] args) {
        SpringApplication.run(MultithreadingApplication.class, args);
    }
}
```

#### 2. Create an Async Service
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class AsyncService {
    private static final Logger logger = LoggerFactory.getLogger(AsyncService.class);

    @Async
    public void asyncMethod() {
        logger.info("Executing async method in thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(3000); // Simulate long-running task
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        logger.info("Async method completed");
    }
}
```

#### 3. Call the Async Method
```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/async")
public class AsyncController {
    private final AsyncService asyncService;

    public AsyncController(AsyncService asyncService) {
        this.asyncService = asyncService;
    }

    @GetMapping("/run")
    public String runAsyncTask() {
        asyncService.asyncMethod(); // This will execute asynchronously
        return "Async task started!";
    }
}
```

## 2. Using `Executor` for Custom Thread Pool
For more control over thread management, use `ExecutorService` with a thread pool.

### Example
#### 1. Create a Thread Pool Configuration
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
public class AsyncConfig {
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("AsyncThread-");
        executor.initialize();
        return executor;
    }
}
```

#### 2. Use Custom Executor in Async Service
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class CustomAsyncService {
    private static final Logger logger = LoggerFactory.getLogger(CustomAsyncService.class);

    @Async("taskExecutor") // Use the custom executor
    public void runTask() {
        logger.info("Executing task in thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        logger.info("Task completed");
    }
}
```

## 3. Using `CompletableFuture` for Asynchronous Processing
`CompletableFuture` allows better control over asynchronous computations.

### Example
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class FutureService {
    private static final Logger logger = LoggerFactory.getLogger(FutureService.class);

    @Async
    public CompletableFuture<String> processAsync() {
        logger.info("Executing async task in thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return CompletableFuture.completedFuture("Task Completed");
    }
}
```

## 4. Using `ExecutorService` Manually
For direct thread pool management, use Java’s `ExecutorService`.

### Example
```java
import org.springframework.stereotype.Service;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class ManualThreadService {
    private final ExecutorService executorService = Executors.newFixedThreadPool(5);

    public void executeTask() {
        executorService.submit(() -> {
            System.out.println("Task running in thread: " + Thread.currentThread().getName());
        });
    }
}
```

## Which One Should You Use?
| Approach | When to Use |
|----------|------------|
| `@Async` | Simple async tasks with minimal configuration. |
| `ExecutorService` | When you need control over the thread pool size and behavior. |
| `ThreadPoolTaskExecutor` | When you want Spring to manage the thread pool with better flexibility. |
| `CompletableFuture` | When dealing with complex asynchronous workflows with chaining and combining futures. |

## Conclusion
Spring Boot provides multiple ways to implement multithreading, from simple `@Async` annotation to full-fledged `ExecutorService` or `CompletableFuture`. Choose the best approach based on your use case. 🚀

