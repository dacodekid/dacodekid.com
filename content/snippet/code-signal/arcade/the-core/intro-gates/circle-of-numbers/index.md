---
title: Circle of Numbers
---

# Circle of Numbers

Consider integer numbers from `0` to `n - 1` written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that `0` and `n - 1` are neighboring, too).

Given `n` and `firstNumber`, find the number which is written in the radially opposite position to `firstNumber`.

## Example

For `n = 10` and `firstNumber = 2`, the output should be

```:no-line-numbers
circle_of_numbers(n, firstNumber) = 7
```

| ![](https://codesignal.s3.amazonaws.com/tasks/circleOfNumbers/img/example.png?_tm=1624652347469)
| :-: |
| _Image Credit: CodeSignal_

## Solution

::: code-group
<<< ./circle-of-numbers.py [PYTHON]
:::
