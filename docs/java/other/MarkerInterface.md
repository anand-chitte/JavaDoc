# Marker Interface in Java

## What is a Marker Interface?
A **Marker Interface** is an interface that **does not contain any methods or fields**. It is used to indicate that a class has a special property or behavior. The presence of a marker interface allows Java runtime or frameworks to treat objects of that class differently.

## Examples of Marker Interfaces in Java
Some built-in marker interfaces in Java include:

| Marker Interface  | Purpose |
|-------------------|---------|
| `Serializable`   | Marks a class as serializable (can be converted into a byte stream). |
| `Cloneable`      | Marks a class as cloneable using the `clone()` method. |
| `Remote`         | Indicates that a class can be used in Remote Method Invocation (RMI). |

## Example: Using the `Serializable` Marker Interface
```java
import java.io.*;

class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        try {
            Student s = new Student("Aarav", 20);

            // Serialization
            FileOutputStream fileOut = new FileOutputStream("student.ser");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(s);
            out.close();
            fileOut.close();
            System.out.println("Object Serialized");

            // Deserialization
            FileInputStream fileIn = new FileInputStream("student.ser");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            Student deserializedStudent = (Student) in.readObject();
            in.close();
            fileIn.close();

            System.out.println("Deserialized Student: " + deserializedStudent.name + ", " + deserializedStudent.age);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
### Explanation
- The `Student` class implements `Serializable`, allowing objects to be serialized and deserialized.
- No methods are defined in `Serializable`, but its presence enables serialization.

## Example: Using the `Cloneable` Marker Interface
```java
class Employee implements Cloneable {
    String name;

    Employee(String name) {
        this.name = name;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class CloneExample {
    public static void main(String[] args) {
        try {
            Employee e1 = new Employee("Rohan");
            Employee e2 = (Employee) e1.clone();

            System.out.println("Original: " + e1.name);
            System.out.println("Clone: " + e2.name);
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```
### Explanation
- The `Employee` class implements `Cloneable`, allowing it to be cloned.
- The `clone()` method is overridden to enable object duplication.

## Creating a Custom Marker Interface
```java
interface Permission {}

class SecureFile implements Permission {
    void accessFile() {
        if (this instanceof Permission) {
            System.out.println("Access granted!");
        } else {
            System.out.println("Access denied!");
        }
    }
}

public class MarkerInterfaceExample {
    public static void main(String[] args) {
        SecureFile file = new SecureFile();
        file.accessFile(); // Prints: "Access granted!"
    }
}
```
### Explanation
- `Permission` is a marker interface.
- `SecureFile` implements `Permission`, and we use `instanceof` to check permission.

## Key Points
- Marker interfaces **do not contain methods** but indicate special behavior.
- Java provides built-in marker interfaces like `Serializable`, `Cloneable`, and `Remote`.
- Custom marker interfaces can be created to assign special properties to a class.

Marker interfaces were widely used before **annotations** were introduced in Java 5. Today, annotations are preferred for such use cases. 🚀

