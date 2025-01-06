# Method Overloading vs. Method Overriding

## 1. Method Overloading:
### Definition:
Method overloading is a feature that allows a class to have multiple methods with the same name but with different parameters (i.e., different number or type of arguments).

### Key Points:
- Methods with the same name but different signatures (different parameter types or a different number of parameters).
- It is determined at **compile time** (known as compile-time polymorphism or static polymorphism).
- Overloaded methods must differ in the type or number of their parameters, **not their return type**.
- Overloading can occur within the **same class** or in a **subclass**.

---
```java
class Calculator {
    // Overloaded method for adding two integers
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded method for adding three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method for adding two doubles
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));        // Calls the method with two integers
        System.out.println(calc.add(1, 2, 3));     // Calls the method with three integers
        System.out.println(calc.add(2.5, 3.5));    // Calls the method with two doubles
    }
}
```
```shell
Output:
Copy code
5
6
6.0
```
## 2. Method Overriding:
### Definition:
Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The method signature (name, return type, and parameters) must be the same in both the superclass and subclass.

### Key Points:
- The method in the subclass must have the same **name**, **return type**, and **parameters** as in the superclass.
- It is determined at **runtime** (known as runtime polymorphism or dynamic polymorphism).
- Overriding allows a subclass to provide a specific implementation of a method that is already provided by its **parent class**.
- The method in the subclass can be called using an object of the **subclass** or the **parent class** (through a reference to the subclass).
- The `@Override` annotation is used to indicate method overriding, though it’s **not mandatory**.

```java
class Animal {
    // Method to be overridden in subclass
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    // Overriding the sound method in the subclass
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.sound();  // Calls the method in Animal class

        Dog dog = new Dog();
        dog.sound();     // Calls the overridden method in Dog class

        Animal myDog = new Dog();
        myDog.sound();   // Calls the overridden method in Dog class (runtime polymorphism)
    }
}
```
```shell

Output:
css
Copy code
Animal makes a sound
Dog barks
Dog barks
```