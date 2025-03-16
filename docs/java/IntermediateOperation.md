# Intermediate Operations in Java Stream API

## Introduction
In Java Stream API, **Intermediate Operations** are used to transform or filter the data in a stream before the terminal operation is applied. These operations are **lazy**, meaning they do not execute immediately but wait until a terminal operation is invoked.

## Characteristics of Intermediate Operations
- **Lazy Evaluation:** The operations are not executed until a terminal operation is encountered.
- **Chainable:** Multiple intermediate operations can be linked together.
- **Do not modify the source:** They produce a new stream without altering the original data.

## Common Intermediate Operations

### 1. `filter(Predicate<T> predicate)`
Filters elements based on a given condition.

```java
List<String> names = List.of("Alice", "Bob", "Charlie", "David");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println); // Output: Alice
```

### 2. `map(Function<T, R> mapper)`
Transforms each element into another form.

```java
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);
// Output: ALICE, BOB, CHARLIE
```

### 3. `flatMap(Function<T, Stream<R>> mapper)`
Flattens a stream of collections into a single stream.

```java
List<List<Integer>> numbers = List.of(List.of(1, 2), List.of(3, 4));
numbers.stream()
       .flatMap(List::stream)
       .forEach(System.out::print);
// Output: 1234
```

### 4. `distinct()`
Removes duplicate elements from the stream.

```java
List<Integer> numbers = List.of(1, 2, 2, 3, 4, 4, 5);
numbers.stream()
       .distinct()
       .forEach(System.out::print);
// Output: 12345
```

### 5. `sorted()` and `sorted(Comparator<T> comparator)`
Sorts elements naturally or based on a comparator.

```java
List<String> names = List.of("Charlie", "Alice", "Bob");
names.stream()
     .sorted()
     .forEach(System.out::println);
// Output: Alice, Bob, Charlie
```

```java
List<Integer> numbers = List.of(5, 2, 8, 1);
numbers.stream()
       .sorted(Comparator.reverseOrder())
       .forEach(System.out::print);
// Output: 8521
```

### 6. `peek(Consumer<T> action)`
Allows performing an action without modifying the elements.

```java
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .peek(System.out::println)
     .map(String::toUpperCase)
     .forEach(System.out::println);
```

### 7. `limit(long maxSize)`
Limits the number of elements in the stream.

```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
numbers.stream()
       .limit(3)
       .forEach(System.out::print);
// Output: 123
```

### 8. `skip(long n)`
Skips the first `n` elements in the stream.

```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
numbers.stream()
       .skip(2)
       .forEach(System.out::print);
// Output: 345
```

## Conclusion
Intermediate operations in Java Stream API are powerful tools for transforming and filtering data in a functional way. They allow efficient and readable data processing by forming a pipeline of operations that are executed only when needed.

---
This document serves as a quick reference for understanding and using intermediate operations in Java Stream API effectively.

