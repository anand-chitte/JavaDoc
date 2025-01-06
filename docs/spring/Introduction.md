# Spring Framework

The Spring Framework is a comprehensive framework for building Java-based applications. It provides a wide variety of features to help developers create scalable, maintainable, and secure applications. Below are the core features of the Spring Framework:

## Core Features:

### 1. Inversion of Control (IoC)
   - This is the heart of the Spring Framework. It involves the inversion of the flow of control in an application. Instead of creating dependencies manually, Spring manages the creation and injection of dependencies.

### 2. Dependency Injection (DI)
   - Dependency Injection is a technique used to implement IoC, where objects are provided with their dependencies by an external container, rather than the objects creating their dependencies.

```java
@Component
public class Car {
    private Engine engine;

    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }

    // Getters and setters
}
```