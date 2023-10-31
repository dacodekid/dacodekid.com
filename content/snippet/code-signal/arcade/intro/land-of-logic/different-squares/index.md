---
title: Different Squares
---

# Different Squares

Given a rectangular matrix containing only digits, calculate the number of different `2 × 2` squares in it.

## Example

For

```:no-line-numbers
matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
```

the output should be

```:no-line-numbers
different_squares(matrix) = 6
```

Here are all `6` different `2 × 2` squares:

```:no-line-numbers
- 1 2
  2 2

- 2 1
  2 2

- 2 2
  2 2

- 2 2
  1 2

- 2 2
  2 3

- 2 3
  2 1
```

## Solution

::: code-group
<<< ./different-squares.py [PYTHON]
<<< ./different-squares.js [JAVASCRIPT]
:::
