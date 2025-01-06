### @SpringBootApplication
Marks the main class of a Spring Boot application. Combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```
### @Component
Marks a class as a Spring component, enabling it to be managed by Spring's container.

```java

@Component
public class MyComponent {
    // component logic
}
```

### @Configuration
Indicates that the class contains Spring bean definitions and that it can be processed by the Spring container to create and manage beans.

```java

@Configuration
public class AppConfig {
    @Bean
    public SomeBean someBean() {
        return new SomeBean();
    }
}
```

### @Bean
Defines a bean to be managed by the Spring container.

```java

@Bean
public SomeService someService() {
    return new SomeService();
}
```


### @Lazy
Indicates that a bean should be lazily initialized.

```java

@Lazy
@Bean
public SomeBean someBean() {
    return new SomeBean();
}
```

### @Autowired
Injects a bean into the class.

```java

@Autowired
private UserService userService;
```
### @Value
It is used to inject values into fields, methods, or constructor parameters from property file.
```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    @Value("#{2 * T(Math).PI}")
    private double circleConstant;

    public void printAppDetails() {
        System.out.println("App Name: " + appName);
        System.out.println("App Version: " + appVersion);
        System.out.println("Circle Constant: " + circleConstant);
    }
}
```
#### application.properties:
```properties
app.name=MySpringApp
app.version=1.0
```


### @Primary
Indicates that a bean should be the default bean to autowire when multiple candidates exist.

```java

@Primary
@Bean
public SomeService defaultService() {
    return new DefaultService();
}
```
### @EnableConfigurationProperties
Enables support for @ConfigurationProperties beans.

```java

@EnableConfigurationProperties(SomeProperties.class)
@Configuration
public class Config {
    // configuration
}
```

### @SpringBootTest
Indicates that the class should run as a Spring Boot test.

```java

@SpringBootTest
public class ApplicationTests {
    @Test
    public void contextLoads() {
    }
}
```
### @RestController
Combines @Controller and @ResponseBody, used for RESTful APIs.

```java

@RestController
public class UserController {
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }
}
```
### @Controller
Indicates that a class is a Spring MVC controller.

```java

@Controller
public class WebController {
    @RequestMapping("/home")
    public String home() {
        return "home";
    }
}
```
### @RequestMapping
Maps HTTP requests to handler methods of MVC and REST controllers.

```java

@RequestMapping("/users")
public String getUsers() {
    return "users";
}
```
### @GetMapping
Maps HTTP GET requests to handler methods.

```java

@GetMapping("/users")
public List<User> getUsers() {
    return userService.getUsers();
}
```
### @PostMapping
Maps HTTP POST requests to handler methods.

```java

@PostMapping("/users")
public User createUser(@RequestBody User user) {
    return userService.createUser(user);
}
```

### @PutMapping
Maps HTTP PUT requests to handler methods.

```java

@PutMapping("/users/{id}")
public User updateUser(@PathVariable Long id, @RequestBody User user) {
    return userService.updateUser(id, user);
}
```
### @DeleteMapping
Maps HTTP DELETE requests to handler methods.

```java

@DeleteMapping("/users/{id}")
public void deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
}
```
### @PatchMapping
Maps HTTP PATCH requests to handler methods.

```java

@PatchMapping("/users/{id}")
public User partialUpdateUser(@PathVariable Long id, @RequestBody User user) {
    return userService.partialUpdateUser(id, user);
}
```
### @ResponseBody
Indicates that the return value of a method should be bound to the web response body.

```java

@ResponseBody
public String getMessage() {
    return "Hello, World!";
}
```
### @PathVariable
Binds a method parameter to a URI template variable.

```java

@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    return userService.getUser(id);
}
```

### @RequestParam
Binds request parameters to method parameters.

```java

@GetMapping("/users")
public List<User> getUsers(@RequestParam int page) {
    return userService.getUsers(page);
}
```

### @RequestBody
Binds the request body to a method parameter.

```java

@PostMapping("/users")
public User createUser(@RequestBody User user) {
    return userService.createUser(user);
}
```

### @ResponseStatus
Sets the status code for a method or exception.

```java

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {
    // exception details
}
```

### @CrossOrigin
Enables Cross-Origin Resource Sharing (CORS) support.

```java

@CrossOrigin(origins = "http://example.com")
public class MyController {
    // controller methods
}
```
### @Service
Marks a class as a service, a specialization of @Component.

```java

@Service
public class UserService {
    // service logic
}
```

### @Repository
Marks a class as a repository, a specialization of @Component.

```java

@Repository
public class UserRepository {
    // repository logic
}
```
### @Validated
It is a used to trigger validation for Spring beans, such as method parameters or class fields, to ensure they meet specified constraints.
```java
@Validated
public class UserController {
    
    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@Valid @RequestBody User user) {
        // User object will be validated based on annotations like @NotNull, @Size, etc.
        return ResponseEntity.ok("User added successfully");
    }
}

```
### @Valid
Validates the annotated field or method parameter.

```java

public void createUser(@Valid User user) {
    // validation logic
}
```
### @NotNull
Ensures the annotated element is not null.

```java

@NotNull
private String name;
```
### @NotEmpty
Ensures the annotated element is not empty.

```java

@NotEmpty
private List<String> tags;
```
### @NotBlank
Ensures the annotated element is not blank (not null or not empty).

```java

@NotBlank
private String username;
```
### @Size
Specifies the size constraints for the annotated field or method parameter.

```java

@Size(min = 2, max = 10)
private String name;
```

### @Min / @Max
Specifies the minimum/maximum value for numeric fields.

```java

@Min(18)
private int age;
```
### @Pattern
Specifies a regular expression that the annotated field must match.

```java

@Pattern(regexp = "[A-Za-z0-9]+")
private String code;
```
### @ControllerAdvice 
It is used to handle exceptions globally and provide centralized exception handling across all controllers
```java
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatusCode status, WebRequest request) {

		Map<String, String> validationErrors = new HashMap<>();
		List<ObjectError> validationErrorList = ex.getBindingResult().getAllErrors();

		validationErrorList.forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String validationMsg = error.getDefaultMessage();
			validationErrors.put(fieldName, validationMsg);
		});

		return super.handleMethodArgumentNotValid(ex, headers, status, request);
	}
}

```
### @ExceptionHandler
Handles exceptions thrown by methods in the controller.

```java

@ExceptionHandler(Exception.class)
public String handleException(Exception e) {
    return "Error: " + e.getMessage();
}
```
### @Transactional
Specifies that a method or class should be executed within a transaction context.

```java

@Transactional
public void processOrder(Order order) {
    orderRepository.save(order);
    inventoryService.updateStock(order);
}
```
### @Modifying
Indicates that a query method is modifying the data (insert, update, delete).

```java

@Modifying
@Query("UPDATE User u SET u.name = :name WHERE u.id = :id")
public int updateUserName(@Param("id") Long id, @Param("name") String name);
```
### @Query
Defines custom queries for Spring Data repositories. It can be used to define complex JPQL or native SQL queries.

```java

@Query("SELECT u FROM User u WHERE u.name = :name")
public User findByName(@Param("name") String name);
```

### @EnableMethodSecurity
Enables method-level security in a Spring application, allowing annotations like @PreAuthorize, @Secured, and @RolesAllowed.

```java

@EnableMethodSecurity
@Configuration
public class SecurityConfig {
    // security configuration
}
```





