# Java Reflection API

Java Reflection API is a powerful feature in Java that allows a program to inspect and manipulate classes, methods, fields, and constructors at runtime, even if they are private. It is part of the `java.lang.reflect` package.

---

## **Key Components of Java Reflection API**
1. **`Class<?>`** – Represents a loaded class in memory.
2. **`Field`** – Represents class fields.
3. **`Method`** – Represents class methods.
4. **`Constructor`** – Represents class constructors.
5. **`Modifier`** – Provides utility methods to check access modifiers.

---

## **Use Cases of Reflection**
- Inspecting class members at runtime.
- Accessing private fields and methods.
- Creating objects dynamically.
- Invoking methods dynamically.
- Analyzing annotations.

---

## **Example 1: Getting Class Information**
```java
class Test {
    private int value;
    
    public void display() {
        System.out.println("Hello, Reflection!");
    }
}

public class ReflectionDemo {
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> clazz = Class.forName("Test");

        System.out.println("Class Name: " + clazz.getName());
        System.out.println("Superclass: " + clazz.getSuperclass());
        
        System.out.println("Methods:");
        for (var method : clazz.getDeclaredMethods()) {
            System.out.println(method.getName());
        }
    }
}
```
**Output:**
```
Class Name: Test
Superclass: class java.lang.Object
Methods:
display
```

---

## **Example 2: Accessing Private Fields**
```java
import java.lang.reflect.Field;

class Sample {
    private String secret = "Hidden Data";
}

public class ReflectionAccess {
    public static void main(String[] args) throws Exception {
        Sample obj = new Sample();
        Field field = obj.getClass().getDeclaredField("secret");
        field.setAccessible(true);  // Allows access to private fields
        System.out.println("Private Field Value: " + field.get(obj));
    }
}
```
**Output:**
```
Private Field Value: Hidden Data
```

---

## **Example 3: Invoking Private Methods**
```java
import java.lang.reflect.Method;

class Secret {
    private void showMessage() {
        System.out.println("Private Method Invoked!");
    }
}

public class ReflectionMethod {
    public static void main(String[] args) throws Exception {
        Secret obj = new Secret();
        Method method = obj.getClass().getDeclaredMethod("showMessage");
        method.setAccessible(true);
        method.invoke(obj);
    }
}
```
**Output:**
```
Private Method Invoked!
```

---

## **Example 4: Creating Objects Dynamically**
```java
import java.lang.reflect.Constructor;

class Demo {
    public Demo() {
        System.out.println("Demo class object created!");
    }
}

public class ReflectionConstructor {
    public static void main(String[] args) throws Exception {
        Constructor<Demo> constructor = Demo.class.getConstructor();
        Demo obj = constructor.newInstance();
    }
}
```
**Output:**
```
Demo class object created!
```

---

## **Example 5: Modifying Private Fields**
```java
import java.lang.reflect.Field;

class Person {
    private String name = "John";
}

public class ReflectionModifyField {
    public static void main(String[] args) throws Exception {
        Person person = new Person();
        Field field = Person.class.getDeclaredField("name");
        field.setAccessible(true);
        field.set(person, "Alice");

        System.out.println("Modified Name: " + field.get(person));
    }
}
```
**Output:**
```
Modified Name: Alice
```

---

## **Advantages of Reflection**
✅ Allows dynamic inspection and modification of classes.  
✅ Enables frameworks like Spring, Hibernate, and JUnit to work efficiently.  
✅ Helps in serialization, deserialization, and debugging.

## **Disadvantages of Reflection**
❌ Performance overhead due to runtime type checking.  
❌ Breaks encapsulation by accessing private members.  
❌ Security risks if misused.

---

## **When to Use Reflection?**
✔ When developing frameworks, dependency injection, or ORM (e.g., Hibernate).  
✔ For debugging, logging, or testing private methods.  
✔ When working with dynamically loaded classes.

❌ **Avoid using Reflection in performance-critical applications.**
