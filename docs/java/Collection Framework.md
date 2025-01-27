# Collection Framework in Java

The Java **Collection Framework** is a unified architecture for representing and manipulating collections (groups of objects). It provides pre-built data structures like List, Set, Queue, and Map, making it easier to handle data in a structured way. 

## Core Interfaces in the Collection Framework

### 1. **Collection Interface**
The root interface of the framework. It defines basic methods for adding, removing, and querying elements.

- **Subinterfaces**:
  - **List**: An ordered collection that can contain duplicate elements.
  - **Set**: A collection that cannot contain duplicate elements.
  - **Queue**: A collection designed for holding elements before processing, typically in a FIFO (First-In-First-Out) order.
  - **Deque**: A double-ended queue, supports adding/removing elements from both ends.
  
### 2. **Map Interface**
Represents a collection of key-value pairs (entries). Each key maps to exactly one value. Maps do not extend `Collection`.

## Major Implementations

### 1. **List Implementations**
  - **ArrayList**: Resizable array, allows fast random access and slower insertions/removals in the middle.
  - **LinkedList**: Doubly linked list, slower access but faster insertions/removals.
  - **Vector**: Synchronized version of ArrayList (rarely used in modern applications).
  - **Stack**: A subclass of Vector, representing a stack data structure.

### 2. **Set Implementations**
  - **HashSet**: Does not allow duplicates and does not maintain any specific order of elements.
  - **LinkedHashSet**: Maintains the insertion order of elements.
  - **TreeSet**: Implements a NavigableSet and orders elements based on their natural ordering or by a Comparator.

### 3. **Queue Implementations**
  - **PriorityQueue**: A queue where elements are processed based on their priority, not the order they were added.
  - **LinkedList**: Can also be used as a Queue, supports FIFO operations.

### 4. **Deque Implementations**
  - **ArrayDeque**: A resizable array implementation of the Deque interface.
  - **LinkedList**: Can also be used as a Deque.

### 5. **Map Implementations**
  - **HashMap**: A map based on hashing, does not maintain any order of elements.
  - **LinkedHashMap**: Maintains the insertion order of keys.
  - **TreeMap**: Implements a NavigableMap and orders keys based on their natural ordering or a Comparator.

## Useful Collection Classes

- **Collections**: A utility class providing static methods to operate on collections (like sorting, reversing, etc.).
- **Arrays**: Provides static methods to manipulate arrays, like converting an array to a list.

## Algorithms

Java Collection Framework provides several useful algorithms (like sorting, binary search) implemented in the `Collections` utility class:

- **Sorting**: `Collections.sort(list)`
- **Shuffling**: `Collections.shuffle(list)`
- **Reversing**: `Collections.reverse(list)`
- **Binary Search**: `Collections.binarySearch(list, key)`

## Key Concepts

- **Generics**: Most collection classes use generics to ensure type safety (e.g., `List<String>`, `Map<Integer, String>`).
- **Iterator**: An interface for iterating over elements in a collection. Common methods are `hasNext()` and `next()`.
- **Autoboxing**: Automatic conversion between primitive types and their corresponding wrapper classes when using collections (e.g., `int` to `Integer`).

## Example Usage

```java

import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        // List Example
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("JavaScript");
        
        // Iterating over List
        for (String lang : list) {
            System.out.println(lang);
        }

        // Set Example (no duplicates)
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // Duplicate, won't be added
        
        // Iterating over Set
        for (String fruit : set) {
            System.out.println(fruit);
        }

        // Map Example (key-value pairs)
        Map<String, Integer> map = new HashMap<>();
        map.put("Apple", 1);
        map.put("Banana", 2);
        
        // Iterating over Map
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```