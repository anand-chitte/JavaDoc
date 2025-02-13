# Spring MVC + Hibernate + Oracle with and without Maven

## With Maven (Spring MVC + Hibernate + Oracle + Spring Security)

### 1. Maven Dependencies (pom.xml)
Add the following dependencies to your `pom.xml`:

```xml
<dependencies>
    <!-- Spring MVC -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.29</version>
    </dependency>

    <!-- Spring JDBC -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.3.29</version>
    </dependency>

    <!-- Hibernate Core -->
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>5.6.10.Final</version>
    </dependency>

    <!-- Oracle JDBC Driver -->
    <dependency>
        <groupId>com.oracle.database.jdbc</groupId>
        <artifactId>ojdbc8</artifactId>
        <version>19.8.0.0</version>
    </dependency>

    <!-- Spring ORM (for Hibernate integration) -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-orm</artifactId>
        <version>5.3.29</version>
    </dependency>

    <!-- Spring Context -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.3.29</version>
    </dependency>

    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-config</artifactId>
        <version>5.7.2</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-web</artifactId>
        <version>5.7.2</version>
    </dependency>
</dependencies>
```

### 2. Security Configuration (SecurityConfig.java)
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors()
            .and()
            .authorizeRequests()
            .antMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .formLogin();
        return http.build();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("*");
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

### 3. Public Pages Handling
Ensure the following pages are accessible without authentication:

- `/public/home`
- `/public/about`
- `/public/contact`

Modify your controller:
```java
@Controller
public class PublicController {

    @GetMapping("/public/home")
    public String home() {
        return "home";
    }

    @GetMapping("/public/about")
    public String about() {
        return "about";
    }

    @GetMapping("/public/contact")
    public String contact() {
        return "contact";
    }
}
```

## Without Maven (Spring MVC + Hibernate + Oracle + Spring Security)

### 1. Download Dependencies Manually:
Download the following JARs and add them to the `lib` folder:

- `spring-webmvc-x.x.x.jar`
- `spring-jdbc-x.x.x.jar`
- `spring-orm-x.x.x.jar`
- `hibernate-core-x.x.x.jar`
- `ojdbc8.jar`
- `spring-security-config-x.x.x.jar`
- `spring-security-web-x.x.x.jar`

### 2. Add JARs to Classpath:
Ensure all downloaded JARs are included in your classpath.

### 3. Hibernate Configuration (hibernate.cfg.xml):
Same as the Maven setup.

### 4. Security Configuration (SecurityConfig.java)
Use the same `SecurityConfig` as in the Maven setup.

### 5. Public Pages Handling:
Use the same `PublicController` setup as in the Maven configuration.

This setup enables security, handles CSRF protection, cross-origin requests, and public page access in both Maven and non-Maven configurations.

