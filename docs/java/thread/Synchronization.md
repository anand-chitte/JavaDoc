# Synchronization in Java

## What is Synchronization?
Synchronization in Java ensures that multiple threads do not access shared resources concurrently, preventing data inconsistency, race conditions, and unexpected behavior in a multithreaded environment.

## Synchronized Methods and Blocks
Java provides the `synchronized` keyword to enforce exclusive access to critical sections of code.

### Example: Synchronized Method
```java
class SharedResource {
    synchronized void printNumbers() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Example: Synchronized Block
```java
class BlockExample {
    void printNumbers() {
        synchronized (this) {
            for (int i = 1; i <= 5; i++) {
                System.out.println(i);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```
---

## Thread Communication
Java provides `wait()`, `notify()`, and `notifyAll()` methods to enable communication between threads.

### Example: Thread Communication
```java
class SharedResource {
    synchronized void process() {
        try {
            System.out.println("Waiting...");
            wait();
            System.out.println("Resumed");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    
    synchronized void resumeProcess() {
        notify();
    }
}
```

---

## Thread Safety
Thread-safe code ensures that shared resources are accessed correctly in a multithreaded environment.

### Techniques for Thread Safety:
- **Synchronization**: Using `synchronized` methods or blocks.
- **Locks**: Using `ReentrantLock` for finer control.
- **Atomic Variables**: Using classes from `java.util.concurrent.atomic` like `AtomicInteger`.

### Example: Using Atomic Variables
```java
import java.util.concurrent.atomic.AtomicInteger;

class AtomicExample {
    private final AtomicInteger count = new AtomicInteger(0);
    
    void increment() {
        count.incrementAndGet();
    }
    
    int getCount() {
        return count.get();
    }
}
```

---

## Thread Pooling
Thread pooling improves performance by reusing a fixed number of threads instead of creating new ones for each task.

### Example: Using ExecutorService
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        for (int i = 0; i < 5; i++) {
            executor.execute(() -> System.out.println("Task executed by " + Thread.currentThread().getName()));
        }
        
        executor.shutdown();
    }
}
```

---

## Conclusion
Synchronization in Java is crucial for ensuring safe multi-threaded operations. Techniques such as `synchronized` methods/blocks, `ReentrantLock`, `ReadWriteLock`, thread communication mechanisms, and thread pooling help in building efficient and thread-safe applications.

