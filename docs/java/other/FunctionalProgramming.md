# Functional Programming in Java

Functional programming (FP) in Java revolves around writing concise, maintainable, and immutable code using functional constructs introduced in Java 8 and beyond. It focuses on declarative programming using functions as first-class citizens.

---

## Key Concepts of Functional Programming in Java

### 1. Pure Functions
- A function always produces the same output for the same input without side effects.
- Example:
  
```java
import java.util.function.BiFunction;

public class PureFunctionExample {
    public static void main(String[] args) {
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println(add.apply(2, 3)); // Always returns 5
    }
}
```

### 2. Immutability
- Data should not be changed once created; instead, new copies should be made.
- Example:
  
```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ImmutabilityExample {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3);
        List<Integer> newList = list.stream().map(n -> n * 2).collect(Collectors.toList());
        System.out.println(newList); // [2, 4, 6]
    }
}
```

### 3. First-Class and Higher-Order Functions
- Functions can be assigned to variables, passed as arguments, and returned from other functions.
- Example:
  
```java
import java.util.function.Function;

public class HigherOrderFunctionExample {
    public static void main(String[] args) {
        Function<Integer, Function<Integer, Integer>> multiplyBy = x -> y -> x * y;
        Function<Integer, Integer> doubleValue = multiplyBy.apply(2);
        System.out.println(doubleValue.apply(5)); // 10
    }
}
```

### 4. Function Composition
- Combining small functions to build more complex ones.
- Example:
  
```java
import java.util.function.Function;

public class FunctionCompositionExample {
    public static void main(String[] args) {
        Function<String, String> toUpperCase = String::toUpperCase;
        Function<String, String> exclaim = str -> str + "!";
        Function<String, String> shout = toUpperCase.andThen(exclaim);
        System.out.println(shout.apply("hello")); // "HELLO!"
    }
}
```

### 5. Recursion
- Instead of loops, FP relies on recursive functions.
- Example:
  
```java
public class RecursionExample {
    public static int factorial(int n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
    }
}
```

---

## Benefits of Functional Programming in Java
- ✅ **Improved Readability & Maintainability** – Code is more predictable and easier to debug.
- ✅ **Easier Testing & Debugging** – Pure functions with no side effects make unit testing straightforward.
- ✅ **Better Modularity & Reusability** – Functions can be composed and reused efficiently.
- ✅ **Concurrency & Parallelism** – Avoiding shared mutable state makes FP well-suited for concurrent applications.

---

## Where Functional Programming is Used in Java
- **Stream API** (Processing collections efficiently)
- **Lambda Expressions** (Simplified anonymous functions)
- **Method References** (More concise function calls)
- **Optional API** (Handling null values safely)
- **CompletableFuture** (Asynchronous programming)

---

Would you like a comparison with object-oriented programming (OOP) in Java or more advanced topics like functional reactive programming? 🚀

