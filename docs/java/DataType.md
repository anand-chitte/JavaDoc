# Data Types in Java

In Java, data types are divided into two main categories: **Primitive Data Types** and **Reference Data Types**.

## 1. Primitive Data Types
These are the most basic data types in Java, representing simple values. There are 8 primitive data types:

- **byte**: 8-bit integer (range: -128 to 127)
- **short**: 16-bit integer (range: -32,768 to 32,767)
- **int**: 32-bit integer (range: -2^31 to 2^31-1)
- **long**: 64-bit integer (range: -2^63 to 2^63-1)
- **float**: 32-bit floating-point number (approx. ±3.40282347E+38F)
- **double**: 64-bit floating-point number (approx. ±1.7976931348623157E+308)
- **char**: 16-bit Unicode character (range: 0 to 65,535)
- **boolean**: Represents true or false values

## 2. Reference Data Types
These refer to objects and arrays. They are not actual values but references to objects in memory. Reference data types include:

- **Classes**: Custom data types defined by the user.
- **Interfaces**: Abstract types used to define method contracts.
- **Arrays**: Homogeneous collections of data (e.g., `int[]`, `String[]`).
- **Strings**: A special type that holds sequences of characters (e.g., `"Hello"`).

### Example:
```java
int num = 100;        // Primitive data type (int)
String name = "John"; // Reference data type (String)
```