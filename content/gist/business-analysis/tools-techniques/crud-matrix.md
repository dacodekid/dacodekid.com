---
prev: false
next: false
---

# CRUD Matrix

A CRUD (Create, Read, Update, Delete) Matrix is an analytical tool used to identify the interactions between different entities (like data objects) and system functionalities. It helps to recognize where each function performs one of the CRUD operations on a particular entity. This can be essential for understanding system behavior and for specifying requirements for a system.

Here's a sample CRUD Matrix with some example data:

| Functionality / Data Object | Customer | Product | Order |
| --------------------------- | -------- | ------- | ----- |
| Add Customer                | C        |         |       |
| View Customer               | R        |         |       |
| Update Customer             | U        |         |       |
| Delete Customer             | D        |         |       |
| List Products               |          | R       |       |
| Add Product                 |          | C       |       |
| Update Product              |          | U       |       |
| Remove Product              |          | D       |       |
| Create Order                |          |         | C     |
| View Order                  | R        | R       | R     |
| Update Order                |          |         | U     |
| Cancel Order                |          |         | D     |

In this matrix:

- Columns represent data objects like "Customer," "Product," and "Order."
- Rows signify different functionalities such as "Add Customer," "View Customer," etc.

The letters (C, R, U, D) indicate which type of operation (Create, Read, Update, Delete) each functionality performs on each data object.

For example, the "Add Customer" functionality Creates a "Customer" (hence the 'C' under the "Customer" column). The "View Order" functionality Reads from "Customer," "Product," and "Order" (indicated by 'R's in the respective columns).

This is a simple example, but CRUD Matrices can get much more complex based on the complexity and scope of the system.
