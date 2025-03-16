# Terminal Operations in Java Stream API

## Introduction
Terminal operations in the Java Stream API produce a result or side-effect and terminate the stream pipeline. Once a terminal operation is invoked, the stream cannot be used further.

## Common Terminal Operations

### 1. `collect()`
Used to accumulate elements into a collection or other data structure.
```java
List<String> names = List.of("Alice", "Bob", "Charlie");
List<String> upperCaseNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println(upperCaseNames); // [ALICE, BOB, CHARLIE]
```

### 2. `forEach()`
Performs an action for each element in the stream.
```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
numbers.stream().forEach(System.out::println);
```

### 3. `reduce()`
Combines elements of the stream into a single value.
```java
List<Integer> numbers = List.of(1, 2, 3, 4, 5);
int sum = numbers.stream().reduce(0, Integer::sum);
System.out.println(sum); // 15
```

### 4. `count()`
Counts the number of elements in the stream.
```java
List<String> names = List.of("Alice", "Bob", "Charlie");
long count = names.stream().count();
System.out.println(count); // 3
```

### 5. `min()` and `max()`
Finds the minimum or maximum element based on a comparator.
```java
List<Integer> numbers = List.of(3, 5, 1, 8, 2);
Optional<Integer> min = numbers.stream().min(Integer::compareTo);
Optional<Integer> max = numbers.stream().max(Integer::compareTo);
System.out.println(min.get()); // 1
System.out.println(max.get()); // 8
```

### 6. `anyMatch()`, `allMatch()`, `noneMatch()`
Checks if elements match a given predicate.
```java
List<String> names = List.of("Alice", "Bob", "Charlie");
boolean anyStartsWithA = names.stream().anyMatch(name -> name.startsWith("A"));
boolean allStartsWithA = names.stream().allMatch(name -> name.startsWith("A"));
boolean noneStartsWithZ = names.stream().noneMatch(name -> name.startsWith("Z"));
System.out.println(anyStartsWithA); // true
System.out.println(allStartsWithA); // false
System.out.println(noneStartsWithZ); // true
```

### 7. `findFirst()` and `findAny()`
Retrieves an element from the stream.
```java
List<String> names = List.of("Alice", "Bob", "Charlie");
Optional<String> first = names.stream().findFirst();
Optional<String> any = names.stream().findAny();
System.out.println(first.get()); // Alice
System.out.println(any.get()); // Any element
```

## Conclusion
Terminal operations are crucial in stream processing as they produce a result or side-effect. They mark the end of a stream pipeline, making further operations on the same stream impossible.
