---
title: Check Palindrome
---

# Check Palindrome

Given the string, check if it is a [palindrome](keyword://palindrome).

## Example

- For `inputString = "aabaa"`, the output should be

  ```:no-line-numbers
  check_palindrome(inputString) = true
  ```

- For `inputString = "abac"`, the output should be

  ```:no-line-numbers
  check_palindrome(inputString) = false
  ```

- For `inputString = "a"`, the output should be

  ```:no-line-numbers
  check_palindrome(inputString) = true
  ```

## Chart

```mermaid
flowchart
  start([Start])
  input[/"Input PALINDROME TEXT"/]
  calculate["Start (=0),<br/> Middle (=Text Lenth/2), <br/> End (=Text Length -1)<br/>"]
  if{"TEXT[Start] = TEXT[End]"}
  ifYes["Start = Start + 1 <br/> End = End - 1"]
  loop{Start <= Middle}
  returnTrue["Return True"]
  returnFalse["Return False"]
  stop([Stop])

  start --> input --> calculate --> if
  if -- Yes --> ifYes --> loop
  if -- No --> returnFalse --> stop
  loop -- Yes --> if
  loop -- No --> returnTrue --> stop

```

## Solution

::: code-group
<<< ./check-palindrome.py [PYTHON]
<<< ./check-palindrome.js [JAVASCRIPT]
<<< ./check-palindrome.ts [TYPESCRIPT]
<<< ./check-palindrome.cs [C#]
:::
