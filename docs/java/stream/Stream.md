# Stream
A Stream is a sequence of data elements that you can process (e.g., from a list, array, or file). Think of it as a pipeline through which data flows, and you can perform operations on it in a more readable and efficient way.

---

## Key Concepts of Stream API
### 1. Creating a Stream 
You can create a stream from a collection, array, or other data sources.

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Stream<String> stream = names.stream();  // Creating a stream from a list
```
### 2. Intermediate Operations
These operations modify the stream but don’t produce a result until a "terminal operation" is called. Examples are:

- `filter`: Keep only the elements that meet a condition.
- `map`: Change each element (like converting text to uppercase).
- `sorted`: Sort elements.
```java
stream.filter(name -> name.startsWith("A"));  // Keep names that start with "A"
stream.map(String::toUpperCase);              // Convert all names to uppercase
```
### 3. Terminal Operations
These operations do something with the data (e.g., print it, collect it into a list, or count elements). Examples are:

- `forEach`: Perform an action for each element (e.g., print).
- `collect`: Collect the results into a collection like a list.
- `reduce`: Combine all elements into one result (e.g., sum).
```java
stream.forEach(System.out::println);           // Print each name
List<String> result = stream.collect(Collectors.toList());  // Collect into a list
```
**Example:**
Let's say we have a list of names, and we want to:

1. Keep only the names that start with "A".
2. Convert them to uppercase.
3. Sort them.

Here's how it looks with the Stream API:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

List<String> result = names.stream()                  // Start the stream
    .filter(name -> name.startsWith("A"))             // Filter names starting with "A"
    .map(String::toUpperCase)                          // Convert to uppercase
    .sorted()                                          // Sort them
    .collect(Collectors.toList());                     // Collect the results into a list

System.out.println(result);  // Output: [ALICE]
```

**Why Use Streams?**

- `Readability`: The code looks cleaner and more understandable.
- `Less Boilerplate`: You don’t need to write complex loops.
- `Efficiency`: Streams can be processed in parallel, making them faster for large data.