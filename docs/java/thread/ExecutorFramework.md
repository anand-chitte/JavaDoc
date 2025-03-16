# Executor Framework in Java

## Overview
The Executor framework in Java provides a high-level abstraction for managing and controlling thread execution. Instead of manually creating and managing threads, the Executor framework provides a pool of threads that can be efficiently reused, improving application performance and resource management.

## Key Components
The Executor framework consists of several key interfaces and classes that simplify thread management:

### 1. Executor
- The `Executor` interface is the root interface of the framework.
- It provides a single method `execute(Runnable command)`, which allows submission of tasks for execution.
- Example:
```java
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class ExecutorExample {
    public static void main(String[] args) {
        Executor executor = Executors.newSingleThreadExecutor();
        
        executor.execute(() -> System.out.println("Task executed by: " + Thread.currentThread().getName()));
    }
}
```

### 2. ExecutorService
- `ExecutorService` extends `Executor` and provides methods for lifecycle management, such as shutting down the executor and handling task submissions.
- Important methods:
  - `submit(Callable<T> task)`: Submits a task that returns a result.
  - `invokeAll(Collection<? extends Callable<T>> tasks)`: Executes multiple tasks and waits for their completion.
  - `shutdown()`: Initiates an orderly shutdown.
  - `shutdownNow()`: Attempts to stop all actively executing tasks.

Example:
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecutorServiceExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        
        Runnable task = () -> {
            System.out.println("Executing task: " + Thread.currentThread().getName());
        };
        
        for (int i = 0; i < 5; i++) {
            executorService.submit(task);
        }
        
        executorService.shutdown();
        try {
            if (!executorService.awaitTermination(5, TimeUnit.SECONDS)) {
                executorService.shutdownNow();
            }
        } catch (InterruptedException e) {
            executorService.shutdownNow();
        }
    }
}
```

### 3. ScheduledExecutorService
- `ScheduledExecutorService` is an extension of `ExecutorService` that supports scheduling tasks to execute after a delay or periodically.
- Methods:
  - `schedule(Runnable command, long delay, TimeUnit unit)`: Executes a task after a given delay.
  - `scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)`: Executes a task at fixed intervals.
  - `scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)`: Executes a task with a fixed delay between executions.

Example:
```java
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ScheduledExecutorExample {
    public static void main(String[] args) {
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
        
        Runnable task = () -> System.out.println("Scheduled task running at: " + System.currentTimeMillis());
        
        scheduler.scheduleAtFixedRate(task, 2, 5, TimeUnit.SECONDS);
    }
}
```

### 4. ThreadPoolExecutor
- `ThreadPoolExecutor` is the most flexible implementation of `ExecutorService`.
- It allows fine-grained control over thread pool behavior, including core and maximum pool sizes, queue types, and rejection policies.
- Constructor parameters:
  - `corePoolSize`: Minimum number of threads to keep alive.
  - `maximumPoolSize`: Maximum number of threads.
  - `keepAliveTime`: Time that excess idle threads wait before termination.
  - `workQueue`: Queue to hold tasks before execution.
  - `handler`: Policy for handling tasks when the queue is full.

Example:
```java
import java.util.concurrent.*;

public class ThreadPoolExecutorExample {
    public static void main(String[] args) {
        ThreadPoolExecutor executor = new ThreadPoolExecutor(2, 5, 1, TimeUnit.SECONDS, new LinkedBlockingQueue<>(10));
        
        for (int i = 0; i < 10; i++) {
            executor.execute(() -> System.out.println("Task executed by: " + Thread.currentThread().getName()));
        }
        
        executor.shutdown();
    }
}
```

### 5. ForkJoinPool
- `ForkJoinPool` is specialized for parallel processing using the Fork-Join framework.
- It uses the **work-stealing algorithm**, where idle threads can take tasks from busy threads.
- Suitable for recursive tasks that can be broken into smaller subtasks.

Example:
```java
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ForkJoinPool;

class SumTask extends RecursiveTask<Integer> {
    private int[] arr;
    private int start, end;
    
    public SumTask(int[] arr, int start, int end) {
        this.arr = arr;
        this.start = start;
        this.end = end;
    }
    
    @Override
    protected Integer compute() {
        if (end - start <= 2) {
            int sum = 0;
            for (int i = start; i < end; i++) {
                sum += arr[i];
            }
            return sum;
        }
        int mid = (start + end) / 2;
        SumTask leftTask = new SumTask(arr, start, mid);
        SumTask rightTask = new SumTask(arr, mid, end);
        leftTask.fork();
        return rightTask.compute() + leftTask.join();
    }
}

public class ForkJoinPoolExample {
    public static void main(String[] args) {
        ForkJoinPool pool = new ForkJoinPool();
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8};
        SumTask task = new SumTask(numbers, 0, numbers.length);
        int result = pool.invoke(task);
        System.out.println("Sum: " + result);
    }
}
```

## Advantages of Executor Framework
1. **Better Resource Management**: Thread pools reduce resource overhead by reusing threads.
2. **Concurrency Control**: Limits the number of concurrent tasks to prevent excessive resource consumption.
3. **Task Scheduling**: Provides built-in scheduling mechanisms.
4. **Scalability**: Dynamically adjusts threads based on workload.
5. **Improved Performance**: Reduces thread creation overhead.

## Conclusion
The Executor framework simplifies multi-threading in Java by abstracting thread creation and management. It provides various implementations, including fixed thread pools, scheduled tasks, and parallel processing, making it an essential tool for concurrent programming.