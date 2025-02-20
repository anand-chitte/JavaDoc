# Design Patterns in Spring Boot

## 1️⃣ Data Transfer Object (DTO) Pattern

### **Purpose:**
The **DTO (Data Transfer Object)** pattern is used to transfer data between layers without exposing the internal entity structure.

### **Benefits:**
- **Encapsulation:** Hides entity details.
- **Performance:** Transfers only required fields.
- **Security:** Prevents unnecessary exposure of data.

### **Example:**
#### **DTO Class**
```java
public class UserDTO {
    private String name;
    private String email;

    // Constructors
    public UserDTO() {}

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

#### **Service Layer Converting Entity to DTO**
```java
public class UserMapper {
    public static UserDTO toDTO(User user) {
        return new UserDTO(user.getName(), user.getEmail());
    }
}
```

#### **Controller Returning DTO**
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

## 2️⃣ Singleton Pattern

### **Purpose:**
The **Singleton Pattern** ensures that a class has only one instance throughout the application's lifecycle.

### **Benefits:**
- **Resource Management:** Ensures a single instance of a service or component.
- **Thread Safety:** Prevents multiple conflicting instances.

### **Example in Spring Boot:**
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
---

## 3️⃣ Factory Pattern

### **Purpose:**
The **Factory Pattern** provides a way to create objects dynamically without specifying the exact class.

### **Benefits:**
- **Decouples object creation from implementation.**
- **Simplifies object instantiation logic.**
- **Supports different object types based on input.**

### **Example:**
#### **Factory Class**
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
#### **Usage in Service Layer**
```java
public class UserService {
    public UserDTO getUserDTO(User user, boolean detailed) {
        return UserDTOFactory.createUserDTO(user, detailed);
    }
}
```
---

## 4️⃣ Strategy Pattern

### **Purpose:**
The **Strategy Pattern** allows defining multiple algorithms and selecting one dynamically at runtime.

### **Benefits:**
- **Flexibility:** Switch strategies at runtime.
- **Open/Closed Principle:** Easily extendable with new strategies.
- **Encapsulation:** Encapsulates different behaviors into separate classes.

### **Example: Different Discount Strategies**
#### **Strategy Interface**
```java
public interface DiscountStrategy {
    double applyDiscount(double amount);
}
```
#### **Concrete Strategies**
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
#### **Context Class Using Strategy**
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
#### **Usage Example**
```java
DiscountService discountService = new DiscountService();
discountService.setDiscountStrategy(new NewYearDiscount());
double price = discountService.getFinalPrice(1000);
```
---

## **Conclusion**
| Design Pattern  | Purpose |
|---------------|----------|
| **DTO** | Transfers data between layers without exposing entity structure. |
| **Singleton** | Ensures a single instance of a class throughout the app. |
| **Factory** | Creates objects dynamically without specifying exact class. |
| **Strategy** | Allows selecting an algorithm dynamically at runtime. |

These patterns improve **maintainability, scalability, and flexibility** in your Spring Boot applications! 🚀

