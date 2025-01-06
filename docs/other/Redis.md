# Redis
- Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, and hyperloglogs. It is often used for caching and session storage due to its fast in-memory processing and support for data persistence.
- Redis can be used in Spring Boot applications to enhance performance by caching frequently accessed data, storing session data, and more.

---

## How to Use Redis in Spring Boot
### 1. Add Dependencies
You need to add the Spring Data Redis dependency and a Redis client, such as Lettuce or Jedis, to your pom.xml file.

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-cache</artifactId>
    </dependency>
</dependencies>
```
### 2. Configure Redis Connection
In your application.properties or application.yml, configure the Redis server details.

```properties
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.password=yourpassword  # Optional
```
### 3. Enable Caching
To enable caching in your Spring Boot application, you need to add the @EnableCaching annotation to your main class or configuration class.

```java
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
### 4. Create a Cache Manager
You can configure a RedisCacheManager bean to manage your cache.

java
Copy code
@Configuration
public class RedisConfig {
    
    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration cacheConfig = RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))  // Set the cache expiration time
            .disableCachingNullValues();  // Optionally disable caching of null values
        
        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(cacheConfig)
                .build();
    }
}

### 5. Using Cache Annotations
You can use the `@Cacheable`, `@CachePut`, and `@CacheEvict` annotations to interact with the cache.

- `@Cacheable`: Caches the result of the method.
- `@CachePut`: Updates the cache without interfering with the method execution.
- `@CacheEvict`: Evicts (removes) a specific cache entry.

**Example:**
```java
@Service
public class UserService {

    @Cacheable(value = "users", key = "#userId")
    public User getUserById(String userId) {
        // Simulate database call
        return new User(userId, "John Doe");
    }

    @CachePut(value = "users", key = "#user.id")
    public User updateUser(User user) {
        // Simulate update in database
        return user;
    }

    @CacheEvict(value = "users", key = "#userId")
    public void deleteUser(String userId) {
        // Simulate delete operation
    }
}
```