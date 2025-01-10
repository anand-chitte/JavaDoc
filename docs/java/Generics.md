# Generics in Java

## Basic Concepts of Generics:

### 1. Generic Classes:
A generic class is defined with a type parameter, allowing you to create classes that can work with any data type while maintaining type safety. The class will operate on the specified type, which can vary depending on how the class is instantiated.

```java
class Container<T> {
    private T item;
    public Container(T item) { this.item = item; }
    public T getItem() { return item; }
}

public class GenericExample {
    public static void main(String[] args) {
        System.out.println(new Container<>(42).getItem()); // Output: 42
        System.out.println(new Container<>("Hello").getItem()); // Output: Hello
    }
}

```

### 2. Generic Methods:
Methods can also be made generic by defining type parameters that allow them to work with any type. This enables the method to perform operations on different types while ensuring that the operations are type-safe.

```java
public class GenericMethodExample {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3};
        String[] strArray = {"A", "B", "C"};

        printArray(intArray);  // Output: 1 2 3
        printArray(strArray);  // Output: A B C
    }
}
```

### 3. Bounded Type Parameters:
You can restrict the types that can be used in place of the generic type by specifying an upper bound. This ensures that only types that extend a certain class (or implement an interface) can be used.

```java
public class BoundedExample {
    public static <T extends Number> void printNumber(T number) {
        System.out.println(number);
    }

    public static void main(String[] args) {
        printNumber(10);   // Output: 10
        printNumber(5.5);  // Output: 5.5
        // printNumber("Hello"); // Error: String is not a subtype of Number
    }
}
```

### 4. Wildcard in Generics:
Wildcards are used when the type is not known or when it can vary. There are different types of wildcards:
- **Unbounded Wildcard (`?`)**: Represents any type.
- **Upper Bounded Wildcard (`? extends T`)**: Represents any type that is a subtype of `T`.
- **Lower Bounded Wildcard (`? super T`)**: Represents any type that is a supertype of `T`.

```java
public class WildcardExample {
    public static void printList(List<?> list) {
        for (Object obj : list) {
            System.out.println(obj);
        }
    }

    public static void main(String[] args) {
        List<Integer> intList = List.of(1, 2, 3);
        List<String> strList = List.of("A", "B", "C");

        printList(intList);  // Output: 1 2 3
        printList(strList);  // Output: A B C
    }
}
```

### 5. Generic Interfaces:
Like classes, interfaces can also be generic, allowing you to define methods and properties that operate on different types. The type is defined at the time of instantiating the implementing class.

```java
public interface Pair<K, V> {
    K getKey();
    V getValue();
}

public class SimplePair<K, V> implements Pair<K, V> {
    private K key;
    private V value;

    public SimplePair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public K getKey() {
        return key;
    }

    @Override
    public V getValue() {
        return value;
    }

    public static void main(String[] args) {
        Pair<Integer, String> pair = new SimplePair<>(1, "One");
        System.out.println(pair.getKey() + " : " + pair.getValue()); // Output: 1 : One
    }
}
```

## Advantages of Generics:
1. **Type Safety:** Generics help catch type errors at compile time rather than runtime, reducing potential bugs related to type casting.
2. **Reusability:** Generic classes and methods can be used with any data type, which helps avoid writing the same code multiple times.
3. **Readability:** Generics make code easier to read and understand by explicitly stating the type of data being operated on.

## Commonly Used Generic Classes in Java:
- **List<T>**: A collection of elements of type `T`, typically ordered.
- **Map<K, V>**: A collection of key-value pairs, where `K` is the key type and `V` is the value type.
- **Set<T>**: A collection of unique elements of type `T`.

Generics are a key feature in Java that help create flexible and type-safe code by allowing operations on various data types while maintaining strict type checks at compile time.
