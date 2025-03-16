# Locks in Java

Java provides the `ReentrantLock` class for fine-grained control over synchronization. Unlike the `synchronized` keyword, `ReentrantLock` offers more flexibility, such as fairness policies, interruptible locks, and the ability to try acquiring a lock without blocking indefinitely.

## 1. Understanding `ReentrantLock`

A `ReentrantLock` is a lock that can be acquired multiple times by the same thread without causing a deadlock. Each `lock()` call must be matched with an `unlock()` call.

### Example: Using `ReentrantLock`
```java
import java.util.concurrent.locks.ReentrantLock;

class LockExample {
    private final ReentrantLock lock = new ReentrantLock();
    
    void display() {
        lock.lock(); // Acquiring the lock
        try {
            System.out.println(Thread.currentThread().getName() + " - Locked section");
            Thread.sleep(1000); // Simulating work
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock.unlock(); // Releasing the lock
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LockExample example = new LockExample();
        Runnable task = example::display;
        
        Thread t1 = new Thread(task, "Thread-1");
        Thread t2 = new Thread(task, "Thread-2");
        
        t1.start();
        t2.start();
    }
}
```
### Key Points:
- A thread acquires the lock before entering the critical section.
- The lock is always released in the `finally` block to avoid deadlocks in case of exceptions.
- If a thread already holds the lock, other threads must wait until it is released.

---

## 2. Fairness of Locks

By default, `ReentrantLock` is **unfair**, meaning that waiting threads may not acquire the lock in the order they requested it. However, a **fair lock** grants access in a **first-come, first-served** manner.

### Example: Creating Fair and Unfair Locks
```java
ReentrantLock fairLock = new ReentrantLock(true); // Fair Lock
ReentrantLock unfairLock = new ReentrantLock(false); // Unfair Lock (default)
```
### Trade-offs:
- **Fair Locks** prevent thread starvation but may reduce performance due to strict ordering.
- **Unfair Locks** provide better throughput but can lead to starvation for some threads.

---

## 3. Read-Write Locks (`ReentrantReadWriteLock`)

In applications with multiple readers but few writers, using a `ReentrantReadWriteLock` improves performance by allowing multiple threads to read simultaneously while ensuring that only one thread can write at a time.

### Example: Using Read-Write Lock
```java
import java.util.concurrent.locks.ReentrantReadWriteLock;

class ReadWriteLockExample {
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
    
    void readData() {
        lock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " - Reading data");
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock.readLock().unlock();
        }
    }
    
    void writeData() {
        lock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " - Writing data");
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock.writeLock().unlock();
        }
    }
}
```
### Key Points:
- **Multiple readers can hold the read lock simultaneously.**
- **Only one writer can hold the write lock, and it blocks all readers and other writers.**
- This improves performance in read-heavy applications, such as caching systems or databases.

---

## 4. Deadlock

A **deadlock** occurs when two or more threads are waiting indefinitely for each other's resources, causing the system to freeze.

### Example: Deadlock Scenario
```java
import java.util.concurrent.locks.ReentrantLock;

class DeadlockExample {
    private final ReentrantLock lock1 = new ReentrantLock();
    private final ReentrantLock lock2 = new ReentrantLock();
    
    void method1() {
        lock1.lock();
        try {
            System.out.println("Thread-1 acquired Lock 1");
            Thread.sleep(100);
            lock2.lock(); // Waiting for Lock 2
            try {
                System.out.println("Thread-1 acquired Lock 2");
            } finally {
                lock2.unlock();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock1.unlock();
        }
    }
    
    void method2() {
        lock2.lock();
        try {
            System.out.println("Thread-2 acquired Lock 2");
            Thread.sleep(100);
            lock1.lock(); // Waiting for Lock 1
            try {
                System.out.println("Thread-2 acquired Lock 1");
            } finally {
                lock1.unlock();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock2.unlock();
        }
    }
}

public class DeadlockTest {
    public static void main(String[] args) {
        DeadlockExample example = new DeadlockExample();
        
        Thread t1 = new Thread(example::method1);
        Thread t2 = new Thread(example::method2);
        
        t1.start();
        t2.start();
    }
}
```
### How to Prevent Deadlocks
1. **Lock Ordering:** Always acquire locks in a fixed, predefined order.
2. **Try-Lock Mechanism:** Use `tryLock()` instead of `lock()` to avoid indefinite waiting.

### Example: Using `tryLock()` to Prevent Deadlock
```java
boolean gotLock = lock1.tryLock();
if (gotLock) {
    try {
        boolean gotLock2 = lock2.tryLock();
        if (gotLock2) {
            try {
                System.out.println("Acquired both locks");
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
} else {
    System.out.println("Failed to acquire lock, retrying");
}
```
### Key Benefits:
- Prevents **deadlocks** by allowing the thread to retry or back off.
- Improves **system responsiveness** instead of blocking indefinitely.

---

## Conclusion
Java's `ReentrantLock` and `ReentrantReadWriteLock` provide powerful alternatives to `synchronized` for managing concurrency. Understanding fairness policies, deadlock prevention strategies, and read-write locking mechanisms helps in building efficient, thread-safe applications. Proper usage of these locks can significantly improve performance and maintainability in multithreaded environments.