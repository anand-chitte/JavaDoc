# SOLID Principles

The **SOLID** principles are a set of five design principles that help in creating maintainable, scalable, and robust object-oriented software. They were introduced by **Robert C. Martin (Uncle Bob)** and are widely used in software development.

## **SOLID Principles:**

### **1. Single Responsibility Principle (SRP)**
- A class should have only **one reason to change**.
- Each class should have **only one responsibility** (or function).
- **Example:**
  - ✅ A `UserService` class should only handle user-related logic, not email notifications.
  - ❌ A `User` class that manages user data **and** sends emails violates SRP.

### **2. Open/Closed Principle (OCP)**
- Software entities (classes, modules, functions) should be **open for extension but closed for modification**.
- Instead of modifying existing code, **extend it** using **inheritance or interfaces**.
- **Example:**
  - ✅ Use **strategy pattern** to add new behaviors without modifying existing code.
  - ❌ Directly modifying a class to add new functionality breaks OCP.

### **3. Liskov Substitution Principle (LSP)**
- A subclass should be replaceable with its superclass **without affecting the correctness** of the program.
- Subtypes must **honor** the contract of their base types.
- **Example:**
  - ✅ A `Rectangle` class should not have a `Square` subclass if it changes the behavior of width and height.
  - ❌ A subclass that removes or alters a method’s behavior breaks LSP.

### **4. Interface Segregation Principle (ISP)**
- A class should not be forced to **implement unnecessary methods** it does not use.
- Instead of one large interface, create **multiple smaller, specific interfaces**.
- **Example:**
  - ✅ Use `Readable` and `Writable` interfaces instead of one large `FileOperations` interface.
  - ❌ A `Bird` interface that requires `fly()` would break ISP for penguins.

### **5. Dependency Inversion Principle (DIP)**
- High-level modules should not depend on low-level modules; both should depend on **abstractions**.
- Avoid **tight coupling** by using **dependency injection**.
- **Example:**
  - ✅ Inject a `Database` interface instead of tightly coupling a class with `MySQLDatabase`.
  - ❌ A class directly instantiating dependencies (`new Database()`) violates DIP.

## **Why Use SOLID Principles?**
✔ Improves **code maintainability**  
✔ Reduces **coupling** between components  
✔ Makes **unit testing** easier  
✔ Enhances **scalability** and flexibility  

Would you like examples in Java? 🚀