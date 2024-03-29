---
title: Digit Degree
---

# Digit Degree

Let's define _digit degree_ of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

## Example

- For `n = 5`, the output should be

  ```:no-line-numbers
  digit_degree(n) = 0
  ```

- For `n = 100`, the output should be

  ```:no-line-numbers
  digit_degree(n) = 1
  ```

  `1 + 0 + 0 = 1`.

- For `n = 91`, the output should be

  ```:no-line-numbers
  digit_degree(n) = 2
  ```

  `9 + 1 = 10` -> `1 + 0 = 1`.

## Solution

::: code-group
<<< ./digit-degree.py [PYTHON]
<<< ./digit-degree.js [JAVASCRIPT]
:::
