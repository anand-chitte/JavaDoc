-- Database Schema and Sample Data

-- 1️⃣ Employees Table
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary NUMERIC(10,2),
    join_date DATE,
    manager_id INT
);

INSERT INTO employees (emp_name, department, salary, join_date, manager_id) VALUES
('Alice', 'HR', 55000, '2021-02-15', NULL),
('Bob', 'IT', 75000, '2020-06-20', 1),
('Charlie', 'IT', 80000, '2019-09-10', 1),
('David', 'Finance', 60000, '2022-01-05', NULL),
('Emma', 'Finance', 65000, '2018-07-25', 4);

-- 2️⃣ Customers Table
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(50),
    registration_date DATE
);

INSERT INTO customers (customer_name, city, registration_date) VALUES
('John Doe', 'New York', '2020-01-10'),
('Jane Smith', 'Los Angeles', '2019-05-22'),
('Sam Wilson', 'Chicago', '2021-09-15'),
('Lucy Brown', 'San Francisco', '2022-04-01');

-- 3️⃣ Orders Table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date DATE,
    total_amount NUMERIC(10,2)
);

INSERT INTO orders (customer_id, order_date, total_amount) VALUES
(1, '2023-01-12', 250.75),
(2, '2023-03-05', 120.50),
(1, '2023-05-20', 300.00),
(3, '2023-07-10', 500.90),
(4, '2023-08-22', 150.00);

-- 4️⃣ Products Table
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price NUMERIC(10,2)
);

INSERT INTO products (product_name, category, price) VALUES
('Laptop', 'Electronics', 1200.00),
('Headphones', 'Electronics', 150.00),
('Tablet', 'Electronics', 500.00),
('Coffee Maker', 'Home Appliances', 80.00),
('Smartphone', 'Electronics', 900.00);

-- 5️⃣ Order Items Table
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT
);

INSERT INTO order_items (order_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 1),
(3, 5, 1),
(4, 4, 3),
(5, 2, 1);