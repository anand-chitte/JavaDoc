## Hibernate Configuration
Hibernate can be configured using XML files or Java-based configuration.

### 1. XML-Based Configuration
Create a `hibernate.cfg.xml` file:
```xml
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.driver_class">org.postgresql.Driver</property>
        <property name="hibernate.connection.url">jdbc:postgresql://localhost:5432/mydb</property>
        <property name="hibernate.connection.username">postgres</property>
        <property name="hibernate.connection.password">password</property>
        <property name="hibernate.dialect">org.hibernate.dialect.PostgreSQLDialect</property>
        <property name="hibernate.show_sql">true</property>
        <property name="hibernate.hbm2ddl.auto">update</property>
    </session-factory>
</hibernate-configuration>
```

### 2. Java-Based Configuration
```java
@Configuration
public class HibernateConfig {
    @Bean
    public SessionFactory sessionFactory() {
        Configuration configuration = new Configuration();
        configuration.configure("hibernate.cfg.xml");
        return configuration.buildSessionFactory();
    }
}
```

## Hibernate Annotations
Hibernate allows mapping entities using annotations instead of XML.

### Example Entity Class
```java
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name", nullable = false)
    private String name;
    
    @Column(name = "salary")
    private double salary;

    // Getters and Setters
}
```

## CRUD Operations in Hibernate
### 1. Save an Entity
#### Using `save()`
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Employee emp = new Employee("John Doe", 50000);
session.save(emp);
tx.commit();
session.close();
```

#### Using `persist()` (JPA Standard)
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Employee emp = new Employee("Jane Doe", 60000);
session.persist(emp);
tx.commit();
session.close();
```

### 2. Retrieve an Entity
#### Using `get()` (Returns null if not found)
```java
Session session = sessionFactory.openSession();
Employee emp = session.get(Employee.class, 1L);
System.out.println(emp.getName());
session.close();
```

#### Using `load()` (Throws exception if not found)
```java
Session session = sessionFactory.openSession();
Employee emp = session.load(Employee.class, 1L);
System.out.println(emp.getName());
session.close();
```

### 3. Update an Entity
#### Using `update()`
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Employee emp = session.get(Employee.class, 1L);
emp.setSalary(60000);
session.update(emp);
tx.commit();
session.close();
```

#### Using `merge()` (Useful for detached entities)
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Employee detachedEmp = new Employee();
detachedEmp.setId(1L);
detachedEmp.setSalary(65000);
session.merge(detachedEmp);
tx.commit();
session.close();
```

### 4. Delete an Entity
#### Using `delete()`
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Employee emp = session.get(Employee.class, 1L);
session.delete(emp);
tx.commit();
session.close();
```

#### Using HQL Query
```java
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
String hql = "DELETE FROM Employee WHERE id = :employeeId";
Query query = session.createQuery(hql);
query.setParameter("employeeId", 1L);
query.executeUpdate();
tx.commit();
session.close();
```