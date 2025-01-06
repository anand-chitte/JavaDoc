## Comparator vs Comparable in Java

### 1. **Comparable Interface**
   - The `Comparable` interface is used for defining the natural ordering of objects.
   - It contains the method `compareTo(T o)` that compares the current object with another object of the same type.

```java
int compareTo(T o);
```
   - The return value indicates the relative order:
     - **Negative value**: Current object is less than the other.
     - **Zero**: Both objects are equal.
     - **Positive value**: Current object is greater than the other.
   - **Use Case**: Implement this when you want the class to define its own sorting (for example, sorting by age or alphabetical order).

```java
   class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person other) {
        return this.age - other.age; // Sort by age
    }
}

```
```java 
// Usage:
List<Person> people = new ArrayList<>();
people.add(new Person("Alice", 30));
people.add(new Person("Bob", 25));
Collections.sort(people); // Sorts by age
```

### 2. **Comparator Interface**
   - The `Comparator` interface allows defining an external strategy for comparing two objects.
   - It contains the method `compare(T o1, T o2)` for comparing two objects.
   
```java
   int compare(T o1, T o2);  // Compare two objects
boolean equals(Object obj);  // (Optional) Default method for equality

```
   - **Use Case**: Implement this when you want to define multiple ways to compare objects (for example, sorting by name or by age), or when the class doesn't implement `Comparable`.

```java
   class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}

// Comparator to sort by name
class NameComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getName().compareTo(p2.getName()); // Sort alphabetically by name
    }
}

// Usage:
List<Person> people = new ArrayList<>();
people.add(new Person("Alice", 30));
people.add(new Person("Bob", 25));

// Sort by name using comparator
Collections.sort(people, new NameComparator());

```

### Key Differences:

| Feature             | Comparable                                      | Comparator                                      |
|---------------------|-------------------------------------------------|-------------------------------------------------|
| **Purpose**          | Defines natural ordering of objects within the class. | Defines custom ordering of objects externally.   |
| **Method**           | `compareTo(T o)`                                | `compare(T o1, T o2)`                           |
| **Implementation**   | Implemented within the class to compare objects of the same type. | Implemented in a separate class or as an anonymous class. |
| **Use Case**         | Used when there's a single way to sort objects (like sorting by age). | Used when there are multiple ways to sort objects (like sorting by name or age). |

### When to Use Which?
- Use **Comparable** for a natural, single way to sort objects.
- Use **Comparator** for defining multiple sorting strategies or when the class does not implement `Comparable`.
