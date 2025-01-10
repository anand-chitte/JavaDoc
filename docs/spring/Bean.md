# Types of Beans in Spring

## 1. Singleton Beans
- This is the **default** scope for beans in Spring.
- A **single instance** of the bean is created, and it is shared across the entire Spring container.
- The **same instance** is returned whenever it is injected into any other class.

## 2. Prototype Beans
- A **new instance** of the bean is created every time it is requested.
- The bean is **not shared** and is returned as a new object each time it is injected.

## 3. Request Beans
- The bean is created once per **HTTP request**. This scope is typically used in **web applications**.
- The bean is **destroyed** once the request is completed.

## 4. Session Beans
- The bean is created once per **HTTP session**.
- It is typically used to maintain **state across multiple requests** in a session.

## 5. Global Session Beans
- This scope is used in a **portlet-based web application**.
- The bean is created once per **global HTTP session**.

## 6. Application Beans
- This scope means that the bean will be created once per **Spring ApplicationContext**.
- It is typically used for **application-wide beans** that are shared across all requests and sessions.

# Lifecycle of Beans in the Spring Container

1. **Instantiation**:  
   Beans are created.
2. **Property Setting**:  
   Dependencies are injected.
3. **Custom Initialization**:  
   Initialization methods (e.g., `@PostConstruct` or `init-method`) are executed.
4. **Bean Usage**:  
   Beans are ready to be used.
5. **Destruction**:  
   Cleanup methods (e.g., `@PreDestroy` or `destroy-method`) are executed when the container shuts down.
