# Type Casting in Java

In Java, **type casting** is the process of converting one data type into another. There are two types of casting:

## 1. Implicit Casting (Widening)
- This occurs automatically when a smaller data type is converted to a larger data type.
- No data loss occurs because the target type can accommodate the value of the source type.

**Example:**
```java
int num = 100;
double doubleNum = num;  // int to double (widening)
System.out.println(doubleNum);  // Output: 100.0
```
## 2. Explicit Casting (Narrowing)
This occurs when you convert a larger data type into a smaller data type.
Since there may be data loss, it requires explicit casting using parentheses.
Example:

```java
double num = 100.99;
int intNum = (int) num;  // double to int (narrowing)
System.out.println(intNum);  // Output: 100 (decimal part is truncated)
```

## Key Points:
- **Widening casting**: Automatically happens when you assign a smaller type to a larger one.
- **Narrowing casting**: You must manually specify it with parentheses to avoid potential data loss. 
- **Casting with Objects**: For object references, casting is done with instanceof to ensure safe conversion, such as casting one class type to another within an inheritance hierarchy.

**Example with Objects**:
```java
class Animal {}
class Dog extends Animal {}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();  // Implicit casting (upcasting)
        Dog dog = (Dog) animal;  // Explicit casting (downcasting)
    }
}
```