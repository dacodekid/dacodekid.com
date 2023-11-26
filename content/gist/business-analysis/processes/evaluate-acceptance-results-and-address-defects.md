---
prev: false
next: false
---

# Evaluate Acceptance Result and Address Defects

"Evaluate Acceptance Results and Address Defects" pertains to the analysis of outcomes from a juxtaposition between the set acceptance criteria and the solution. The primary advantage of executing this process is to make well-informed determinations on the release of the whole or a segment of a solution, and whether there's a necessity for alterations, rectifications, or enhancements.

## Understanding the Process

This procedure emphasizes contrasting the acceptance criteria with the acceptance testing results. The objective is to provide guidance on addressing instances where some facets of a solution might not meet its designated acceptance criteria. The scope of this testing can range from a comprehensive solution release to just a single business scenario, which could be derived from multiple user stories.

Notably, the emphasis is on the outcomes of the comparison rather than the tests themselves. This distinction aligns with the prevalent industry practice where roles involved in business analysis are separate from those handling testing. While the testing roles usually handle the pass/fail aspect, business analysis is crucial to gauge the scale and severity of defects, deduce their root cause, recognize associated risks, and put forth suggestions to rectify them. Within these recommendations, business impacts, repair costs, or workaround costs are assessed alongside the implications and costs of rolling out the solution without addressing existing defects.

## Sources of Test Results

Test outcomes vital for evaluating acceptance criteria might originate from:

- Exploratory tests and user acceptance tests.
- Day-in-the-life (DITL) tests.
- Preproduction or simulated production testing.
- Functionality tests within a scenario.
- Nonfunctional requirements tests.
  For an in-depth exploration of testing methodologies, one should refer to Section 6.6 of the Business Analysis for Practitioners: A Practice Guide.

In settings like manufacturing or construction that have consistent monitoring and acceptance testing, any discrepancies between outcomes and criteria are evaluated to discern trends. For software solutions with automated regression testing in place, there's an opportunity to identify patterns in results that don't meet the criteria.

## Evaluation Steps

The process of evaluation encompasses pinpointing the core cause of any disparity or flaw. This could lead to a cost-benefit analysis of addressing the defect. Suggested ways to handle the defect might encompass:

- Feasible workarounds that don't affect other functionalities or result in unexpected product behaviors.
- Potential product modifications, possibly necessitating a change request.
- Adjustments in measurement techniques or results.
- Recognizing the need for a deeper dive into the technical origins of the flaw.
- Informing customers and users to ensure correct product usage.

Typically, the evaluation and addressing of defects transpire whenever there's a need for a go/no-go or release decision regarding a solution component. However, it can also take place when addressing product flaws detected post solution deployment.

## Inputs

### [Acceptance Criteria](/content/gist/business-analysis/inputs-outputs/acceptance-criteria.md)

Acceptance criteria outline the specific conditions that need to be met for a product or solution to be accepted by stakeholders. These criteria offer a clear description of the functionality, performance, and other attributes the final deliverable should possess to satisfy stakeholder expectations.

### [Actual Acceptance Results](/content/gist/business-analysis/inputs-outputs/actual-acceptance-results.md)

Actual acceptance results represent the actual observations and outcomes derived when the acceptance tests are executed. These results indicate whether the product or solution has met the stipulated acceptance criteria and are integral in deciding if further iterations or refinements are required.

## Tools and Techniques

### [Prioritization Schemes](/content/gist/business-analysis/tools-techniques/prioritization-schemes.md)

Prioritization schemes are methods used to assign relative importance or urgency to different items, such as defects or changes. These schemes ensure that the most critical items are addressed first, optimizing the allocation of resources and time.

### [Root Cause Analysis](/content/gist/business-analysis/tools-techniques/root-cause-and-opportunity-analysis.md)

Root cause analysis is a problem-solving technique aimed at identifying the fundamental reasons behind a defect or issue. By addressing the root cause, one can prevent the recurrence of the same problem in future iterations or versions of the product.

### [Traceability Matrix](/content/gist/business-analysis/tools-techniques/traceability-matrix.md)

A traceability matrix is a tool that maps and tracks requirements throughout the project lifecycle. It assists in ensuring that all requirements are met and provides a foundation to determine the origins of defects, helping to pinpoint areas needing correction.

### [Variance Analysis](/content/gist/business-analysis/tools-techniques/variance-analysis.md)

Variance analysis is the process of comparing actual results with expected results to identify discrepancies. In the context of acceptance results, this technique helps in understanding deviations from the acceptance criteria and facilitates appropriate corrective actions.

## Outputs

### [Evaluated Acceptance Results](/content/gist/business-analysis/inputs-outputs/evaluated-acceptance-results.md)

Evaluated acceptance results provide a consolidated view of how the actual acceptance results stack up against the established acceptance criteria. These evaluated results highlight areas of the product that have met the acceptance standards and those that need further refinement.

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
A: To provide guidelines for stakeholder communications
B: To serve as a checklist for evaluating if a deliverable meets the stated requirements
C: To establish a detailed project plan and schedule
D: To outline the responsibilities of the project team members
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
C: The team needs immediate reorganization
D: Stakeholders are likely to request additional features
Answer: B
Explanation: If a deliverable fails to meet the Acceptance Criteria at any level, including the solution level, it indicates that the item (requirement, iteration, release, or solution) is not on track to be accepted in its current state.

Question: How do Acceptance Criteria align with requirements in the business analysis process?
A: They ensure that the project team adheres to organizational policies
B: They align directly and completely with the requirements and product information
C: They serve as a legal contract between the project team and the stakeholders
D: They outline the project management methodologies to be used
Answer: B
Explanation: Acceptance Criteria should be in complete alignment with the requirements and relevant product information, forming the basis for acceptance testing and other evaluation methods to validate the solution.

Question: What is the primary purpose of analyzing Actual Acceptance Results in business analysis?
A: To determine the project's budget utilization
B: To record and analyze the discrepancy between test results and Acceptance Criteria
C: To provide a performance appraisal for the project team
D: To plan the project's communication strategy
Answer: B
Explanation: The primary purpose of analyzing Actual Acceptance Results in business analysis is to record and analyze any discrepancies between the test results and the predefined Acceptance Criteria, crucial for recommending corrective measures.

Question: In the context of regression testing, why are Actual Acceptance Results important for Business Analysts?
A: They help in deciding the marketing strategy for the product.
B: They indicate how well the product is expected to perform in the market.
C: They uncover situations where recent changes may have affected existing functionalities.
D: They are used to measure the stakeholders' satisfaction with the product.
Answer: C
Explanation: Actual Acceptance Results from regression testing are invaluable for Business Analysts as they help uncover situations where recent changes to the product might have negatively impacted existing functionalities.

Question: If the Actual Acceptance Results frequently show major discrepancies with the Acceptance Criteria, what strategic decision might this prompt?
A: Increasing the marketing budget for the product
B: Reconsidering the project scope, timelines, or overall approach
C: Immediately terminating the project
D: Outsourcing the project to another team
Answer: B
Explanation: Frequent or major discrepancies between Actual Acceptance Results and Acceptance Criteria might call for a reconsideration of the project scope, timelines, or the overall approach to address these issues.

Question: How do Actual Acceptance Results contribute to quality control in a project?
A: By establishing a record of the product’s alignment with requirements and expectations
B: By determining the financial profitability of the product
C: By assessing the efficiency of the project management methodologies used
D: By evaluating the effectiveness of the project's risk management strategies
Answer: A
Explanation: Actual Acceptance Results play a critical role in quality control by establishing a concrete record of the product’s alignment with stakeholder requirements and expectations, thereby serving as an accountability tool.

Question: When Actual Acceptance Results identify defects, what is the typical course of action recommended by Business Analysts?
A: Ignore the defects if they are minor
B: Recommend adjustments or changes to address the defects
C: Immediately halt all project activities
D: Shift focus to a different project or product
Answer: B
Explanation: Upon identifying defects through Actual Acceptance Results, Business Analysts typically recommend corrective measures, ranging from minor adjustments to significant changes in the product, feature, or functionality.

Question: What is the purpose of the "Buy a Feature" prioritization scheme in Business Analysis?
A: To determine the most technologically advanced features
B: To enable stakeholders to agree on prioritization by 'buying' features with pretend money
C: To prioritize features based on their alignment with global market trends
D: To focus solely on features that reduce operational costs
Answer: B
Explanation: The "Buy a Feature" scheme is a collaborative game where stakeholders use pretend money to buy their choice of features. The features that receive the most money are considered most valuable and are prioritized accordingly.

Question: How does the Delphi method aid in prioritization?
A: By using a consensus-building technique involving anonymous input from subject matter experts
B: By focusing on the personal preferences of the project manager
C: By prioritizing based on the latest technological trends
D: By determining priorities based on financial investments alone
Answer: A
Explanation: The Delphi method is a consensus-building technique that uses anonymous input from subject matter experts and multiple rounds of discussion to reach agreement on prioritization, aiming to reduce peer pressure and groupthink.

Question: What is the key focus of the Minimum Viable Product (MVP) prioritization mechanism?
A: To define the scope of the first release by identifying the minimum number of features for customer value
B: To prioritize features solely based on their financial returns
C: To focus on the most complex features of the solution
D: To prioritize features based on the ease of implementation
Answer: A
Explanation: The MVP prioritization mechanism is used to define the scope of the first release of a solution by identifying the fewest number of features that would constitute a solution from which the customer would obtain value.

Question: What does the MoSCoW technique involve in prioritization?
A: Categorizing each requirement into groups like Must have, Should have, Could have, or Won’t have
B: Prioritizing based solely on the highest financial return
C: Focusing on requirements that align with the personal goals of the stakeholders
D: Considering only the technical aspects of the requirements
Answer: A
Explanation: The MoSCoW technique categorizes each requirement into one of the following groups: Must have, Should have, Could have, or Won’t have, aiding in prioritization based on the level of necessity and impact.

Question: What is the principle behind the Weighted Shortest Job First (WSJF) method?
A: To prioritize user stories based on dimensions like business value, time criticality, risk reduction, and effort
B: To focus on prioritizing the longest and most complex jobs
C: To prioritize jobs based on their alignment with the CEO's vision
D: To rank jobs solely based on their operational impact
Answer: A
Explanation: Weighted Shortest Job First (WSJF) is a method used to rank user stories based on multiple dimensions including business value, time criticality, risk reduction or opportunity enablement, and effort, using a formula to calculate a weighted value for each story.

Question: What is the primary function of a Fishbone/Ishikawa Diagram in business analysis?
A: To detail individual employee roles and responsibilities.
B: Visualizing potential causes of a specific problem or effect.
C: Managing the company's financial budgets and forecasts.
D: Outlining marketing and sales strategies.
Answer: B
Explanation: The primary function of a Fishbone/Ishikawa Diagram is to visualize potential causes of a specific problem or effect, structured in a way that categories of potential causes branch out from the main spine.

Question: In the Five-Whys technique, what is the main goal achieved by asking "why" repeatedly?
A: To determine the most efficient marketing strategies.
B: Identifying the fundamental cause of a problem to prevent recurrence.
C: Allocating resources for project development.
D: Setting timelines for project completion.
Answer: B
Explanation: The main goal of the Five-Whys technique is to identify the fundamental cause of a problem by asking "why" repeatedly, with the aim of preventing its recurrence.

Question: How are Interrelationship Diagrams particularly useful in business analysis?
A: They are primarily used for employee performance evaluations.
B: For visualizing complex interactions among variables in a problem.
C: Used exclusively for tracking sales and customer interactions.
D: Focused on mapping out corporate governance structures.
Answer: B
Explanation: Interrelationship Diagrams are particularly useful for visually representing the complex interactions among various variables involved in a problem, especially when these relationships are intricate and non-linear.

Question: What is the key aspect of the methodology of creating Fishbone Diagrams?
A: They are designed for managing inventory and logistics.
B: Identifying potential causes of a problem and categorizing them.
C: Focused on employee recruitment and training procedures.
D: Developing new product lines and services.
Answer: B
Explanation: The key aspect of the methodology of creating Fishbone Diagrams is identifying potential causes of a problem or effect and categorizing them in a structured manner.

Question: When is the use of the Five-Whys technique particularly effective?
A: For organizing team-building activities and events.
B: When a quick and straightforward method is needed to identify a problem's root cause.
C: In designing and updating the company's website.
D: Managing customer service and support operations.
Answer: B
Explanation: The Five-Whys technique is particularly effective when a quick and straightforward method is needed to identify the root cause of a problem.

Question: What is the primary purpose of a Traceability Matrix in business analysis?
A: To serve as a financial ledger for the project.
B: To establish and visualize relationships between requirements, deliverables, and other project entities, ensuring alignment with business objectives.
C: It is used solely for scheduling project timelines.
D: To record the personal information of project team members.
Answer: B
Explanation: The primary purpose of a Traceability Matrix in business analysis is to establish and visualize the relationships between various types of requirements, deliverables, and other project or product entities. This helps in ensuring that each element is aligned with and supports the business objectives of the project.

Question: How does a Traceability Matrix aid in the validation of requirements?
A: By focusing on the aesthetic aspects of the project.
B: It maps requirements to business objectives to ensure each requirement contributes value and prevents scope creep.
C: The Traceability Matrix is not used for validating requirements.
D: It validates requirements by extending the project deadline.
Answer: B
Explanation: During the validation phase, a Traceability Matrix is used to map requirements to business objectives. This ensures that each requirement contributes value to the project and supports the achievement of business objectives. It also helps identify and potentially eliminate any requirement that does not align with these objectives, thereby preventing scope creep.

Question: In what way is the Traceability Matrix used for prioritizing requirements?
A: It prioritizes requirements based solely on their complexity.
B: Requirements are prioritized according to their alignment with quantified and ranked business objectives, identified in the Traceability Matrix.
C: The Matrix is used to prioritize requirements randomly.
D: Prioritization is based on the personal preferences of the business analyst.
Answer: B
Explanation: The Traceability Matrix is a powerful tool for prioritizing requirements by tracing each requirement to business objectives that have been quantified and ranked. This allows the project team to prioritize requirements based on how well they align with these high-value objectives, ensuring that the most critical requirements are addressed first.

Question: What additional entities can be tracked using a Traceability Matrix?
A: Only financial data related to the project.
B: It can track a variety of project entities like business rules, design elements, implementation details, and test cases.
C: The Matrix only tracks the project schedule.
D: It is used exclusively for tracking stakeholder communication.
Answer: B
Explanation: A Traceability Matrix is not restricted to tracking only requirements. It can also establish linkages among a variety of project entities, such as business rules, design elements, implementation details, and test cases. This comprehensive tracking aids in effective scope management and ensures that all aspects of the project are aligned and accounted for.

Question: How is the Traceability Matrix adapted in agile or adaptive project life cycles?
A: It is replaced with a financial tracking tool.
B: A lightweight version, known as the Interaction Matrix, is used for quicker assessments at specific points in time.
C: In adaptive projects, the Traceability Matrix is considered irrelevant.
D: It is used to extend the duration of each sprint or iteration.
Answer: B
Explanation: In adaptive project life cycles, teams may opt for a more lightweight form of the Traceability Matrix, called the Interaction Matrix. Unlike the comprehensive Traceability Matrix, the Interaction Matrix is temporary and captures a specific point in time. This allows for quick assessments of the sufficiency and completeness of requirements at that moment, aligning with the flexible and dynamic nature of adaptive methodologies.

Question: In an agile project environment, how is Variance Analysis typically utilized in relation to business analysis activities?
A: To compare actual performance against the detailed Business Analysis Plan
B: To assess deviations in the business analysis schedule or degree of completion
C: To analyze burndown charts and assess deviations from expected progress
D: To evaluate the accuracy of stakeholder feedback on delivered segments
Answer: C
Explanation: In agile or adaptive environments, Variance Analysis is often used to analyze burndown charts and assess if the observed results significantly diverge from expectations, rather than tracking percent completion in detail.

Question: When a predictive project's business analysis schedule consistently falls behind, what type of analysis is most beneficial for identifying the underlying reasons?
A: Risk Analysis
B: Variance Analysis
C: Cost-Benefit Analysis
D: Root Cause Analysis
Answer: B
Explanation: In predictive life cycles, Variance Analysis can provide valuable insights into discrepancies in the business analysis schedule or degree of completion, helping identify underlying reasons for schedule delays.

Question: If a project team observes that the actual content of a Business Analysis Work Product significantly differs from what was expected, which technique should they employ to investigate the causes?
A: Requirement Gathering Techniques
B: Stakeholder Analysis
C: Variance Analysis
D: Gap Analysis
Answer: C
Explanation: Variance Analysis is used to investigate significant differences between the expected format and content of a business analysis work product and the actual outcome.

Question: In the context of Variance Analysis, what caution should be exercised when interpreting metrics associated with business analysis?
A: Metrics should not be used in isolation to attribute discrepancies to poor business analysis practices.
B: Metrics should focus solely on financial aspects of project variances.
C: Only qualitative metrics should be considered in Variance Analysis.
D: Variance metrics should always be cross-referenced with stakeholder satisfaction scores.
Answer: A
Explanation: Caution is advised when interpreting metrics associated with business analysis, as these metrics cannot single out poor business analysis practices as the sole cause for discrepancies in project and product development.

Question: How does Variance Analysis in an adaptive life cycle differ from its application in a predictive life cycle?
A: It focuses more on financial variances in an adaptive life cycle.
B: It is used to evaluate stakeholder engagement effectiveness in a predictive life cycle.
C: It is more concerned with the extent of business analysis techniques deployed in an adaptive life cycle.
D: It analyzes burndown charts in an adaptive life cycle, whereas it assesses schedule or degree of completion in a predictive life cycle.
Answer: D
Explanation: In an adaptive life cycle, Variance Analysis often focuses on analyzing burndown charts, whereas in a predictive life cycle, it provides insights into discrepancies in the business analysis schedule or degree of completion.

Question: What is the primary purpose of Evaluated Acceptance Results in a project?
A: To define the project's marketing strategy
B: To compare the actual results of a solution with the predefined acceptance criteria
C: To establish the project's budget
D: To outline the legal framework of the project
Answer: B
Explanation: Evaluated Acceptance Results are focused on comparing the actual results of a solution with the predefined acceptance criteria, determining whether the solution has met, exceeded, or failed to meet these criteria.

Question: How do Evaluated Acceptance Results contribute to understanding the state of the product?
A: By focusing solely on the financial aspects of the product
B: By articulating the product's proficiencies and deficiencies
C: By establishing the final technical specifications of the product
D: By determining the marketing potential of the product
Answer: B
Explanation: Evaluated Acceptance Results give a clear picture of the state of the product in terms of its proficiencies and deficiencies, indicating how it has affected the expected business value.

Question: What aspect is considered in Evaluated Acceptance Results for projects following an adaptive life cycle?
A: The 'Definition of Done'
B: The project's budget allocation
C: The legal compliance of the project
D: The aesthetic design of the product
Answer: A
Explanation: In projects with an adaptive life cycle, the 'Definition of Done' is a key consideration in Evaluated Acceptance Results, contributing to the assessment of whether the solution meets the expectations.

Question: What kind of analysis is typically conducted if Evaluated Acceptance Results reveal variances or defects?
A: Root Cause Analysis and Cost Analysis
B: Aesthetic Analysis
C: Marketing Analysis
D: Legal Compliance Analysis
Answer: A
Explanation: If variances or defects are identified in Evaluated Acceptance Results, Root Cause Analysis to identify the reasons for discrepancies and Cost Analysis to evaluate the cost of addressing defects are typically conducted.

Question: In the context of Evaluated Acceptance Results, what is often assessed regarding defects?
A: The business impact of addressing or ignoring the defects
B: The color scheme of the defects
C: The marketing potential of the defects
D: The legal implications of the defects
Answer: A
Explanation: When defects are identified in Evaluated Acceptance Results, an assessment is made regarding the business impact of either addressing the defect or letting it persist, guiding decision-making on corrective actions.
```
