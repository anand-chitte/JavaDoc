# Working of HashMap in Java

A **HashMap** in Java is a data structure that stores key-value pairs. Each key in the HashMap is unique, and it is associated with a specific value. It is part of the `java.util` package and implements the `Map` interface.

## Key Concepts of HashMap

### 1. Buckets
- Internally, a **HashMap** uses an array of **buckets** (also known as "bins" or "slots"). These buckets are used to store the key-value pairs. The **bucket size** refers to the number of available buckets in the underlying array.
- When a key-value pair is inserted into the HashMap, the **bucket index** is determined based on the **hash code** of the key, which is calculated by the `hashCode()` method. The bucket index is then computed as:  
  `bucket index = hashCode(key) % bucket size`.
- **Bucket size** is an internal property that can be configured but typically defaults to 16 in many implementations of HashMap. When the number of entries in the HashMap exceeds the load factor multiplied by the current bucket size, the bucket size will increase, typically doubling.

### 2. Hashing
- **Hash Code Calculation**: When you insert a key-value pair into the HashMap, the hash code of the key is computed. The hash code is a number that is used to determine which bucket the key-value pair should be stored in.
- The hash code is then mapped to an index in the array of buckets. The formula used is:  
  `bucket index = hashCode(key) % bucket size`.
- For example, if the hash code of a key is `123` and the bucket size is `16`, the index will be:  
  `bucket index = 123 % 16 = 11`. This means the key-value pair will be stored in bucket 11.

### 3. Collisions
- **Collision Handling**: If two or more keys have the same hash code (i.e., they map to the same bucket), it leads to a **collision**. In this case, the HashMap stores these key-value pairs in a linked list (or tree if the collisions are high) at the same bucket index.
- When retrieving or updating values, HashMap traverses the linked list or tree to find the correct key-value pair.

### 4. Insertion
- **put(key, value)**: When you add a key-value pair, the key’s hash code is calculated, and the pair is stored in the appropriate bucket based on the index derived from the hash code.
- If the key already exists, the value is updated with the new one. If it's a new key, the pair is added to the HashMap.

### 5. Retrieving
- **get(key)**: To retrieve a value, the HashMap calculates the hash code of the key, finds the appropriate bucket, and searches for the key in that bucket (either in the linked list or tree).
- If the key is found, the corresponding value is returned.

### 6. Removing
- **remove(key)**: To remove a key-value pair, the HashMap calculates the hash code for the key, finds the appropriate bucket, and removes the pair from the linked list or tree at that bucket index.

### 7. Resize (Rehashing)
- **Load Factor**: A **load factor** determines when the HashMap should resize (rehash) the buckets. The default load factor is 0.75, meaning when 75% of the current bucket size is filled, the HashMap will resize the array of buckets.
- **Rehashing**: When the bucket size exceeds the threshold (load factor * current bucket size), the **HashMap resizes** the array, typically doubling the bucket size. All existing key-value pairs are rehashed and redistributed into the new array of buckets, ensuring even distribution and avoiding too many collisions.

## Example

```java
import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        // Create a HashMap instance with a default initial capacity of 16 buckets
        HashMap<String, Integer> map = new HashMap<>();

        // Insert key-value pairs
        map.put("Apple", 5);
        map.put("Banana", 7);
        map.put("Orange", 3);

        // Retrieve a value based on key
        System.out.println("Apple's count: " + map.get("Apple")); // Output: 5

        // Update a value
        map.put("Apple", 10);
        System.out.println("Updated Apple's count: " + map.get("Apple")); // Output: 10

        // Remove a key-value pair
        map.remove("Banana");

        // Check if a key exists
        System.out.println("Contains 'Banana'? " + map.containsKey("Banana")); // Output: false
    }
}
```