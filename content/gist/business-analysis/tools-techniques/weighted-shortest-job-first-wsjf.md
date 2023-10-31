---
prev: false
next: false
---

# Weighted Shortest Job First (WSJF)

Weighted Shortest Job First (WSJF) is a prioritization method predominantly used in adaptive frameworks like Agile and SAFe (Scaled Agile Framework). This technique goes beyond traditional methods that typically use only business value and effort to prioritize backlog items. WSJF incorporates multiple dimensions to derive a comprehensive weighted value that helps in deciding the order in which user stories or features should be developed.

### Four Dimensions in WSJF

1. **Business Value**: Represents the perceived value that the story will deliver to the business. High business value implies that the feature is essential for achieving business goals or objectives.

2. **Time Criticality**: This measures the importance of implementing the user story within a specific time frame. Some features may lose their value if they are not developed promptly.

3. **Risk Reduction/Opportunity Enablement**: This dimension captures the potential of a user story to mitigate risks or to capitalize on new opportunities. These could be technical risks, market risks, or other types of risks/opportunities that could affect the project or business.

4. **Effort**: This represents the amount of work required to implement the user story, often estimated in story points or days.

### WSJF Calculation

The WSJF is calculated using a formula which is:

$$
\text{WSJF} = \frac{{\text{Business Value} + \text{Time Criticality} + (\text{Risk Reduction/Opportunity Enablement})}}{\text{Effort}}
$$

This formula integrates all four dimensions into a single numerical value, enabling a more nuanced prioritization of the backlog items.

### Fibonacci Sequence in Estimation

In many cases, the Fibonacci sequence is used in a similar way to estimation poker for sizing these dimensions. The sequence (1, 2, 3, 5, 8, 13, etc.) offers a convenient way to arrive at these estimates because it accounts for the inherent uncertainty in estimating, particularly as the size or complexity of the task increases.

### Application in Adaptive Frameworks

In adaptive project frameworks, such as Agile or SAFe, WSJF becomes particularly useful for sorting out the product backlog or program backlog items. It enables teams and product owners to focus on features that offer the highest value against the least effort while considering time constraints and risks or opportunities. It is an essential tool for business analysts, product owners, and other stakeholders involved in prioritization and decision-making in adaptive environments.
