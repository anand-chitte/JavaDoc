# SQL Concepts

## Index
An **index** in SQL is a database object that improves the speed of data retrieval operations on a table by allowing the database engine to find data more quickly.

### Types of Indexes:
- **Primary Index**: Automatically created for primary keys.
- **Unique Index**: Prevents duplicate values in the indexed column.
- **Composite Index**: An index based on multiple columns, improving searches involving those columns.
- **Clustered Index**: Determines the physical order of data in a table and improves performance for range-based queries.
- **Non-Clustered Index**: Stores a separate structure from the table and contains pointers to the actual data.

### Example:
```sql
-- Creating an index on the 'name' column in a 'customers' table
CREATE INDEX idx_customer_name ON customers(name);
```

---

## ACID Properties
ACID ensures reliable processing of database transactions.

1. **Atomicity**: Ensures that a transaction is fully completed or rolled back if any part fails.
2. **Consistency**: Guarantees that the database remains in a valid state before and after a transaction.
3. **Isolation**: Ensures that concurrent transactions do not interfere with each other.
4. **Durability**: Ensures that committed transactions are permanently saved, even in case of system failure.

### Example:
```sql
-- Example of Atomicity and Durability
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

---

## Functions in SQL
A function in SQL is a reusable set of SQL statements that return a single value.

### Types of Functions:
- **Scalar Function**: Returns a single value (e.g., `LEN()`, `UPPER()`, `GETDATE()`).
- **Aggregate Function**: Operates on multiple values and returns a single result (e.g., `SUM()`, `AVG()`, `COUNT()`).
- **User-Defined Function (UDF)**: Custom functions created by users to perform specific operations.

### Example:
```sql
-- User-defined function to return full name
CREATE FUNCTION dbo.getFullName(@firstName VARCHAR(50), @lastName VARCHAR(50))
RETURNS VARCHAR(100)
AS
BEGIN
    RETURN @firstName + ' ' + @lastName
END;
```

---

## Procedure
A **Stored Procedure** is a set of SQL statements compiled and stored in the database.

### Advantages:
- Improves performance by reducing redundant code.
- Enhances security by limiting direct SQL execution.
- Supports modular programming.

### Example:
```sql
-- Stored procedure to get customer details
CREATE PROCEDURE GetCustomerByID @CustomerID INT
AS
BEGIN
    SELECT * FROM customers WHERE id = @CustomerID;
END;
```

---

## Normalization
Normalization is the process of structuring a database to reduce redundancy and improve data integrity.

### Normal Forms:
1. **1NF (First Normal Form)**: Ensures atomicity (no repeating groups or arrays in columns).
2. **2NF (Second Normal Form)**: Removes partial dependencies (every non-key column depends on the whole primary key).
3. **3NF (Third Normal Form)**: Eliminates transitive dependencies (non-key columns depend only on the primary key).
4. **BCNF (Boyce-Codd Normal Form)**: Ensures strict functional dependencies.
5. **4NF, 5NF**: Handle multi-valued and join dependencies.

### Example:
```sql
-- Example of Normalization (Splitting customer table into two tables)
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

---

## Denormalization (Opposite of Normalization)
Denormalization is the process of **introducing redundancy** into a database to improve **read performance** at the cost of additional storage and possible update anomalies.

### Key Differences: Normalization vs Denormalization

| Feature         | Normalization  | Denormalization |
|---------------|---------------|----------------|
| **Purpose**   | Reduce redundancy, improve data integrity | Improve read/query performance |
| **Data Structure** | Divides data into multiple related tables | Merges tables to reduce joins |
| **Redundancy** | Eliminates redundancy | Introduces redundancy |
| **Query Performance** | May require more joins, which can slow queries | Reduces joins, making queries faster |
| **Storage Usage** | Efficient storage usage | Increases storage due to duplicated data |
| **Use Case** | Best for transactional databases (OLTP) | Best for analytical/reporting databases (OLAP) |

### When to Use Denormalization?
- When **read performance** is more important than write performance.
- When **joins slow down queries** in a large dataset.
- When working with **data warehouses or reporting systems** (OLAP).
- When **data is mostly read** and rarely updated.

### Example:
```sql
-- Example of Denormalization (Combining tables to reduce joins)
CREATE TABLE OrdersWithCustomers (
    OrderID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    OrderDate DATE
);
```

This reduces the need to join `Customers` and `Orders` tables for every query.
