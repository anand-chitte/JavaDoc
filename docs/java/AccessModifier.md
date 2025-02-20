# Access Modifiers&#x20;

Access modifiers define the scope and accessibility of classes, methods, and variables. Java provides four types of access modifiers:

## 1. **Private**

- Scope: Within the same class only.
- Cannot be accessed from outside the class.
- Useful for encapsulation.

### Example:

```java
class Example {
    private int data = 40;
    
    private void display() {
        System.out.println("Data: " + data);
    }
}
```

## 2. **Default (Package-Private)**

- Scope: Within the same package.
- If no access modifier is specified, the default modifier is used.
- Cannot be accessed from outside the package.

### Example:

```java
class Example {
    int data = 40; // Default access
    
    void display() {
        System.out.println("Data: " + data);
    }
}
```

## 3. **Protected**

- Scope: Within the same package and subclasses (even if in different packages).
- Allows inheritance.

### Example:

```java
class Parent {
    protected int data = 40;
    
    protected void display() {
        System.out.println("Data: " + data);
    }
}

class Child extends Parent {
    void show() {
        display();
    }
}
```

## 4. **Public**

- Scope: Accessible from anywhere.
- No restrictions.

### Example:

```java
public class Example {
    public int data = 40;
    
    public void display() {
        System.out.println("Data: " + data);
    }
}
```

## **Comparison Table**

| Modifier    | Same Class | Same Package | Subclass (Different Package) | Other Packages |
| ----------- | ---------- | ------------ | ---------------------------- | -------------- |
| `private`   | ✅          | ❌            | ❌                            | ❌              |
| *default*   | ✅          | ✅            | ❌                            | ❌              |
| `protected` | ✅          | ✅            | ✅                            | ❌              |
| `public`    | ✅          | ✅            | ✅                            | ✅              |

## **Key Takeaways**

- Use `private` for strict encapsulation.
- Use `default` when members should only be accessed within the same package.
- Use `protected` for inheritance when subclasses need access.
- Use `public` for global access when necessary.

