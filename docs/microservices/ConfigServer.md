# Spring Cloud Config Server Setup

In a Spring Boot microservices architecture, a **Config Server** is used to centralize and manage the configuration of all microservices. The following steps show how to set up a Spring Cloud Config Server and configure the microservices to consume configurations.

## 1. Spring Cloud Config Server Setup

### a. Add Dependencies to `pom.xml`

To enable Spring Cloud Config Server in your project, add the following dependency:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```
### b. Enable Config Server in Your Application
In the main application class of your Config Server, add the `@EnableConfigServer` annotation:
```java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```
### c. Configuration in application.properties
Configure the Config Server to source the properties (e.g., from a Git repository):
```properties
# Config Server Settings
spring.application.name=config-server
server.port=8071

# Git repository configuration for the config server
spring.cloud.config.server.git.uri=https://github.com/your-org/your-config-repo
spring.cloud.config.server.git.clone-on-start=true

# Optionally, if you want to use file system
# spring.cloud.config.server.native.search-locations=file:///path/to/configs
```
## 2. Config Client Setup
Each microservice (client) that will fetch configurations from the Config Server needs to follow these steps.

### a. Add Dependencies to pom.xml
Add the following dependency in the microservice's pom.xml file:
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```
### b. Enable Configuration in application.properties
In your client microservice, specify the URI of the Config Server in the application.yml file:
```properties
# Config Client Settings
spring.application.name=your-service-name
spring.profiles.active=default

# URI of the Config Server
spring.cloud.config.uri=http://localhost:8071

# Optionally, define a timeout for the connection to the Config Server
spring.cloud.config.timeout=1000
```
## 3. Config Server Data Source
The Config Server can source configuration from different locations:

### a. Git Repository
Store configuration files (such as application.properties or application.yml) in a Git repository. The uri configuration in the Config Server should point to this Git repository.

### b. File System
The Config Server can read configuration files directly from the local file system.

### c. Vault
You can configure the Config Server to read from HashiCorp Vault for more secure configuration management.

Example Structure in a Git Repo:
In your Git repository, you might store the configuration for different applications like this:

- **your-service-name-dev.properties**: Configuration file for your service in the development environment.
- **your-service-name-prod.properties**: Configuration file for your service in the production environment.
- **application-dev.properties**: General configuration for the application in the development environment.
- **application-prod.properties**: General configuration for the application in the production environment.
- **bootstrap.yml**: Contains configuration that is loaded during the initialization phase of the application.

You can use these configuration files to manage different environments for your applications.
