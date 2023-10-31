---
title: Is Infinite Process?
---

# Is Infinite Process?

Given integers `a` and `b`, determine whether the following pseudocode results in an infinite loop

```:no-line-numbers
while a is not equal to b do
  increase a by 1
  decrease b by 1
```

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

## Example

- For `a = 2` and `b = 6`, the output should be

  ```:no-line-numbers
  is_infinite_process(a, b) = false
  ```

- For `a = 2` and `b = 3`, the output should be

  ```:no-line-numbers
  is_infinite_process(a, b) = true
  ```

## Solution

::: code-group
<<< ./is-infinite-process.py [PYTHON]
:::
