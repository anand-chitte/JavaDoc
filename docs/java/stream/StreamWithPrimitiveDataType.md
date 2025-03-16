# Stream API with Primitive Data Types and Strings in Java

The **Stream API** in Java allows efficient processing of sequences of data. When dealing with **primitive data types**, Java provides specialized streams to avoid unnecessary boxing and unboxing. These include:

- **IntStream** → for `int`
- **LongStream** → for `long`
- **DoubleStream** → for `double`

Additionally, we can work with **String and String arrays** using Stream API.

---

## 1. Stream API with Primitive Data Types
### Creating Primitive Streams
#### From an `Array`
```java
int[] numbers = {1, 2, 3, 4, 5};
IntStream intStream = Arrays.stream(numbers);
```

#### Using `range()` and `rangeClosed()`
```java
IntStream.range(1, 5).forEach(System.out::println);  // Output: 1 2 3 4
IntStream.rangeClosed(1, 5).forEach(System.out::println); // Output: 1 2 3 4 5
```

#### Using `of()`
```java
IntStream.of(10, 20, 30).forEach(System.out::println);
```

#### Using `generate()` and `iterate()`
```java
IntStream.generate(() -> (int) (Math.random() * 100)).limit(5).forEach(System.out::println);
IntStream.iterate(1, n -> n + 2).limit(5).forEach(System.out::println); // 1 3 5 7 9
```

---

## 2. Stream API with a Single String

### Convert String to `IntStream` (Character Stream)
```java
String str = "hello";
IntStream charStream = str.chars();

charStream.mapToObj(c -> (char) c)
          .forEach(System.out::print);  // Output: hello
```

### Convert String to Stream of Words
```java
String sentence = "Java is fun";
Stream<String> wordStream = Arrays.stream(sentence.split(" "));
wordStream.forEach(System.out::println);
// Output:
// Java
// is
// fun
```

---

## 3. Stream API with an Array of Strings
### Using `Stream.of()`
```java
String[] names = {"Aarav", "Vikram", "Neha", "Raj"};
Stream<String> nameStream = Stream.of(names);
nameStream.forEach(System.out::println);
```

### Using `Arrays.stream()`
```java
String[] fruits = {"Apple", "Banana", "Mango"};
Arrays.stream(fruits)
      .map(String::toUpperCase)
      .forEach(System.out::println);
// Output:
// APPLE
// BANANA
// MANGO
```

---

## 4. Convert String Arrays to Primitive Streams

### Convert String Array to `IntStream`
```java
String[] numbers = {"10", "20", "30", "40"};
IntStream intStream = Arrays.stream(numbers)
                            .mapToInt(Integer::parseInt);
intStream.forEach(System.out::println);
// Output: 10 20 30 40
```

### Convert String Array to `DoubleStream`
```java
String[] decimalNumbers = {"1.5", "2.8", "3.6"};
DoubleStream doubleStream = Arrays.stream(decimalNumbers)
                                  .mapToDouble(Double::parseDouble);
doubleStream.forEach(System.out::println);
```

---

## 5. Filtering, Mapping, and Reducing with Stream API

### Filtering Words Based on Length
```java
String[] words = {"Java", "Spring", "Boot", "API"};
Arrays.stream(words)
      .filter(w -> w.length() > 3)
      .forEach(System.out::println);
// Output: Java, Spring
```

### Finding the Longest Word
```java
String[] words = {"Java", "SpringBoot", "API", "Stream"};
String longestWord = Arrays.stream(words)
                           .max(Comparator.comparingInt(String::length))
                           .orElse("");
System.out.println(longestWord);
// Output: SpringBoot
```

### Reduce to Concatenate Strings
```java
String[] words = {"Java", "is", "powerful"};
String sentence = Arrays.stream(words)
                        .reduce("", (a, b) -> a + " " + b);
System.out.println(sentence.trim());
// Output: Java is powerful
```

---

## 6. Summary
| **Operation**        | **Single String** | **Array of Strings** |
|----------------------|-----------------|----------------------|
| Convert to Stream   | `str.chars()` (IntStream) | `Stream.of(array)` or `Arrays.stream(array)` |
| Convert to Word Stream | `split(" ")` | Already an array |
| Convert to IntStream | Not applicable | `mapToInt(Integer::parseInt)` |
| Convert to DoubleStream | Not applicable | `mapToDouble(Double::parseDouble)` |
| Filter              | `filter(c -> c > 'a')` | `filter(s -> s.length() > 3)` |
| Mapping            | `mapToObj(c -> (char) c)` | `map(String::toUpperCase)` |
| Reduce (Concatenation) | Not common | `reduce("", (a, b) -> a + " " + b)` |

---

### Conclusion
- Use **IntStream, LongStream, DoubleStream** for efficiency.
- Methods like `sum()`, `average()`, `map()`, `filter()`, and `reduce()` simplify operations.
- Convert between primitive and object streams using `boxed()` and `asDoubleStream()`.

Let me know if you need any modifications! 🚀

