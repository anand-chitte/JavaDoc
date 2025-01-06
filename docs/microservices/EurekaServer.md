# Setting Up Eureka Server with Spring Boot

Eureka is a service discovery tool that helps microservices communicate with each other by dynamically registering and discovering services. 
## 1. Add Dependencies in `pom.xml`

If you are using Maven, add the following dependencies in your `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```
Also, ensure the Spring Cloud dependency management is included:
```xml
<dependencyManagement>
    <repositories>
        <repository>
            <id>spring-milestones</id>
            <url>https://repo.spring.io/milestone</url>
        </repository>
    </repositories>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>
</dependencies>
```
## 2. Enable Eureka Server in Your Application
In your main application class, enable Eureka Server with the @EnableEurekaServer annotation:

```java
package com.example.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```
## 3. Configure application.yml or application.properties
In the src/main/resources/application.properties, add the following Eureka configuration:

```properties
server.port=8761
#Tells the server not to look for services since it is the server.
eureka.client.fetch-registry=false
#Prevents the Eureka server from registering itself as a client.
eureka.client.register-with-eureka=false
```
## 4. Run the Eureka Server
Run the Eureka server application. Once the application is up, visit http://localhost:8761/ to view the Eureka dashboard where you can see all registered microservices.

## 5. Register Clients with Eureka Server
For each microservice you want to register with Eureka, follow these steps:

Add the spring-cloud-starter-netflix-eureka-client dependency.
Add the following configuration in application.yml or application.properties:
```properties
eureka.client.fetch-registry=true
eureka.client.register-with-eureka=true
eureka.client.service-url.default-zone=http://localhost:8761/eureka/
```
This configuration registers your client with the Eureka server running at http://localhost:8761/eureka/.