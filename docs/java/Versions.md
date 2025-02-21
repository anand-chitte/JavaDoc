# Java Features (Version by Version)

## Java 8 (2014)
- **Lambda Expressions** - Functional-style programming with concise syntax.
- **Functional Interfaces** - `java.util.function` package introduced.
- **Streams API** - Process collections in a functional style.
- **Default Methods** - Interfaces can have default methods.
- **Optional Class** - Avoid `NullPointerException`.
- **New Date and Time API** - `java.time` package for better date/time handling.
- **Collectors and `Collectors.toList()`** - Advanced data aggregation in Streams.
- **Parallel Processing with Streams** - Multi-threaded operations on collections.
- **CompletableFuture** - Improved async programming.
- **New `StringJoiner` Class** - Simplifies string concatenation.
- **Improvements in JavaScript Engine** - Nashorn JavaScript Engine.
- **Base64 Encoding and Decoding** - `java.util.Base64` API introduced.

## Java 9 (2017)
- **Project Jigsaw (Module System)** - Breaks JDK into modules.
- **JShell (REPL)** - Interactive Java console.
- **Factory Methods for Collections** - `List.of()`, `Set.of()`, `Map.of()`.
- **Stream API Enhancements** - `takeWhile()`, `dropWhile()`, `iterate()`.
- **Optional Enhancements** - `ifPresentOrElse()`, `stream()`.
- **Private Methods in Interfaces** - Encapsulation of reusable logic.
- **Improved `CompletableFuture` API** - New utility methods added.
- **Process API Enhancements** - Better process management.
- **Compact Strings** - Optimized memory usage for `String`.

## Java 10 (2018)
- **Local Variable Type Inference (`var`)** - Improves code readability.
- **Garbage Collector Improvements** - G1 GC Parallel Full GC.
- **Application Class-Data Sharing (AppCDS)** - Optimizes startup performance.
- **Thread-Local Handshakes** - Lowers JVM pause times.
- **Optional Copy Methods** - `List.copyOf()`, `Set.copyOf()`, `Map.copyOf()`.

## Java 11 (2018 - LTS)
- **New `String` Methods** - `isBlank()`, `lines()`, `repeat()`, `strip()`.
- **HTTP Client API (Standardized)** - Replaces `HttpURLConnection`.
- **`var` in Lambda Parameters** - Allows `var` in lambdas.
- **Removal of Java EE & CORBA Modules** - Cleanup of old APIs.
- **Launch Java Programs Without `main()`** - Single-file execution (`java Hello.java`).

## Java 12 (2019)
- **Switch Expressions (Preview)** - Enables more concise switch statements.
- **`CompactNumberFormat` API** - Formats numbers compactly (e.g., `1K`, `1M`).
- **Improved G1 Garbage Collector** - Reduces pause times.

## Java 13 (2019)
- **Text Blocks (Preview)** - Multiline string literals using `"""`.
- **Switch Expressions (2nd Preview)** - Enhanced control flow.
- **Dynamic CDS Archives** - Optimized startup performance.

## Java 14 (2020)
- **Records (Preview)** - Immutable data classes with compact syntax.
- **Pattern Matching for `instanceof` (Preview)** - Simplifies type checking.
- **Helpful NullPointerException Messages** - Improved debugging.

## Java 15 (2020)
- **Text Blocks (Standard)** - Multiline string literals finalized.
- **Sealed Classes (Preview)** - Restricts subclassing.
- **Hidden Classes** - Enhances JVM optimizations.

## Java 16 (2021)
- **Pattern Matching for `instanceof` (Finalized)**.
- **Records (Finalized)**.
- **Vector API (Incubator)** - Performance improvements for mathematical computations.

## Java 17 (2021 - LTS)
- **Sealed Classes (Finalized)**.
- **New macOS Rendering Pipeline**.
- **Deprecation of Security Manager**.

## Java 18 (2022)
- **Simple Web Server** - Minimalistic HTTP server.
- **UTF-8 by Default**.

## Java 19 (2022)
- **Virtual Threads (Preview)** - Lightweight concurrency.
- **Structured Concurrency (Preview)**.

## Java 20 (2023)
- **Scoped Values (Incubator)**.
- **Vector API Enhancements**.

## Java 21 (2023 - LTS)
- **Virtual Threads (Finalized)**.
- **String Templates (Preview)** - Safer string interpolation.
- **Pattern Matching for `switch` (Finalized)**.
