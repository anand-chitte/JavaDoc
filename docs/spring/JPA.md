# Java Persistence API (JPA)

Java Persistence API (JPA) is a specification in Java that allows developers to map Java objects to database tables and manage relational data in Java applications. It provides an abstraction over Object-Relational Mapping (ORM) frameworks like Hibernate, EclipseLink, and others.

JPA is used to handle data persistence in an object-oriented way, making it easier to interact with databases.

---

## Core Features of JPA

### **Entity Classes**
- Java classes annotated with `@Entity` represent database tables.
- Fields in these classes map to columns in the corresponding table.

### **Annotations for Mapping**
- `@Entity`: Marks the class as an entity.
- `@Table`: Specifies the table name.
- `@Id`: Defines the primary key.
- `@GeneratedValue`: Specifies how primary key values are generated.
- `@Column`: Maps a field to a specific column.

### **Relationships**
- **Annotations for Relationships**:
  - `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany` for defining relationships between entities.
- **Customizing Relationships**:
  - `@JoinColumn` and `@JoinTable`.

### **Query Language**
- JPA provides **JPQL (Java Persistence Query Language)**, a database-agnostic query language.
- Example: 
```sql
  SELECT e FROM Employee e WHERE e.salary > :amount
```
### ** EntityManager
- The core interface for managing the persistence lifecycle of entities.
- Provides methods like:
  - persist
  - merge
  - remove
  - find

### **Transactions**
- Supports declarative transaction management.
- Can be managed:
  - Via annotations like @Transactional in Spring.
  - Programmatically.
### **Caching**
- JPA supports:
  - First-level caching (per session).
  - Second-level caching (shared).