## Streams, Lambda Expressions, and Functional Interfaces

### 1. Streams:
- A **stream** is a sequence of elements that allows for functional-style operations on collections, such as filtering, mapping, and reducing. Streams can be processed sequentially or in parallel.
- Operations like `filter()`, `map()`, `reduce()`, `forEach()`, and `collect()` are commonly used to manipulate data within a stream.
```java
List<String> names = List.of("Alice", "Bob", "Charlie", "David");
names.stream()
     .filter(name -> name.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println);
```
### 2. Lambda Expressions:
- **Lambda expressions** provide a compact way to define anonymous functions (functions without a name).
- They allow you to pass behavior as parameters to methods or assign them to variables, typically used in conjunction with functional interfaces.
```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
int sum = numbers.stream()
                 .filter(n -> n % 2 == 0)
                 .mapToInt(Integer::intValue)
                 .sum();
System.out.println("Sum of even numbers: " + sum);

```

### 3. Functional Interfaces:
- A **functional interface** is an interface that has exactly one abstract method.
- They are intended to be used with lambda expressions, enabling a functional approach to programming.
- Common functional interfaces include:
  - `Predicate`: Represents a boolean-valued function of one argument.
  - `Function`: Represents a function that takes an argument and produces a result.
  - `Consumer`: Represents an operation that takes a single input and returns no result.
  - `Supplier`: Represents a supplier of results.
  - `UnaryOperator`: A function that takes a single argument and returns a result of the same type.
  - `BinaryOperator`: A function that takes two arguments of the same type and returns a result of the same type.

```java
@FunctionalInterface
interface MyFunction {
    int apply(int a, int b);
}

public class Example {
    public static void main(String[] args) {
        MyFunction add = (a, b) -> a + b;
        System.out.println(add.apply(5, 3)); // Output: 8
    }
}
```

---

These concepts enable cleaner, more readable, and more concise code, especially when working with collections or higher-order functions in Java.
