# Java Flight Recorder (JFR)

Java Flight Recorder (JFR) is a powerful tool built into the Java Virtual Machine (JVM) for monitoring and diagnosing application performance and runtime behavior. It collects detailed execution data with minimal overhead, making it suitable for both production and development environments.

## Key Features
1. **Low Overhead** – Designed for production use with minimal performance impact.
2. **Event-Based System** – Captures JVM events like garbage collection, thread activity, I/O, CPU usage, exceptions, and more.
3. **Integration with JDK Mission Control (JMC)** – Provides a GUI for analyzing JFR recordings.
4. **Custom Events** – Allows developers to create and record custom application events.
5. **Continuous Profiling** – Can be enabled continuously or on-demand.

## How to Enable JFR

### 1. Start with Java Command
```sh
java -XX:StartFlightRecording=filename=myrecording.jfr,duration=60s,settings=profile -jar myapp.jar
```
- `filename=myrecording.jfr` → Specifies the output file.
- `duration=60s` → Records for 60 seconds.
- `settings=profile` → Uses a pre-configured profiling template.

### 2. Enable JFR in a Running JVM
```sh
jcmd <pid> JFR.start name=MyRecording filename=myrecording.jfr
```
- `<pid>` is the process ID of the Java application.

### 3. Stop and Dump Recording
```sh
jcmd <pid> JFR.dump name=MyRecording filename=myrecording.jfr
jcmd <pid> JFR.stop name=MyRecording
```

## Analyzing JFR Data
- **JDK Mission Control (JMC):** Open the `.jfr` file in JMC for visualization and analysis.
- **Programmatic Analysis:** Use the `jdk.jfr.consumer` package to read and process JFR events in Java.

## Example: Custom JFR Event
```java
import jdk.jfr.Event;
import jdk.jfr.Label;
import jdk.jfr.Name;

@Name("com.myapp.MyEvent")
@Label("My Custom Event")
class MyEvent extends Event {
    @Label("Message")
    String message;

    public MyEvent(String message) {
        this.message = message;
    }
}

public class Main {
    public static void main(String[] args) {
        MyEvent event = new MyEvent("This is a custom JFR event");
        event.commit(); // Record the event
    }
}
```

## Use Cases
- **Performance Profiling** – Identify CPU, memory, and I/O bottlenecks.
- **Garbage Collection Analysis** – Understand GC behavior and optimize memory usage.
- **Thread Monitoring** – Detect deadlocks and thread contention.
- **Exception and Error Tracking** – Capture stack traces and application failures.