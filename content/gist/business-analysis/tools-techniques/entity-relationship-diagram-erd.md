---
prev: false
next: false
---

# Entity Relationship Diagram (ERD)

The Entity Relationship Diagram (ERD), also known as a business data diagram, serves as a data model to visually represent the various business data objects involved in a product or project, along with their cardinality relationships. These business data objects could be entities like customers, orders, or products that the business deals with. It is important to note that these objects are conceptual and represent what the business focuses on; they are not exact data objects or database tables.

Cardinality is a crucial concept in ERDs. It defines how many instances of one entity relate to instances of another entity. Cardinality can be expressed in various notations such as crow’s foot notation or using symbols like 0 (for none), 1 (for one), and n (for many). Cardinality essentially informs whether the relationship between entities is "one-to-one", "one-to-many", or "many-to-many", and whether these relationships are mandatory or optional.

In an ERD, business data objects are usually depicted as rectangles, relationships are represented by lines connecting these rectangles, and cardinality is indicated by labels or symbols on these lines. This graphical representation aids in comprehending the scope of the data that is part of the system. It helps in understanding what data will be created, consumed, or manipulated by the system. It also provides insight into any business rules that govern these data objects.

ERDs are generally created early in the analysis phase to establish a clear understanding of the scope of data. This scoping is not only beneficial for the business analysts but is often vital for database designers and architects for subsequent database design phases.

In conjunction with process models, ERDs can offer a more comprehensive view by modeling data from a process perspective. For instance, if there is a process model that describes how customer orders are processed, the ERD can show what kind of data is created or modified during this process, like creating new customer records or updating inventory levels.

To summarize, an Entity Relationship Diagram serves as a vital tool for understanding and modeling the business data objects, their relationships, and cardinality, thereby assisting in the data analysis, scope definition, and subsequent phases like database design.

### Example

Below is a ERD diagram involving multiple entities for a hypothetical Library Management System. Entities involved are 'Book', 'Author', 'Publisher', 'Library', 'Member', and 'Loan'.

```mermaid
erDiagram
    Book ||--o{ Loan : has
    Member ||--o{ Loan : makes
    Library ||--|| Loan : manages
    Author ||--o{ Book : writes
    Publisher ||--o{ Book : publishes
    Library }|..|{ Book : stores
    Member }|..|{ Library : belongs_to
    Loan ||--o{ Author : includes_work_of
    Loan ||--o{ Publisher : includes_publication_of
```

In this diagram:

- The `Book` entity is related to `Loan` with an "optional to many" relationship, indicating a book may or may not be on loan.

- The `Member` entity is also related to `Loan` with an "optional to many" relationship, suggesting a member may or may not make loans.

- The `Library` entity has a "mandatory to mandatory" relationship with `Loan`, meaning each loan must be managed by one library, and each library must manage at least one loan.

- The `Author` entity has an "optional to many" relationship with `Book`, meaning an author can write zero or many books.

- The `Publisher` entity is related to `Book` with an "optional to many" relationship, meaning a publisher can publish zero or many books.

- The `Library` and `Book` entities have a non-specific relationship, suggesting that a library stores books.

- The `Member` entity is related to `Library` with a non-specific relationship, suggesting that a member belongs to a library.

- The `Loan` entity is related to both `Author` and `Publisher` with an "optional to many" relationship, indicating that a loan may include works from zero or many authors and publications from zero or many publishers.

This complex ERD provides a more detailed understanding of the system's relationships and cardinalities from a business perspective.
