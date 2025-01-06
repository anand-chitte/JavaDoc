# Spring Boot Profiles

Spring Boot profiles allow you to configure settings for different environments (e.g., development, testing, production) without changing the code. Profiles can have specific configuration properties, beans, or components active only in that profile.

---

## 1. Defining Profiles in `application.properties` or `application.yml`

You can define profile-specific properties in the `application.properties` or `application.yml` file. Below is an example of configurations for `dev`, `test`, and `prod` profiles:

### Default Configuration (`application.properties`)
```properties
# Default configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
```
### Development Profile (application-dev.properties)
```properties
# dev-specific configuration
spring.datasource.url=jdbc:mysql://localhost:3306/devdb
spring.datasource.username=devuser
spring.datasource.password=devpassword
```

### Production Profile (application-prod.properties)
```properties
# prod-specific configuration
spring.datasource.url=jdbc:mysql://prod-db-host:3306/proddb
spring.datasource.username=produser
spring.datasource.password=prodpassword
```

## 2. Activating Profiles
You can activate a profile using the following methods:

### a. Using spring.profiles.active in application.properties
```properties
spring.profiles.active=dev
```
### b. Using Command Line Parameters
```bash
java -jar myapp.jar --spring.profiles.active=dev
```
### c. Using Environment Variables
```bash
export SPRING_PROFILES_ACTIVE=dev
```