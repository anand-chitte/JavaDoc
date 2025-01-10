# Key Points About Interfaces in Java

An interface is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields or constructors.

## Key Features of Interfaces:

- **No Implementation**: Methods in an interface have no implementation, only method signatures.
- **Multiple Inheritance**: A class can implement multiple interfaces, overcoming the limitation of multiple inheritance in Java classes.
- **Abstract Methods**: All methods in an interface are abstract by default, except for default and static methods.
- **Default Methods**: Introduced in Java 8, interfaces can have default methods that provide default implementations.
- **Static Methods**: Interfaces can also have static methods.

### Limitations of Interfaces:
- Cannot contain instance fields.
- Cannot have constructors

### Example:

```java
interface MyInterface {
    int CONSTANT_VALUE = 100;  // Constant
    void abstractMethod();     // Abstract method

    // Default method
    default void defaultMethod() {
        System.out.println("Default implementation");
    }

    // Static method
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
}
```