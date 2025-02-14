## **What is Serialization in Java?**
Serialization in Java is the process of converting an **object** into a **byte stream** so that it can be:
- Stored in a **file**
- Sent over a **network**
- Saved in a **database**
- Cached in **Redis**

The **reverse process**, where the byte stream is converted back into an object, is called **Deserialization**.

---

## **Why Do We Need Serialization?**
Java objects exist **only in memory (RAM)** while the application is running. If we want to:
- **Save** the object's state for later use
- **Send** it over a network (e.g., APIs, Microservices, Kafka)
- **Store** it in a database

Then we need **Serialization** to convert the object into a format that can be stored or transmitted.

---

## **Basic Example of Serialization in Java**

### **Step 1: Create a Serializable Class**
A class must **implement `Serializable` interface** to allow serialization.

```java
import java.io.*;

class Person implements Serializable { // Implements Serializable
    private static final long serialVersionUID = 1L; // Helps with version control
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

### **Step 2: Serialize the Object (Convert to File)**
```java
public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("Aarav", 25);

        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
            System.out.println("Object Serialized Successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

🔹 This saves the `Person` object as a **binary file (`person.ser`)**.

### **Step 3: Deserialize the Object (Read from File)**
```java
public class DeserializationExample {
    public static void main(String[] args) {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person person = (Person) ois.readObject();
            System.out.println("Object Deserialized: " + person.name + ", " + person.age);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```
🔹 This reads the object from the file and restores it into memory.

---

## **Serialization in Spring Boot**
Spring Boot uses serialization in:
1️⃣ **REST APIs** – Convert Java objects to JSON  
2️⃣ **Caching (Redis, EhCache)** – Store objects as JSON  
3️⃣ **Sessions (Spring Session with Redis)** – Store sessions in Redis  
4️⃣ **Message Queues (Kafka, RabbitMQ)** – Send objects between services  

Would you like an example in **Spring Boot (REST API or Redis)?** 🚀

