# Object-Oriented Programming (OOP) Concepts

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which are instances of classes. OOP focuses on organizing software design around data (objects) and the methods (functions) that operate on that data. Below are the core principles of OOP:

---

## 1. **Class**
- A blueprint for creating objects.
- Defines properties (fields) and behaviors (methods).

**Example**:
```java
class Animal {
    String name;
    int age;

    void eat() {
        System.out.println(name + " is eating.");
    }
}
```

## 2. Object
- An instance of a class.
- Represents a real-world entity.

**Example**:
```java
public class Main {
    public static void main(String[] args) {
        Animal dog = new Animal();
        dog.name = "Buddy";
        dog.age = 3;
        dog.eat(); // Output: Buddy is eating.
    }
}
```

## 3. Inheritance
- **Definition**: 
  - Inheritance allows a class to inherit properties and behaviors (methods) from another class. This helps in reusing existing code and establishing a relationship between parent and child classes.
  - Mechanism to acquire properties and methods from another class.
  - Promotes code reuse.

**Example**: If you have a class `Animal`, a `Dog` class can inherit from `Animal`, gaining properties like `name` and methods like `eat()`. The `Dog` class can also have additional methods like `bark()`.
```java
class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.bark(); // Output: Buddy is barking.
    }
}
```

## 4. Encapsulation
- **Definition**: 
  - The bundling of data and methods that operate on that data within a single unit or class. It also involves restricting direct access to some of the object's components, which is typically done by making some variables or methods private and providing public getter and setter methods to access them. 
  - Bundling data (fields) and methods into a single unit (class).
  - Use access modifiers (private, public, protected) to control access.

**Example**: If you have a `Car` class, its attributes like `speed` and `fuelLevel` can be encapsulated, with methods like `accelerate()` or `refuel()` controlling how these properties change.
```java
class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

## 5. Polymorphism
- **Definition**: 
  - Polymorphism allows objects of different classes to be treated as objects of a common superclass. The most common use of polymorphism is when a parent class reference is used to point to child class objects. It also refers to the ability to call the same method on different objects, each of which responds in its own way.
  - Ability to take many forms.
  - Two types:
    - Compile-time Polymorphism (Method Overloading)
    - Runtime Polymorphism (Method Overriding)

**Example**: A method `makeSound()` might behave differently depending on whether it is called on a `Dog` object or a `Cat` object, even though the method signature is the same.
- Method Overloading:
```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```
- Method Overriding:
```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

## 6. Abstraction
- **Definition**: 
  - Abstraction refers to hiding the complex implementation details of a system and exposing only the essential features to the user. This is done through abstract classes and interfaces.
  - Hiding implementation details and showing only essential features. 
  - Achieved using:
    - Abstract classes (abstract keyword)
    - Interfaces

**Example**: A `Vehicle` class may be abstract, with a method `move()`. Classes like `Car` or `Bike` will inherit from it and implement the `move()` method in their own way (e.g., car moves on four wheels, bike moves on two).
- Abstract Class:
```java
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}
```
- Interface:
```java 
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}
```

## Advantages of OOP:
- **Code Reusability**: Through inheritance and composition, code can be reused across different parts of an application.
- **Modularity**: Code is organized into classes and objects, making it easier to understand and maintain.
- **Scalability and Maintainability**: OOP systems can be more easily updated, modified, and extended because of their modular structure.
- **Real-world modeling**: OOP reflects real-world concepts, making it intuitive to model complex systems.
