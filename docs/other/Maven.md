# Maven

Maven is a build automation tool primarily used for Java projects. It simplifies the process of building, testing, packaging, and deploying applications. Maven uses an XML configuration file called `pom.xml` (Project Object Model) to define project dependencies, build configurations, and other project-related settings.

## Key Features of Maven

1. **Dependency Management**  
   Maven allows you to specify external libraries (dependencies) that your project needs. It automatically downloads and manages these dependencies from remote repositories (like Maven Central).

2. **Build Automation**  
   Maven automates the build process, which includes compiling code, running tests, packaging the project into JARs or WARs, and generating documentation.

3. **Standardized Project Structure**  
   Maven enforces a standard directory structure, making it easier for developers to understand and navigate projects.

4. **Plugin-Based System**  
   Maven provides a wide range of plugins for various tasks, such as compiling code, running tests, generating reports, and deploying applications.

5. **Multi-Module Projects**  
   Maven supports multi-module projects, allowing you to organize related sub-projects under one parent project.

6. **Lifecycle Management**  
   Maven defines a series of build phases (such as `compile`, `test`, `package`, `install`, and `deploy`) that describe the steps in the build process, making it easier to manage.

Maven is widely used in Java development for its ability to streamline and simplify the build process and manage project dependencies effectively.

---

## **Maven Commands**

- `mvn --version` - Check Maven version.  
- `mvn clean` - Clean the project (remove `target/` directory).  
- `mvn compile` - Compile the project source code.  
- `mvn test` - Run tests.  
- `mvn package` - Compile and package the code into a `.jar` or `.war`.  
- `mvn install` - Install the package into the local repository.  
- `mvn deploy` - Deploy the package to a remote repository.  
- `mvn dependency:tree` - Display the project’s dependency tree.  
- `mvn clean install` - Clean, compile, test, and install the package in one step.  
- `mvn exec:java -Dexec.mainClass=<class>` - Run a Java class.  
- `mvn help:describe -Dcmd=<goal>` - Get details about a specific goal.  

---

## **Spring Boot Commands**

- `mvn spring-boot:run` - Run the Spring Boot application.  
- `mvn spring-boot:start` - Start a Spring Boot application (non-blocking).  
- `mvn spring-boot:stop` - Stop a running Spring Boot application.  
- `mvn spring-boot:repackage` - Create an executable JAR or WAR.  
- `mvn clean spring-boot:run` - Clean and run the Spring Boot application.  
- `mvn spring-boot:build-image` - Build a container image for the application.  
- `java -jar <app>.jar` - Run the Spring Boot application from the packaged JAR.  
- `mvn spring-boot:build-info` - Generate build information for the application.  

---

## **Maven Profile Commands**

- `mvn clean install -P<profile>` - Build the project using a specific profile.  
- `mvn help:active-profiles` - Display the active profiles in the project.  

---

## **Maven Debugging Commands**

- `mvn -X clean install` - Run Maven with debug output.  
- `mvn -Dmaven.test.skip=true` - Skip tests during the build.  
- `mvn -DskipTests` - Compile tests but do not execute them.  

---

## **Spring Boot Debugging and Configuration**

- `mvn spring-boot:run -Dspring-boot.run.profiles=<profile>` - Run with a specific Spring profile.  
- `mvn spring-boot:run -Dspring-boot.run.arguments=--<property>=<value>` - Pass arguments to the application.  
- `java -jar <app>.jar --spring.profiles.active=<profile>` - Run with a specific profile from the JAR.  
- `java -jar <app>.jar --<property>=<value>` - Override properties at runtime.  

---
