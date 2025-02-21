## Core Java

### Use of `Optional`
`Optional` is a container object used to avoid `NullPointerException` and handle missing values gracefully.

#### Example:
```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> name = Optional.ofNullable(null);
        System.out.println(name.orElse("Default Name"));
    }
}
```

---

### `equals()` and `hashCode()`, Do We Need to Use Them Together?
Yes, when overriding `equals()`, we must override `hashCode()` to maintain consistency in collections like `HashSet`, `HashMap`, and `HashTable`. The contract states that:
- If two objects are equal (`equals()` returns `true`), they must have the same `hashCode()`.
- If `hashCode()` is not overridden, it may break collections that rely on hashing.

#### Example:
```java
class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Employee employee = (Employee) obj;
        return id == employee.id && name.equals(employee.name);
    }

    @Override
    public int hashCode() {
        return id * 31 + name.hashCode();
    }
}
```

---

### Multiple Static Blocks Execution Order
Static blocks execute in the order they are defined in the class **before the constructor** and **only once** when the class is loaded.

#### Example:
```java
class Test {
    static {
        System.out.println("Static Block 1");
    }
    static {
        System.out.println("Static Block 2");
    }
    public static void main(String[] args) {
        System.out.println("Main method");
    }
}
```
**Output:**
```
Static Block 1  
Static Block 2  
Main method  
```

---

### Can We Change the Exception in an Overridden Method?
- **Yes (for unchecked exceptions)**: A subclass can throw the same, a new unchecked exception, or no exception.
- **No (for checked exceptions)**: A subclass can throw the same or a subclass of the checked exception but not a new broader exception.

#### Example:
```java
class Parent {
    void show() throws IOException {  // Checked Exception
        System.out.println("Parent");
    }
}

class Child extends Parent {
    @Override
    void show() throws FileNotFoundException {  // Allowed (subclass of IOException)
        System.out.println("Child");
    }
}
```

---

### Class Implementing Two Interfaces with Same Default Method
We must override the method explicitly to avoid ambiguity.

#### Example:
```java
interface A {
    default void show() {
        System.out.println("A");
    }
}
interface B {
    default void show() {
        System.out.println("B");
    }
}

class C implements A, B {
    @Override
    public void show() {
        A.super.show();  // Explicitly calling A's method
    }

    public static void main(String[] args) {
        new C().show();  // Output: A
    }
}
```

---
### Why Were Private Methods Introduced in Interfaces?
Private methods in interfaces (introduced in Java 9) allow code reusability within the interface itself, preventing duplication in multiple default methods.

#### Example:
```java
interface MyInterface {
    private void commonMethod() {
        System.out.println("Common logic");
    }

    default void method1() {
        commonMethod();
        System.out.println("Method 1");
    }

    default void method2() {
        commonMethod();
        System.out.println("Method 2");
    }
}

public class InterfaceTest implements MyInterface {
    public static void main(String[] args) {
        new InterfaceTest().method1();
        new InterfaceTest().method2();
    }
}
```
---

### CompletableFuture
`CompletableFuture` is used for asynchronous programming in Java.

#### Example:
```java
import java.util.concurrent.CompletableFuture;

public class CompletableFutureExample {
    public static void main(String[] args) {
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> 
            System.out.println("Executing asynchronously")
        );
        future.join();
    }
}
```

---

### Can We Override or Overload `main` Method?
- **Yes, we can overload `main()`** by changing parameters.
- **No, we cannot override `main()`** because it is static.

#### Example:
```java
public class MainMethodExample {
    public static void main(String[] args) {
        System.out.println("Main method");
    }
    public static void main(int a) {
        System.out.println("Overloaded main method");
    }
}
```

---

### Can We Change `String[] args` to `String args` in `main` Method?
No, the method signature must be `String[] args`.

---

### HashMap vs Hashtable
- `HashMap` is non-synchronized, allows `null` keys, and is faster.
- `Hashtable` is synchronized and does not allow `null` keys.

---

### StringBuilder vs StringBuffer
- `StringBuilder` is not thread-safe but faster.
- `StringBuffer` is synchronized and thread-safe.

---

### When to Use `ArrayList` or `LinkedList`?
- `ArrayList` is better for fast random access.
- `LinkedList` is better for frequent insertions/deletions.

---

### What is variable arguments?
In Java, variable arguments are specified using an ellipsis (`...`).
```java
public class VarArgsExample {
    public static void printNumbers(int... numbers) {
        for (int num : numbers) {
            System.out.println(num);
        }
    }

    public static void main(String[] args) {
        printNumbers(1, 2, 3, 4, 5);
    }
}
```
---

### Parallel Streams for Large Data Processing
Parallel streams help process large datasets faster by utilizing multiple CPU cores.

#### Example:
```java
import java.util.List;
import java.util.stream.IntStream;

public class ParallelStreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = IntStream.rangeClosed(1, 10000).boxed().toList();
        numbers.parallelStream().forEach(System.out::println);
    }
}
```

---

### Custom Exception Class
We can create our own custom exception by extending `Exception` (checked) or `RuntimeException` (unchecked).

#### Example:
```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class TestException {
    public static void main(String[] args) {
        try {
            throw new CustomException("This is a custom exception");
        } catch (CustomException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

---

## Spring Boot

### Can We Exclude Dependency from `@EnableAutoConfiguration`?
Yes, we can exclude dependencies using `exclude` or `excludeName` attributes of `@EnableAutoConfiguration`.

#### Example:
```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

---

### Can We Change Tomcat Server?
Yes, we can change Tomcat to another embedded server like Jetty or Undertow by excluding Tomcat and adding the desired server dependency.

#### Example:
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <exclusions>
            <exclusion>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-tomcat</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jetty</artifactId>
    </dependency>
</dependencies>
```