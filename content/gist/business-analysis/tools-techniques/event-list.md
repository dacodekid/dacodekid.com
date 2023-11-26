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

## Quiz

```quiz
Question: A business analyst is outlining how a new e-commerce platform should react to various customer and system events. To ensure all potential events are accounted for and have corresponding system responses, which scope model should be utilized?
A: Event Response Table
B: Gantt Chart
C: Risk Assessment Matrix
D: Stakeholder Analysis
Answer: A
Explanation: An Event Response Table is ideal for outlining how a system should react to various events. It lists external triggers and specifies how the system is expected to respond, making it suitable for an e-commerce platform.

Question: In the early stages of a project, why is an Event List important for shaping the scope of work?
A: It enumerates external events that instigate behavior within the solution, defining its event-handling scope
B: It schedules all project tasks and activities
C: It outlines the budget allocation for each event
D: It assigns responsibilities for event management to team members
Answer: A
Explanation: An Event List is important in the early stages of a project as it enumerates external events that the solution is expected to respond to, thereby shaping the scope of work from an event-handling perspective.

Question: What additional information does an Event Response Table provide compared to a basic Event List?
A: Detailed project budget and financial forecasts
B: System responses to the events and related use cases or system flows
C: A timeline for project completion and milestone achievements
D: Allocation of resources to different project events
Answer: B
Explanation: An Event Response Table provides additional information compared to an Event List by outlining the system's expected responses to each event and associating those responses with related use cases or system flows.

Question: How can an Event Response Table contribute to the requirements elicitation process in a project?
A: By creating a detailed project schedule
B: By identifying possible use cases or system flows that need to be part of the requirements
C: By allocating resources for requirements gathering
D: By determining the project's return on investment
Answer: B
Explanation: An Event Response Table can contribute to the requirements elicitation process by identifying possible use cases, user stories, or system flows that will be part of the requirements, based on how the system is expected to respond to various events.

Question: When should a business analyst consider updating the Event List in a project?
A: Only at the beginning of the project
B: Throughout the project as new events that the solution needs to address are identified
C: After the project is completed
D: During the financial auditing phase of the project
Answer: B
Explanation: A business analyst should consider updating the Event List throughout the project as new events are identified that the solution needs to address, ensuring the list remains comprehensive and relevant.
```
