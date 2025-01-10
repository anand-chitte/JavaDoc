# Questions

## Basic Queries
1. Retrieve all records from the customers table.
```sql
select * from customers;
```
2. List all products whose stock is less than 20.
```sql
select * from products where stock<20;
```
3. Show all orders placed in December 2023.
```sql
select * from orders where order_date between '2023-12-01' and '2023-12-30';
```
4. Find the customer details for those who have not provided a phone number.
```sql
select * from customers where phone is null;
```

## Intermediate Queries
1. Write a query to calculate the total revenue from all orders.
```sql
select sum(total_amount) from orders;
```
2. List all customers who have placed orders, along with their order count.
```sql
select customer_id, count(order_id) as count from orders group by customer_id;
```
4. Find the total quantity sold for each product.

```sql
select product_id,count(order_id) as quantity from order_items group by product_id;
```
4. Write a query to update the stock of a product after a sale.
```sql
UPDATE products
SET stock = stock - (
    SELECT SUM(quantity)
    FROM order_items
    WHERE order_items.product_id = products.product_id
)
WHERE product_id IN (
    SELECT product_id
    FROM order_items
);
```

## Joins
1. Retrieve all orders along with the customer names who placed them.
```sql
select first_name, last_name, order_id
from customers 
inner join orders
on customers.customer_id = orders.customer_id;
```
2. List all order items along with the product name and total price for each item.
```sql
select order_id, product_name, price  
from order_items 
left join products
on products.product_id = order_items.product_id;
```
3. Find the customers who purchased "Laptop."
```sql
SELECT DISTINCT c.first_name, c.last_name
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
WHERE p.product_name = 'Laptop';
```

## Advanced Queries
1. Find the top 3 products by revenue.
```sql
SELECT p.product_name, SUM(p.price * oi.quantity) AS revenue
FROM products p
INNER JOIN order_items oi
ON p.product_id = oi.product_id
GROUP BY p.product_name
ORDER BY revenue DESC
LIMIT 3;
```
2. Identify customers who have spent more than $1000 on orders.
```sql
select c.first_name, c.last_name, o.total_amount
from customers c
inner join orders o
on c.customer_id=o.customer_id
where o.total_amount > 1000;
```
3. Retrieve all customers who placed orders in the last 30 days.
```sql
select c.first_name, c.last_name
from customers c
inner join orders o
on c.customer_id = o.customer_id
where order_date >= current_date - interval '30 days';
```
4. Write a query to list customers who haven’t placed any orders.
```sql
SELECT c.first_name, c.last_name
FROM customers c
LEFT JOIN orders o
ON c.customer_id = o.customer_id
WHERE o.customer_id IS NULL;
```













