---
prev: false
next: false
---

# Event List

An Event List is a crucial scope model that enumerates external events capable of instigating a behavior within the solution. These are events that the solution is expected to respond to as part of its scope. An Event List serves as a foundational element in shaping the scope of work from an event-handling perspective, and it's generally created in the early stages of a project. As the project advances, this list may be updated to include newly identified events that the solution needs to address.

An Event Response Table, which is a related but more extensive model, takes this a step further. In addition to listing external triggers, it outlines how the system is expected to respond to these triggers. This table becomes a valuable tool in identifying possible use cases, user stories, or system flows that will be a part of the requirements elicitation and specification process.

For instance, a simplified sample of an Event Response Table could be:

| Event Trigger     | Description               | System Response                    | Related Use Case     |
| ----------------- | ------------------------- | ---------------------------------- | -------------------- |
| User Login        | User enters login details | Authenticate and load user profile | User Authentication  |
| New Order Placed  | Customer places an order  | Validate and process the order     | Order Processing     |
| Payment Received  | Payment gateway event     | Confirm payment and update status  | Payment Confirmation |
| Item Out of Stock | Inventory level drops     | Send restock alert                 | Inventory Management |

In this sample, an Event List would be composed of just the "Event Trigger" and "Description" columns, detailing what triggers are in scope for the solution to react to. The "System Response" and "Related Use Case" columns make it an Event Response Table, providing additional details on how the system should react to the specified events and associating those reactions with use cases, user stories, or system flows.
