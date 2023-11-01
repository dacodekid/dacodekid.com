---
prev: false
next: false
---

# User Story

User stories serve as a powerful technique for capturing stakeholder requirements, particularly in adaptive or Agile methodologies. They provide a user-centered approach to requirement definition.

In the typical format of a user story, "As an &lt;actor&gt;, I want to &lt;function&gt;, so that I can &lt;business reason&gt;", each component serves a specific purpose. The "actor" usually refers to a role or type of user who will be interacting with the system. The "function" part describes what the actor wants to accomplish, and the "business reason" details the value or benefit that the actor gains from performing the function.

This standard structure ensures that the focus remains on delivering value to the user, effectively serving as a bridge from business requirements to solution requirements. The user story can be mapped back to process models that reflect overarching business user tasks, thereby creating a cohesive understanding of the problem space and the solution space.

User stories often incorporate Acceptance Criteria to flesh out the user's needs in greater detail. Acceptance Criteria serve to define the 'Definition of Done,' helping the development team understand when the user story is fully implemented.

To ensure the quality of user stories, they are often assessed using the INVEST acronym:

- **Independent**: Each story should be self-contained, in a way that there is no inherent dependency on another story. This is important for prioritizing and planning sprints in an Agile development process.
- **Negotiable**: A user story is not an explicit contract for features; details can be altered and negotiated, usually becoming more concrete just before implementation. This allows for changes in scope or requirements and enables iterative development.

- **Valuable**: Every user story must provide value to the end-users and contribute to solving the business problem at hand. If a story does not have clear business value, it should be reconsidered.

- **Estimable**: You should be able to estimate the size of a user story, to plan your iterations and to understand the amount of work to be done. If it’s too large to estimate, it probably needs to be broken down into smaller, manageable pieces.

- **Small**: A user story should be small enough to plan, prioritize, and execute within a single sprint. Stories that are too large should be broken down into smaller, more manageable pieces. This attribute assists teams in understanding the scope of the work, making it easier to commit to and complete within an iteration.

- **Testable**: Each user story must be testable, meaning that there should be clear acceptance criteria that allow for verification once the story is implemented. Being testable ensures that the end result meets the intended functionality and business objectives, thereby reducing ambiguities and misunderstandings.

The INVEST criteria collectively help ensure that the user stories are well-crafted, clearly defined, and manageable. They serve as a checklist to ensure that the stories are conducive to successful Agile development, facilitating effective planning, execution, and delivery of value to the stakeholders.

### Example

Certainly. Here's an example user story along with its acceptance criteria:

#### User Story

As a Customer, I want to be able to reset my password, so that I can regain access to my account if I forget my password.

#### Acceptance Criteria

1. When the customer clicks on "Forgot Password", they should be redirected to a "Reset Password" page.
2. The "Reset Password" page should prompt the customer to enter their registered email address.
3. Upon entering a registered email and clicking "Submit," a password reset link should be sent to the given email.
4. The password reset link in the email should expire in 24 hours.
5. Clicking the reset link should direct the customer to a secure page where they can create a new password.
6. The new password must meet established security criteria (e.g., at least 8 characters, one uppercase, one lowercase, one number).
7. Upon successful password reset, the customer should receive a confirmation email.
8. The customer should be able to login with the new password immediately after the change.

This user story and its acceptance criteria aim to be Independent, Negotiable, Valuable, Estimable, Small, and Testable, adhering to the INVEST criteria.
