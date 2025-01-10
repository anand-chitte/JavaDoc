# Spring Container

Spring Container is a core concept responsible for managing the lifecycle, configuration, and dependency injection of the beans in a Spring application.
It is the backbone of the Spring Framework, enabling the implementation of the Inversion of Control (IoC) principle.

# Key Components of the Spring Container

## **BeanFactory**
- The simplest and most basic container in Spring.
- Provides basic support for **Dependency Injection**.
- Does not support advanced features like event propagation, AOP, or annotation-based configuration.
- **Usage**: `org.springframework.beans.factory.BeanFactory`.

## **ApplicationContext**
- A more advanced container than `BeanFactory`.
- Extends `BeanFactory` to provide additional features like event propagation, declarative mechanisms, and internationalization.

### Common Implementations:
1. **`ClassPathXmlApplicationContext`**:  
   Loads context definition from an XML file in the classpath.
2. **`FileSystemXmlApplicationContext`**:  
   Loads context definition from an XML file in the file system.
3. **`AnnotationConfigApplicationContext`**:  
   Loads context definition using Java-based configuration classes.

- **Usage**: `org.springframework.context.ApplicationContext`.

---

# Responsibilities of the Spring Container

### **Bean Creation**
- Instantiates beans as defined in the configuration file (XML, Java, or annotations).

### **Dependency Injection**
- Resolves and injects dependencies specified in the bean definitions.

### **Bean Lifecycle Management**
- Manages the lifecycle of beans from initialization to destruction.

### **Configuration**
- Reads metadata from configuration files or annotations to determine how to configure and manage beans.

### **Advanced Features** *(only in `ApplicationContext`)*:
- **Event handling**: Via `ApplicationEvent` and `ApplicationListener`.
- **MessageSource**: Supports internationalization (i18n).
- **Spring AOP**: Supports aspect-oriented programming and declarative transaction management.

---