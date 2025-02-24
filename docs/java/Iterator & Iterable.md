# Iterator and Iterable in Java

In Java, the terms **Iterator** and **Iterable** refer to two concepts related to traversing collections like lists, sets, and other data structures.

## 1. Iterable

- **Iterable** is an interface in Java that represents a collection of elements that can be iterated over (i.e., you can loop through them).
- A class that implements the **Iterable** interface provides the capability to traverse its elements one by one. This interface has a single method:

```java
  public interface Iterable<T> {
      Iterator<T> iterator();
  }
```
- Any collection class (like ArrayList, HashSet, etc.) that implements Iterable can be used in an enhanced for-loop (for-each loop).

```java
List<String> list = Arrays.asList("a", "b", "c");
for (String s : list) {
    System.out.println(s);
}
```
The ArrayList class, which implements Iterable, allows the above usage.

## 2. Iterator
- **Iterator** is an interface in Java that allows you to traverse (iterate) through a collection, element by element, and optionally remove elements from the collection.

- The Iterator interface provides three primary methods:
  - **hasNext():** Returns true if there are more elements to iterate over.
  - **next():** Returns the next element in the iteration.
  - **remove():** Removes the last element returned by the iterator (optional operation).

```java
List<String> list = Arrays.asList("a", "b", "c");
Iterator<String> iterator = list.iterator();

while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}
```

## 3. ListIterator
- **ListIterator** is a specialized iterator for lists that allows traversal in both forward and backward directions.
- It extends the **Iterator** interface and provides additional methods:
  - **hasPrevious():** Checks if there is a previous element.
  - **previous():** Returns the previous element.
  - **add(E e):** Inserts an element at the current position.
  - **set(E e):** Replaces the last element returned by `next()` or `previous()`.

Example usage:

```java
List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
ListIterator<String> listIterator = list.listIterator();

// Forward Traversal
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}

// Backward Traversal
while (listIterator.hasPrevious()) {
    System.out.println(listIterator.previous());
}
```

## Key Differences
- **Iterable** is used to represent collections that can be traversed, while **Iterator** provides the mechanism for iterating over those collections.
- **Iterable** has the iterator() method that returns an Iterator, and Iterator has methods for accessing and removing elements.
- **Iterator** allows only forward traversal, whereas **ListIterator** supports both forward and backward traversal.
- **ListIterator** provides additional methods to modify the list, unlike **Iterator**.