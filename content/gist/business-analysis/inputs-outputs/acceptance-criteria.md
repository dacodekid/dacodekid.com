---
prev: false
next: false
---

# Acceptance Criteria

Acceptance Criteria are essentially the ==conditions that a product or a deliverable must meet to be accepted by stakeholders or customers==. These are vital for validating that the solution meets the business needs as specified in the requirements.

## The Nature

Acceptance criteria are concrete and demonstrable. They serve as a checklist for evaluating the deliverables and determining whether or not they fulfill the stated requirements.

## Alignment with Requirements

The acceptance criteria should be in complete alignment with the requirements and other relevant product information. This is crucial because the criteria form the basis for acceptance testing or any other evaluation methods employed to validate the solution.

## Definition of Done

The "definition of done" is included as a part of the acceptance criteria. This provides a clear end-state that describes what completion looks like, offering an additional layer of clarity and understanding for what must be achieved.

## Levels of Definition

Acceptance criteria can be defined at various levels such as:

- **Requirement Level**: Specific to a single requirement.

- **Iteration Level**: Pertaining to an iteration in the project.

- **Release Level**: Concerning the entire release.

- **Solution Level**: For the overall solution.

- **Product or Business Objective Level**: These are high-level criteria that align directly with business objectives.

## Context Sensitivity: Adaptive vs Predictive Approaches

In an **adaptive approach**, acceptance criteria often pertain to individual user stories. Multiple criteria might need to be satisfied for a single user story to be deemed acceptable. They provide a concise way to articulate requirements.

In a **predictive approach**, the acceptance criteria are typically higher-level and related to a release or the overall solution.

## Role in Validation Activities

During validation, these criteria are cross-referenced against all requirements and product information. If there's a mismatch, it indicates that the particular item (requirement, iteration, release, or solution) is not on track to be accepted.

By understanding and utilizing acceptance criteria effectively, Business Analysts can ensure that the deliverables meet stakeholder expectations and fulfill the requirements, thereby increasing the likelihood of project success.

## Sample Format

Below is a sample format for Acceptance Criteria using the Given-When-Then syntax, which is commonly used in Behavior-Driven Development (BDD) and aligns well with PMI practices.

### User Story:

```:no-line-numbers
As a [type of user], I want [an action] so that [benefit/value]
```

As a ==customer==, I want to be able to ==reset my password== so that I can ==regain access to my account when I forget my password==.

### Acceptance Criteria:

```:no-line-numbers
Given
Initial condition or setup

When
An action takes place

Then
The outcome or result is observed
```

**Given**

- I am a registered user
- I am on the 'Forgot Password' page

**When**

- I enter my registered email address
- I click on the 'Reset Password' button

**Then**

- I should receive a password reset link to my registered email within 5 minutes
- A confirmation message should appear on the screen saying, "A password reset link has been sent to your email."

## Quiz

```quiz
Question: In a project following an adaptive approach, acceptance criteria are commonly defined at which level?
A: Requirement Level
B: Iteration Level
C: Release Level
D: User Story Level
Answer: D
Explanation: In an adaptive approach, acceptance criteria are often defined at the level of individual user stories, providing a concise way to articulate requirements for each story.

Question: What is the primary purpose of Acceptance Criteria in the business analysis process?
A: To provide guidelines for stakeholder communications and reporting
B: To serve as a checklist for evaluating if a deliverable meets the requirements
C: To establish a detailed project plan and schedule for the project team
D: To outline the responsibilities of the project team members and stakeholders
Answer: B
Explanation: Acceptance Criteria serve as a checklist for evaluating deliverables and determining whether they fulfill the stated requirements, thereby validating that the solution meets the business needs.

Question: When using the Given-When-Then syntax in Acceptance Criteria, what does the "Then" component typically describe?
A: The initial condition or setup required for the test
B: The action that triggers the condition
C: The outcome or result that is observed after the action
D: The business objective or benefit expected from the feature
Answer: C
Explanation: In the Given-When-Then syntax used for Acceptance Criteria, the "Then" component describes the outcome or result that is observed following the action.

Question: If a deliverable fails to meet the Acceptance Criteria at the solution level, what does it indicate about the project?
A: The project budget has been exceeded
B: The project is not on track to be accepted in its current state
C: The team needs immediate reorganization and restructuring
D: Stakeholders are likely to request additional features and functionality
Answer: B
Explanation: If a deliverable fails to meet the Acceptance Criteria at any level, including the solution level, it indicates that the item (requirement, iteration, release, or solution) is not on track to be accepted in its current state.

Question: How do Acceptance Criteria align with requirements in the business analysis process?
A: They ensure that the project team adheres to organizational policies and procedures
B: They align directly and completely with the requirements and product information
C: They serve as a legal contract between the project team and the stakeholders
D: They outline the project management methodologies to be used
Answer: B
Explanation: Acceptance Criteria should be in complete alignment with the requirements and relevant product information, forming the basis for acceptance testing and other evaluation methods to validate the solution.
```
