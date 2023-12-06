---
prev: false
next: false
---

# Weighted Ranking

Weighted Ranking is a decision-making technique designed to provide an objective evaluation of various options based on multiple criteria. This method is especially useful for business analysts when they need to make choices that are aligned with business goals and objectives.

## Components of Weighted Ranking

### Criteria

These are the different factors or attributes that are important for the decision-making process. Criteria could include things like cost, time, quality, or risk among others.

### Weights

Each criterion is assigned a weight based on its importance relative to the overall objective. The sum of all weights should ideally equal 1. The weights quantify the significance of each criterion in the decision-making process.

### Rating

For each option under consideration, a rating is assigned for each criterion. This rating is done independently of the other options and usually on a predefined scale (e.g., 0-3 where 0 = Does not satisfy, 1 = Lightly satisfies, 2 = Partially satisfies, 3 = Fully satisfies).

### Weighted Score

The rating for each criterion is multiplied by its respective weight to calculate the weighted score for that criterion.

## Calculation

The weighted score for each criterion is summed to get the total score for each option. The options are then ranked based on their total scores. Mathematically, it's represented as:

$$
\text{Total Score (Option)} = \sum_{i=1}^{n} \text{(Weight of Criterion}_i \times \text{Rating of Option for Criterion}_i)
$$

## Sample Calculation

Using the example provided:

- Option #1: $0.6 \cdot (3 \cdot 0.2) + 0.8 \cdot (2 \cdot 0.4) + 0 + 0.3 \cdot (3 \cdot 0.1) = 1.7$

- Option #2: $0 + 0 + 0.6 \cdot (2 \cdot 0.3) + 0.2 \cdot (2 \cdot 0.1) = 0.8$

- Option #3: $0.2 \cdot (1 \cdot 0.2) + 1.2 \cdot (3 \cdot 0.4) + 0.3 \cdot (1 \cdot 0.3) + 0.2 \cdot (2 \cdot 0.1) = 1.9$

Final Ranking would be _**Option #3 (1.9)**_, followed by _**Option #1 (1.7)**_, and then _**Option #2 (0.8)**_.

## Application in Business Analysis

Weighted Ranking can be particularly effective in scenarios where multiple stakeholders have diverse viewpoints or when criteria are complex and varied. It supports the objectivity of the decision-making process and can be aligned well with the identified business goals and objectives. By using a weighted ranking matrix, business analysts can present a compelling case for the chosen option backed by quantitative data.

## Example

| Items to Be Ranked | Criteria 1 (Weight 0.2) | Criteria 2 (Weight 0.4) | Criteria 3 (Weight 0.3) | Criteria 4 (Weight 0.1) | Total Score | Final Rank |
| ------------------ | ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------- | ---------- |
| Option #1          | 3 x 0.2 = 0.6           | 2 x 0.4 = 0.8           | 0 x 0.3 = 0             | 3 x 0.1 = 0.3           | 1.7         | 2          |
| Option #2          | 0 x 0.2 = 0             | 0 x 0.4 = 0             | 2 x 0.3 = 0.6           | 2 x 0.1 = 0.2           | 0.8         | 3          |
| Option #3          | 1 x 0.2 = 0.2           | 3 x 0.4 = 1.2           | 1 x 0.3 = 0.3           | 2 x 0.1 = 0.2           | 1.9         | 1          |

In this example, each option is evaluated based on four criteria, each with its own weight. The scores for each criterion are calculated by multiplying the rating by the weight. These scores are then summed to get the total score for each option, which determines its final rank. As per the calculated scores, Option #3 ranks the highest with a total score of 1.9, followed by Option #1 with a total score of 1.7, and Option #2 with a total score of 0.8.

## Quiz

```quiz
Question: What is the main purpose of using Weighted Ranking in business analysis?
A: To manage team vacation schedules and time off
B: To provide an objective evaluation of options based on multiple criteria
C: To set up the organization's IT infrastructure and network
D: To design marketing strategies for the organization and its products
Answer: B
Explanation: Weighted Ranking is used in business analysis to provide an objective evaluation of various options based on multiple criteria, aligning choices with business goals and objectives.

Question: How are weights used in the Weighted Ranking method?
A: To measure the aesthetic appeal of each option under consideration
B: To quantify the significance of each criterion in the decision-making process
C: To track the financial expenditure of the project and business
D: To determine the social media impact of each option
Answer: B
Explanation: In Weighted Ranking, weights are assigned to each criterion based on their importance relative to the overall objective. They quantify the significance of each criterion in the decision-making process.

Question: What does a higher total score in Weighted Ranking indicate?
A: That the option is more expensive to implement
B: That the option is better aligned with the criteria and weights
C: That the option requires more time to implement and deploy
D: That the option is less favorable than other options
Answer: B
Explanation: A higher total score in Weighted Ranking indicates that the option is better aligned with the criteria and respective weights, suggesting it may be a more suitable choice based on the evaluated factors.

Question: Can Weighted Ranking be useful in scenarios with diverse stakeholder viewpoints?
A: No, it is only useful for financial decisions and budgeting
B: Yes, it supports objectivity in decision-making with diverse viewpoints
C: It is only used for IT-related decisions and projects, not for other business decisions
D: It is exclusively for marketing decisions and strategies
Answer: B
Explanation: Weighted Ranking can be particularly effective in scenarios where stakeholders have diverse viewpoints. It supports objectivity in the decision-making process and helps in aligning decisions with business goals.

Question: Is the sum of all weights in Weighted Ranking always equal to 1?
A: No, it can be any number
B: Yes, ideally it should equal 1
C: The sum of weights is irrelevant in this method
D: The sum of weights should always exceed 1
Answer: B
Explanation: In Weighted Ranking, the sum of all weights assigned to the criteria should ideally equal 1. This standardization helps in maintaining the balance and proportionality of each criterion's importance in the overall decision-making process.
```
