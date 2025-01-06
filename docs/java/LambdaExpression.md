# Lambda
A Lambda Expression in Java is a way to provide clear and concise syntax for writing anonymous methods (implementations of functional interfaces). It allows you to treat functionality as a method argument, or to create a short-hand for writing instances of classes with a single method (functional interfaces).

The basic syntax of a lambda expression is:

```java
(parameters) -> expression
```
Here are some examples:

### 1. No parameters:

```java
() -> System.out.println("Hello, World!");
```
### 2. One parameter:
```java
(x) -> System.out.println(x);
```
### 3. Multiple parameters:

```java
(x, y) -> System.out.println(x + y);
```
### 4. With return type:

```java
(a, b) -> a + b;
```
## Common uses of Lambda Expressions:
- `With Functional Interfaces`: A lambda expression implements the abstract method of a functional interface.

**Example:**

```java
interface MathOperation {
    int operate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        MathOperation addition = (a, b) -> a + b;
        MathOperation subtraction = (a, b) -> a - b;
        
        System.out.println("Addition: " + addition.operate(10, 5));
        System.out.println("Subtraction: " + subtraction.operate(10, 5));
    }
}
```
- `In Collections`: Lambda expressions are widely used in the Streams API and with forEach loops.

**Example with forEach:**

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(name -> System.out.println(name));
```
- `Sorting`: Lambda expressions can be used to pass custom comparators.

**Example:**

```java
List<Integer> numbers = Arrays.asList(5, 3, 8, 1);
numbers.sort((a, b) -> a - b);
System.out.println(numbers);
```
## Benefits of Lambda Expressions:
- `Conciseness`: Reduces boilerplate    code.
- `Readability`: Makes code more readable and easier to understand.
- `Enables Functional Programming`: Lambda expressions help with writing functional-style code, especially when working with streams.