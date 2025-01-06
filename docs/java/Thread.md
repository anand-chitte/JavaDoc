# Thread
A Thread is a lightweight process, and the basic unit of execution within a Java application. Threads allow multiple operations to run concurrently, making programs more efficient, especially in multi-core systems.

----

## Creating a Thread using Thread Class:
The Thread class provides several methods to control the execution of threads. To create a thread, you can either subclass Thread or implement the Runnable interface.

### 1. Subclassing the `Thread` class:
```java
class MyThread extends Thread {
    @Override
    public void run() {
        // Code to be executed by the thread
        System.out.println("Thread is running");
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread(); // Creating a thread
        thread.start(); // Starting the thread (calls the run method)
    }
}
```
### 2. Implementing the `Runnable` interface:
If you want to define your own thread behavior, you can implement the Runnable interface and pass it to a Thread object.
```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable thread is running");
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable(); // Creating a Runnable object
        Thread thread = new Thread(runnable); // Creating a thread with Runnable
        thread.start(); // Starting the thread
    }
}
```