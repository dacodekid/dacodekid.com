---
title: Is Beautiful String
---

# Is Beautiful String

A string is said to be beautiful if each letter in the **string** appears at most as many times as **the previous letter in the alphabet within the string**; ie: `b` occurs no more times than `a`; `c` occurs no more times than `b`; etc. Note that letter `a` has no previous letter.

Given a string, check whether it is _beautiful_.

## Example

- For `inputString = "bbbaacdafe"`, the output should be

  ```:no-line-numbers
  is_beautiful_string(inputString) = true
  ```

  This string contains 3 `a`s, 3 `b`s, 1 `c`, 1 `d`, 1 `e`, and 1 `f` (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

- For `inputString = "aabbb"`, the output should be

  ```:no-line-numbers
  is_beautiful_string(inputString) = false
  ```

  Since there are more `b`s than `a`s, this string is not beautiful.

- For `inputString = "bbc"`, the output should be

  ```:no-line-numbers
  is_beautiful_string(inputString) = false
  ```

  Although there are more `b`s than `c`s, this string is not beautiful because there are no `a`s, so therefore there are more `b`s than `a`s.

## Input/Output

- **\[input\] string inputString**

  A string of lowercase English letters.

## Solution

::: code-group
<<< ./is-beautiful-string.py [PYTHON]
<<< ./is-beautiful-string.js [JAVASCRIPT]
:::
