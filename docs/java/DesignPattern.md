# Singleton and Factory Design Patterns in Java

## 1. Singleton Pattern

### Definition
The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

### Implementation
```java
// Singleton using Lazy Initialization (Thread-Safe)
class Singleton {
    private static Singleton instance;
    
    private Singleton() { }
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    
    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage();
    }
}
```

### Key Points
- **Private Constructor** to prevent instantiation.
- **Static Method** to provide a single access point.
- **Lazy Initialization with Synchronization** for thread safety.

---

## 2. Factory Pattern

### Definition
The Factory pattern provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

### Implementation
```java
// Step 1: Create an interface
interface Animal {
    void speak();
}

// Step 2: Implement concrete classes
class Dog implements Animal {
    public void speak() {
        System.out.println("Woof Woof!");
    }
}

class Cat implements Animal {
    public void speak() {
        System.out.println("Meow Meow!");
    }
}

// Step 3: Create Factory Class
class AnimalFactory {
    public static Animal getAnimal(String type) {
        if (type.equalsIgnoreCase("DOG")) {
            return new Dog();
        } else if (type.equalsIgnoreCase("CAT")) {
            return new Cat();
        }
        return null;
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        Animal dog = AnimalFactory.getAnimal("DOG");
        dog.speak();
        
        Animal cat = AnimalFactory.getAnimal("CAT");
        cat.speak();
    }
}
```

### Key Points
- **Encapsulates Object Creation** by delegating it to a separate factory class.
- **Improves Maintainability** as new types can be added without modifying client code.
- **Hides Complexity** by abstracting the instantiation logic.

---

Both **Singleton** and **Factory** are widely used design patterns in Java. Singleton is useful for managing global shared resources, while Factory helps in object creation without exposing the instantiation logic.
