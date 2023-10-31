---
title: Extra Number
---

# Extra Number

You're given three integers, `a`, `b` and `c`. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

## Example

For `a = 2`, `b = 7`, and `c = 2`, the output should be

```:no-line-numbers
extra_number(a, b, c) = 7
```

The two equal numbers are `a` and `c`. The third number (`b`) equals `7`, which is the answer.

## Input/Output

- **\[input\] integer a**

  _Guaranteed constraints:_
  `1 ≤ a ≤ 109`.

- **\[input\] integer b**

  _Guaranteed constraints:_
  `1 ≤ b ≤ 109`.

- **\[input\] integer c**

  _Guaranteed constraints:_
  `1 ≤ c ≤ 109`.

## Solution

::: code-group
<<< ./extra-number.py [PYTHON]
:::
