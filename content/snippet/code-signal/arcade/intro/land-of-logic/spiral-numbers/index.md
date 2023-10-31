---
title: Spiral Numbers
---

# Spiral Numbers

Construct a square matrix with a size `N × N` containing integers from `1` to `N * N` in a spiral order, starting from top-left and in clockwise direction.

## Example

For `n = 3`, the output should be

```:no-line-numbers
spiral_numbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]


 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7


 1  2  3  4  5
16 17 18 19  6
15 24 25 20  7
14 23 22 21  8
13 12 11 10  9


```

## Input/Output

- **\[input\] integer n**

  Matrix size, a positive integer.

## Solution

::: code-group
<<< ./spiral-numbers.py [PYTHON]
<<< ./spiral-numbers.js [JAVASCRIPT]
:::
