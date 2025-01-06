# Functional Interface
- A Functional Interface in Java is an interface that contains exactly one abstract method. These interfaces can have multiple default or static methods, but they must have only one abstract method. 
- Functional interfaces are intended to be used primarily with lambda expressions or method references.

---
**Example:**
```java
@FunctionalInterface
interface Calculator {
    int add(int a, int b);  // Abstract method

    // Default method
    default int subtract(int a, int b) {
        return a - b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Using lambda expression
        Calculator calc = (a, b) -> a + b;
        System.out.println("Sum: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
    }
}
```

## Common functional interfaces:

### 1. Runnable
Runnable represents a task that can be executed asynchronously. It has a single abstract method run(), which does not accept any arguments and does not return a result.
```java
public class RunnableExample {
    public static void main(String[] args) {
        Runnable runnable = () -> System.out.println("Task is running");
        new Thread(runnable).start(); // Running the task in a separate thread
    }
}
```

### 2. Predicate<T>
Predicate is used for evaluating a condition. It accepts one argument of type T and returns a boolean value.
```java
import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<Integer> isEven = (number) -> number % 2 == 0;

        System.out.println(isEven.test(4)); // true
        System.out.println(isEven.test(5)); // false
    }
}
```

### 3. Function<T, R>
Function takes one argument of type T and returns a result of type R. It is commonly used for transforming data.
```java
import java.util.function.Function;

public class FunctionExample {
    public static void main(String[] args) {
        Function<String, Integer> stringLength = (str) -> str.length();
        System.out.println(stringLength.apply("Hello")); // 5
    }
}
```

### 4. Consumer<T>
Consumer represents an operation that accepts a single argument of type T and returns no result. It is typically used for performing operations such as printing or modifying a value.
```java
import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> printMessage = (message) -> System.out.println(message);
        printMessage.accept("Hello, World!"); // Output: Hello, World!
    }
}
```

### 5. Supplier<T>
Supplier represents a supplier of results. It does not take any arguments but returns a result of type T.
```java
import java.util.function.Supplier;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<Double> randomNumber = () -> Math.random();
        System.out.println(randomNumber.get()); // Generates a random number
    }
}
```