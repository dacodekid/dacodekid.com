---
title: Reverse In Parentheses
---

# Reverse In Parentheses

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching `()`s.

## Example

- For `inputString = "(bar)"`, the output should be

  ```
  reverse_in_parentheses(inputString) = "rab"
  ```

- For `inputString = "foo(bar)baz"`, the output should be

  ```:no-line-numbers
  reverse_in_parentheses(inputString) = "foorabbaz"
  ```

- For `inputString = "foo(bar)baz(blim)"`, the output should be

  ```:no-line-numbers
  reverse_in_parentheses(inputString) = "foorabbazmilb"
  ```

- For `inputString = "foo(bar(baz))blim"`, the output should be

  ```:no-line-numbers
  reverse_in_parentheses(inputString) = "foobazrabblim"
  ```

  Because `"foo(bar(baz))blim"` becomes `"foo(barzab)blim"` and then `"foobazrabblim"`.

## Solution

::: code-group
<<< ./reverse-in-parentheses.py [PYTHON]
<<< ./reverse-in-parentheses.js [JAVASCRIPT]
:::
