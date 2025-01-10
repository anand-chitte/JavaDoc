# Constructor in Java

A **constructor** in Java is a special method used to initialize objects. It is called when an object of a class is created. A constructor has the same name as the class and does not have a return type.

### Syntax:

```java
class ClassName {
    // Constructor
    ClassName() {
        // Initialization code
    }
}
```
**Example:**
```java
class Person {
    String name;
    int age;

    // Constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method to display values
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an object of Person class using the constructor
        Person p1 = new Person("John", 25);
        p1.display();
    }
}
```

## Types of Constructors:
### 1. Default Constructor
A constructor with no parameters. If no constructor is defined, Java provides a default constructor.
```java
class Person {
    String name;
    int age;

    // Default Constructor
    Person() {
        name = "Unknown";
        age = 0;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

```
### 2. Parameterized Constructor
A constructor that accepts parameters to initialize object properties with specific values.
```java
class Person {
    String name;
    int age;

    // Parameterized Constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
```

### 3. No-Argument Constructor
A constructor with no arguments. This is the same as the default constructor and is automatically provided by Java if no constructor is defined.

```java
class Car {
    String brand;

    // No-argument constructor
    Car() {
        brand = "Unknown";
    }

    void display() {
        System.out.println("Brand: " + brand);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.display();  // Output: Brand: Unknown
    }
}
```
### 4. Copy Constructor
A constructor that creates a new object by copying the properties of an existing object of the same class. It is used for cloning an object.
```java
class Book {
    String title;
    String author;

    // Constructor to initialize Book object
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    // Copy Constructor
    Book(Book book) {
        this.title = book.title;
        this.author = book.author;
    }

    void display() {
        System.out.println("Title: " + title + ", Author: " + author);
    }
}

public class Main {
    public static void main(String[] args) {
        Book originalBook = new Book("1984", "George Orwell");
        Book copiedBook = new Book(originalBook);  // Using copy constructor
        copiedBook.display();  // Output: Title: 1984, Author: George Orwell
    }
}
```