## What is a Thread?
A thread is the smallest unit of execution within a process. It is a lightweight sub-process that runs independently within a program. Java supports multithreading, which allows multiple threads to execute concurrently, sharing the same resources but operating independently.

### Key Characteristics of Threads:
- A thread has its own execution stack but shares memory with other threads in the same process.
- Threads can run concurrently, making applications more efficient and responsive.
- Java provides built-in support for multithreading using the `Thread` class and `Runnable` interface.

## Multithreading in Java
Multithreading is a process that allows multiple threads to execute concurrently, sharing the same resources. It enhances performance by utilizing CPU efficiently and improving the responsiveness of applications.

### Advantages of Multithreading:
- **Efficient CPU Usage**: Allows better utilization of CPU cores.
- **Faster Execution**: Parallel execution speeds up processing.
- **Resource Sharing**: Multiple threads share memory and resources efficiently.
- **Enhanced Responsiveness**: Keeps applications responsive by executing background tasks.
- **Better User Experience**: GUI applications remain smooth and interactive.

---
## How to Create a Thread
Threads can be created in two primary ways:

### 1. Extending the `Thread` Class
The `Thread` class in Java provides an inbuilt mechanism to create threads. This approach requires extending the `Thread` class and overriding the `run()` method.

#### Example:
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
    
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start(); // Starts a new thread
    }
}
```

### 2. Implementing the `Runnable` Interface
A more flexible way to create threads is by implementing the `Runnable` interface. This allows better code reusability and enables multiple inheritance.

#### Example:
```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }
    
    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start(); // Starts a new thread
    }
}
```

### Key Differences:
- Using `Thread` class ties up the class to thread-related functionalities, reducing flexibility.
- Using `Runnable` allows the class to extend other classes while still enabling multithreading.

---
## Thread Lifecycle
A thread in Java goes through multiple states during its execution.

### 1. **New (Created)**
- A thread is created but hasn’t started yet.
- Example: `Thread t = new Thread();`

### 2. **Runnable (Ready to Run)**
- The thread is ready to run but waiting for CPU scheduling.
- Example: `t.start();`

### 3. **Blocked (Waiting for Lock)**
- The thread is waiting to acquire a lock to proceed.

### 4. **Waiting (Indefinite Wait)**
- The thread waits indefinitely until notified (`wait()`).

### 5. **Timed Waiting (Waits for a Defined Time)**
- The thread waits for a specific period (`sleep(ms)`, `join(time)`).

### 6. **Terminated (Dead)**
- The thread has finished execution or was stopped.

#### Example:
```java
class LifecycleExample implements Runnable {
    public void run() {
        System.out.println("Thread is in running state");
    }
    
    public static void main(String[] args) {
        Thread t = new Thread(new LifecycleExample());
        System.out.println("Thread is in New state");
        t.start(); // Runnable -> Running
    }
}
```

---
## Thread vs Runnable
| Feature | Thread Class | Runnable Interface |
|---------|-------------|--------------------|
| Inheritance | Extends `Thread` class | Implements `Runnable` interface |
| Multiple Inheritance | Not possible | Possible with other classes |
| Code Reusability | Limited | High |
| Flexibility | Less flexible | More flexible |
| Memory Overhead | Higher (separate object for thread) | Lower (shares common object) |
| Recommended for | Simple use cases | Large-scale applications |

---
## Thread Class Methods
The `Thread` class provides several useful methods for thread control.

### 1. `start()`
- Begins execution of the thread.
- Internally calls the `run()` method.
- Example:
```java
Thread t = new MyThread();
t.start();
```

### 2. `run()`
- Contains the code to be executed in the new thread.
- If called directly, it runs in the main thread instead of creating a new one.

### 3. `sleep(milliseconds)`
- Pauses the thread for a given duration.
- Example:
```java
try {
    Thread.sleep(1000); // 1 second pause
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

### 4. `join()`
- Makes the calling thread wait for another thread to finish.
- Example:
```java
Thread t1 = new Thread(() -> {
    System.out.println("Thread 1 started");
});
t1.start();
t1.join(); // Waits for t1 to complete before proceeding
```

### 5. `yield()`
- Hints that the current thread is willing to yield execution to other threads of the same priority.
- Example:
```java
Thread.yield();
```

### 6. `interrupt()`
- Interrupts a sleeping or waiting thread.
- Example:
```java
t1.interrupt();
```

---
## Summary
- **Multithreading** enables concurrent execution of tasks, enhancing efficiency.
- **Threads can be created** by extending `Thread` or implementing `Runnable`.
- **Thread lifecycle** consists of multiple states like `New`, `Runnable`, `Blocked`, `Waiting`, `Timed Waiting`, and `Terminated`.
- **Using `Runnable`** is recommended over `Thread` for better reusability and flexibility.
- **Thread class methods** help manage execution flow effectively.

Understanding these concepts helps in developing efficient and responsive Java applications!

