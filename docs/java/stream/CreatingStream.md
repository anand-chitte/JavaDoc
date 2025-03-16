# Creating a Stream in Java

## What is a Stream?
A Stream in Java is a sequence of elements that can be processed in parallel or sequentially. Streams do not store data; they operate on the source data structures such as collections, arrays, or I/O channels.

## Creating a Stream

### 1. Creating a Stream from a Collection
```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        Stream<String> stream = names.stream();
        stream.forEach(System.out::println);
    }
}
```

### 2. Creating a Stream from an Array
```java
import java.util.stream.*;

public class StreamFromArray {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob", "Charlie"};
        Stream<String> stream = Arrays.stream(names);
        stream.forEach(System.out::println);
    }
}
```

### 3. Creating a Stream Using `Stream.of()`
```java
import java.util.stream.Stream;

public class StreamOfExample {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("Alice", "Bob", "Charlie");
        stream.forEach(System.out::println);
    }
}
```

### 4. Creating an Infinite Stream
```java
import java.util.stream.*;

public class InfiniteStreamExample {
    public static void main(String[] args) {
        Stream<Integer> infiniteStream = Stream.iterate(1, n -> n + 1);
        infiniteStream.limit(10).forEach(System.out::println);
    }
}
```

## Conclusion
Java Streams provide a functional approach to processing collections of data. By leveraging streams, developers can write more readable and maintainable code.
