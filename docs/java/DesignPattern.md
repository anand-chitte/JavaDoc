# Design Patterns in Spring Boot

## Creational Design Patterns
Creational patterns deal with object creation mechanisms, improving flexibility and reusability.

### **Singleton Pattern**
Ensures a single instance of a class throughout the application's lifecycle.

#### **Example in Spring Boot:**
```java
@Service // Spring creates a single instance of this class
public class UserService {
    public String getUserData() {
        return "User Data";
    }
}
```
Since Spring beans are singletons by default, `@Service`, `@Repository`, and `@Controller` automatically implement this pattern.

#### **Manually Implementing Singleton in Java:**
```java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### **Factory Pattern**
Provides a way to create objects dynamically without specifying the exact class.

#### **Example:**
##### **Factory Class**
```java
public class UserDTOFactory {
    public static UserDTO createUserDTO(User user, boolean detailed) {
        if (detailed) {
            return new DetailedUserDTO(user.getName(), user.getEmail(), user.getAddress());
        }
        return new UserDTO(user.getName(), user.getEmail());
    }
}
```
##### **Usage in Service Layer**
```java
public class UserService {
    public UserDTO getUserDTO(User user, boolean detailed) {
        return UserDTOFactory.createUserDTO(user, detailed);
    }
}
```

---
## Structural Design Patterns
Structural patterns focus on composing classes and objects to form larger structures while ensuring flexibility and efficiency.

### **Data Transfer Object (DTO) Pattern**
Used to transfer data between layers without exposing the internal entity structure.

#### **Example:**
##### **DTO Class**
```java
public class UserDTO {
    private String name;
    private String email;

    public UserDTO() {}

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```
##### **Service Layer Converting Entity to DTO**
```java
public class UserMapper {
    public static UserDTO toDTO(User user) {
        return new UserDTO(user.getName(), user.getEmail());
    }
}
```
##### **Controller Returning DTO**
```java
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getAllUsers().stream()
                .map(UserMapper::toDTO)
                .collect(Collectors.toList());
    }
}
```

---
## Behavioral Design Patterns
Behavioral patterns focus on communication between objects, defining how they interact and distribute responsibilities.

### **Strategy Pattern**
Allows defining multiple algorithms and selecting one dynamically at runtime.

#### **Example: Different Discount Strategies**
##### **Strategy Interface**
```java
public interface DiscountStrategy {
    double applyDiscount(double amount);
}
```
##### **Concrete Strategies**
```java
public class NewYearDiscount implements DiscountStrategy {
    public double applyDiscount(double amount) {
        return amount * 0.9; // 10% discount
    }
}

public class RegularDiscount implements DiscountStrategy {
    public double applyDiscount(double amount) {
        return amount * 0.95; // 5% discount
    }
}
```
##### **Context Class Using Strategy**
```java
public class DiscountService {
    private DiscountStrategy discountStrategy;

    public void setDiscountStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    public double getFinalPrice(double amount) {
        return discountStrategy.applyDiscount(amount);
    }
}
```
##### **Usage Example**
```java
DiscountService discountService = new DiscountService();
discountService.setDiscountStrategy(new NewYearDiscount());
double price = discountService.getFinalPrice(1000);
```

---
## **Conclusion**
| Design Pattern  | Type         | Purpose |
|---------------|-------------|----------|
| **Singleton** | Creational | Ensures a single instance of a class throughout the app. |
| **Factory** | Creational | Creates objects dynamically without specifying exact class. |
| **DTO** | Structural | Transfers data between layers without exposing entity structure. |
| **Strategy** | Behavioral | Allows selecting an algorithm dynamically at runtime. |

These patterns improve **maintainability, scalability, and flexibility** in your Spring Boot applications! 🚀

