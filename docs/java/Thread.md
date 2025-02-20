# Understanding Threads in Java

## What is a Thread?
A **Thread** in Java is the smallest unit of execution within a process. It allows multiple operations to run concurrently, making applications more efficient and responsive.

## Why Use Threads?
- To perform multiple tasks simultaneously.
- To utilize multi-core processors efficiently.
- To improve application responsiveness.
- To handle asynchronous or background tasks.

## Creating a Thread in Java
There are two ways to create a thread in Java:
1. **Extending the Thread class**
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
    }
}
```
2. **Implementing the Runnable interface**
```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
```

## Thread Lifecycle
A thread in Java goes through several stages in its lifecycle:

1. **New (Created)** - The thread is created but not yet started.
2. **Runnable** - The thread is ready to run and is waiting for CPU execution.
3. **Running** - The thread is currently executing its task.
4. **Blocked/Waiting** - The thread is waiting for resources or conditions to be met before it can proceed.
5. **Terminated (Dead)** - The thread has completed its execution or was stopped.

### Thread Lifecycle Methods
- `start()` - Starts the execution of a thread.
- `run()` - Contains the code to be executed by the thread.
- `sleep(ms)` - Pauses the thread for a specific time.
- `join()` - Waits for the thread to finish execution.
- `yield()` - Suggests the scheduler to allow other threads to execute.
- `wait()` - Makes a thread wait until it is notified.
- `notify()` / `notifyAll()` - Wakes up a waiting thread.

### Example Demonstrating Thread Lifecycle
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
        try {
            Thread.sleep(2000); // Sleeping for 2 seconds
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted");
        }
        System.out.println("Thread finished execution");
    }
}

public class ThreadLifecycleDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        System.out.println("Thread State: " + t1.getState()); // NEW
        t1.start();
        System.out.println("Thread State: " + t1.getState()); // RUNNABLE
        try {
            t1.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Thread State: " + t1.getState()); // TERMINATED
    }
}
```

## Volatile Keyword
The `volatile` keyword in Java is used to ensure visibility of changes to variables across threads. It prevents the compiler from caching the variable and ensures that the latest value is always read from the main memory.

### Example Using `volatile`
```java
class VolatileExample {
    private static volatile boolean flag = true;

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            while (flag) {
                // Busy-waiting
            }
            System.out.println("Thread stopped");
        });

        t1.start();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        flag = false;
        System.out.println("Flag changed to false");
    }
}
```
### When to Use `volatile`
- When multiple threads access a shared variable.
- When updates to a variable must be immediately visible to other threads.
- When atomic operations are not required but visibility needs to be maintained.

## Conclusion
Threads are essential for achieving concurrency and efficiency in Java applications. Understanding thread creation, lifecycle, and synchronization techniques like `volatile` will help in developing robust multi-threaded applications.

