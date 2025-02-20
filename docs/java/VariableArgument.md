# Variable Arguments

## Introduction
Variable arguments (also known as varargs) allow a function or method to accept a variable number of arguments. This is useful when you do not know in advance how many arguments will be passed.

## Variable Arguments in Different Languages

### Java
In Java, variable arguments are specified using an ellipsis (`...`).
```java
public class VarArgsExample {
    public static void printNumbers(int... numbers) {
        for (int num : numbers) {
            System.out.println(num);
        }
    }

    public static void main(String[] args) {
        printNumbers(1, 2, 3, 4, 5);
    }
}
```
