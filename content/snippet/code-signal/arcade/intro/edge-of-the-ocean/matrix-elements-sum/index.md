---
title: Matrix Elements Sum
---

# Matrix Elements Sum

After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, **or any of the rooms below any of the free rooms**.

Given `matrix`, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a `0`).

## Example

- For

  ```:no-line-numbers
  matrix = [
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3]
  ]
  ```

  the output should be

  ```:no-line-numbers
  matrix_elements_sum(matrix) = 9.
  ```

  | ![](https://codesignal.s3.amazonaws.com/uploads/1665684423/example1.png)
  | :-: |
  | _Image Credit: CodeSignal_

- For

  ```:no-line-numbers
    matrix = [
      [1, 1, 1, 0],
      [0, 5, 0, 1],
      [2, 1, 3, 10]
    ]
  ```

  the output should be

  ```:no-line-numbers
  `solution(matrix) = 9`.
  ```

  | ![](https://codesignal.s3.amazonaws.com/uploads/1665684423/example2.png)
  | :-: |
  | _Image Credit: CodeSignal_

  Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is `1 + 1 + 1 + 5 + 1 = 9`.

## Solution

::: code-group
<<< ./matrix-elements-sum.py [PYTHON]
<<< ./matrix-elements-sum.js [JAVASCRIPT]
:::
