# Hibernate - CRUD Operations in Detail

## Create (Insert) Methods

### `save(Object entity)`
- Saves a new entity and returns the generated identifier.
- Works only for transient (new) objects.
- The saved entity gets an identifier immediately.
- Example:
  ```java
  Long id = (Long) session.save(employee);
  ```

### `persist(Object entity)` *(JPA Standard)*
- Similar to `save()`, but does not return an identifier.
- Recommended for managed entities.
- Example:
  ```java
  session.persist(employee);
  ```

## Retrieve (Read) Methods

### `get(Class<T> clazz, Serializable id)`
- Fetches the entity **immediately** (Eager loading).
- Returns `null` if the entity is not found.
- Example:
  ```java
  Employee emp = session.get(Employee.class, 1L);
  ```

### `load(Class<T> clazz, Serializable id)`
- Returns a **proxy** object (Lazy loading).
- Throws `ObjectNotFoundException` if the entity is not found.
- Example:
  ```java
  Employee emp = session.load(Employee.class, 1L);
  ```

### `find(Class<T> clazz, Serializable id)` *(JPA Standard)*
- Similar to `get()`, but used in `EntityManager` (JPA).
- Example:
  ```java
  Employee emp = entityManager.find(Employee.class, 1L);
  ```

### HQL Querying
- Example:
  ```java
  Query<Employee> query = session.createQuery("FROM Employee WHERE salary > :salary", Employee.class);
  query.setParameter("salary", 50000);
  List<Employee> employees = query.list();
  ```

### Criteria API
- Example:
  ```java
  CriteriaBuilder cb = session.getCriteriaBuilder();
  CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
  Root<Employee> root = cq.from(Employee.class);
  cq.select(root).where(cb.gt(root.get("salary"), 50000));
  List<Employee> employees = session.createQuery(cq).getResultList();
  ```

## Update Methods

### `update(Object entity)`
- Updates an existing entity.
- Fails if the entity is detached (not in session scope).
- Example:
  ```java
  session.update(employee);
  ```

### `merge(Object entity)`
- Merges a detached entity into the persistence context.
- Example:
  ```java
  session.merge(employee);
  ```

### `saveOrUpdate(Object entity)`
- Saves a new entity or updates an existing one.
- Example:
  ```java
  session.saveOrUpdate(employee);
  ```

### HQL Update Query
- Example:
  ```java
  Query query = session.createQuery("UPDATE Employee SET salary = :salary WHERE id = :id");
  query.setParameter("salary", 75000);
  query.setParameter("id", 1L);
  query.executeUpdate();
  ```

## Delete Methods

### `delete(Object entity)`
- Deletes an entity from the database.
- Example:
  ```java
  session.delete(employee);
  ```

### HQL Delete Query
- Example:
  ```java
  Query query = session.createQuery("DELETE FROM Employee WHERE id = :id");
  query.setParameter("id", 1L);
  query.executeUpdate();
  ```

### `remove(Object entity)` *(JPA Standard)*
- Example:
  ```java
  entityManager.remove(employee);
  ```

## Batch Processing Methods

### `session.flush()`
- Forces Hibernate to synchronize session state with the database.

### `session.clear()`
- Clears the persistence context and detaches all entities.

### `session.evict(Object entity)`
- Removes a specific entity from the session cache.

## Difference Between `get()` and `load()`
| Feature        | `get()`  | `load()`  |
|--------------|--------|--------|
| Fetching Type | Eager | Lazy (proxy object) |
| Return Type | Actual entity object | Proxy object |
| If Not Found | Returns `null` | Throws `ObjectNotFoundException` |
| Performance | Slower (hits DB immediately) | Faster (only fetches when accessed) |
| Use Case | When you need the full entity | When you want a reference without fetching immediately |

## Difference Between `save()` and `saveOrUpdate()`
| Feature | `save()` | `saveOrUpdate()` |
|---------|---------|----------------|
| Use Case | Saves new entity | Saves new or updates existing |
| Identifier Handling | Returns generated ID | Does not return ID |
| When to Use | For new objects only | For both new and existing entities |
| Performance | Slightly faster | More overhead (checks entity state) |

These methods provide flexibility when working with Hibernate. Let me know if you need more details! 🚀

