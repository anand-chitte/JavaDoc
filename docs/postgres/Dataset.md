# Dataset

### Create Database

### Create Tables
```sql
-- Create tables
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    join_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date DATE DEFAULT CURRENT_DATE,
    total_amount NUMERIC(10, 2)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2),
    stock INT DEFAULT 0
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL,
    total_price NUMERIC(10, 2)
);

-- Insert sample data
INSERT INTO customers (first_name, last_name, email, phone)
VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890'),
('Jane', 'Smith', 'jane.smith@example.com', '0987654321'),
('Alice', 'Johnson', 'alice.johnson@example.com', NULL),
('Bob', 'Brown', 'bob.brown@example.com', '1122334455');

INSERT INTO products (product_name, price, stock)
VALUES
('Laptop', 800.00, 10),
('Smartphone', 500.00, 20),
('Tablet', 300.00, 15),
('Headphones', 50.00, 50),
('Charger', 25.00, 100);

INSERT INTO orders (customer_id, order_date, total_amount)
VALUES
(1, '2023-12-01', 1300.00),
(2, '2023-12-02', 550.00),
(3, '2023-12-03', 350.00);

INSERT INTO order_items (order_id, product_id, quantity, total_price)
VALUES
(1, 1, 1, 800.00),
(1, 2, 1, 500.00),
(2, 2, 1, 500.00),
(2, 5, 2, 50.00),
(3, 3, 1, 300.00),
(3, 4, 1, 50.00);
```