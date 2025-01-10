# Exception in Java

An exception in Java is an event that disrupts the normal flow of the program's execution. It can occur due to a variety of reasons, such as invalid input, attempting to divide by zero, file errors, or network issues. When an exception occurs, Java creates an `Exception` object and throws it.

[![](https://mermaid.ink/img/pako:eNqNlN9vgjAQx_8Vck9bgkZQK_KwZJsz8cGxTLOHjT10cEqz0prabjrj_z7QYKq4H7xw9-W-H7gr7QYSmSKEMOPyM8mo0s50EAunuKaZkp_0jeNLDIfYuRgJjWpGE7yM4fWk0mk0rpw7paQqPLu7c3HL6XL5Y-0qwYVmUpT1VVzz7Ell_RNT2lA-pknGBFZvOqP-woiMjmZjzKVaV4BT6Rf3RNPkPfooRlAMrPLXxTrh0F1JGUV251b2h-_RCM1ytM2nUo1g00vGkHG8l3oojUht0Fn9T9pdNDxaRCuteWufWgLuDecPkpV_lQ06J_8POBIprnYrelO2sjya9E_P_oe-VkxnOWqW2NAz6hEOXMhR5ZSlxT7blPgYdIY5xhAWIWfzTMcQi21RSI2Wk7VIINTKoAtKmnkG4YzyZZGZRUo1DhidK5pXJQsqnqW0Uwg3sIKw4QWk2Q88r9MN-l2_7bmwhtAjvSbxiR-QVisgXeL1ti587QBekwS9jt8hnVbb9_xW4AKmTEs13p8Ru6Ni-w0Ee2md?type=png)](https://mermaid.live/edit#pako:eNqNlN9vgjAQx_8Vck9bgkZQK_KwZJsz8cGxTLOHjT10cEqz0prabjrj_z7QYKq4H7xw9-W-H7gr7QYSmSKEMOPyM8mo0s50EAunuKaZkp_0jeNLDIfYuRgJjWpGE7yM4fWk0mk0rpw7paQqPLu7c3HL6XL5Y-0qwYVmUpT1VVzz7Ell_RNT2lA-pknGBFZvOqP-woiMjmZjzKVaV4BT6Rf3RNPkPfooRlAMrPLXxTrh0F1JGUV251b2h-_RCM1ytM2nUo1g00vGkHG8l3oojUht0Fn9T9pdNDxaRCuteWufWgLuDecPkpV_lQ06J_8POBIprnYrelO2sjya9E_P_oe-VkxnOWqW2NAz6hEOXMhR5ZSlxT7blPgYdIY5xhAWIWfzTMcQi21RSI2Wk7VIINTKoAtKmnkG4YzyZZGZRUo1DhidK5pXJQsqnqW0Uwg3sIKw4QWk2Q88r9MN-l2_7bmwhtAjvSbxiR-QVisgXeL1ti587QBekwS9jt8hnVbb9_xW4AKmTEs13p8Ru6Ni-w0Ee2md)

## Types of Exceptions

### 1. **Checked Exceptions**
These are exceptions that must be explicitly handled by the programmer using a `try-catch` block or declared using the `throws` keyword. Examples include `IOException`, `SQLException`.

### 2. **Unchecked Exceptions**
These are exceptions that are not required to be caught or declared thrown. They inherit from `RuntimeException` and include exceptions such as `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException`.

## Handling Exceptions

### 1. **Try-Catch Block**
It allows you to handle exceptions and prevent the program from crashing.

```java
try {
    // Code that might throw an exception
    int result = 10 / 0; // This will throw ArithmeticException
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Error: " + e.getMessage());
}
```
### 2. **Finally Block**
The finally block is optional and is used for code that must be executed regardless of whether an exception occurred or not, such as closing resources.

```java
try {
    // Code that might throw an exception
} catch (Exception e) {
    // Handle the exception
} finally {
    // Cleanup code
    System.out.println("This will always execute");
}
```

### 3. **Throws Clause**
If a method can throw an exception, you can declare it using the throws keyword.

```java
public void readFile() throws IOException {
    // Code that may throw IOException
}
```