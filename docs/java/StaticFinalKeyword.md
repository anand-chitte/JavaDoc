# `static` and `final` Keywords in Java

## `static` Keyword
The `static` keyword is used to indicate that a particular member (variable or method) belongs to the class, rather than instances of the class. This means that static members can be accessed without creating an object of the class.

### Static Variables:
- A **static variable** is shared by all instances of a class.
- It is initialized only once, when the class is loaded.
- It is useful for representing data that should be common to all objects of the class, such as a counter or a constant value.

### Static Methods:
- A **static method** can be called without creating an object of the class.
- It can only access other static members of the class (variables or methods).
- Static methods are typically utility methods, such as `main()`.

### Static Blocks:
- A **static block** is used for static initialization.
- It runs only once, when the class is first loaded into memory.

## `final` Keyword
The `final` keyword is used to define constants and to prevent modification of variables, methods, and classes.

### Final Variables:
- A **final variable's** value cannot be changed once it is initialized.
- It is often used for constants.

### Final Methods:
- A **final method** cannot be overridden by subclasses.

### Final Classes:
- A **final class** cannot be subclassed (inherited).
- This is useful when you want to prevent a class from being extended, ensuring that the behavior of the method cannot be changed.
