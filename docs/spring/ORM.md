# Object-Relational Mapping (ORM)

**ORM** stands for **Object-Relational Mapping**, a programming technique used to map objects in your code (like classes and their instances) to relational database tables. It enables developers to interact with databases using high-level, object-oriented syntax rather than writing SQL queries.

---

## Key Features of ORM

### 1. **Abstraction**
- Hides the complexity of database operations.
- Allows developers to focus on application logic rather than database-specific syntax.

### 2. **Object Mapping**
- Maps database tables to classes.
- Maps table rows to class instances and table columns to object attributes.

### 3. **Automatic Query Generation**
- Automatically generates SQL queries for common operations like `INSERT`, `UPDATE`, `DELETE`, and `SELECT`.

### 4. **Database Independence**
- Abstracts the underlying database.
- Enables application portability across different database systems.

---

## Benefits of Using ORM

### 1. **Productivity**
- Reduces the amount of boilerplate code needed for database operations.

### 2. **Maintainability**
- Makes code easier to read and maintain by aligning it with object-oriented design principles.

### 3. **Security**
- Reduces the risk of SQL injection by using parameterized queries or prepared statements under the hood.

### 4. **Flexibility**
- Provides tools to migrate between different database systems with minimal code changes.

### 5. **Relationships**
- Simplifies handling of database relationships like:
  - **One-to-One**
  - **One-to-Many**
  - **Many-to-Many**
