---
title: Century From Year
---

# Century From Year

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

## Example

- For `year = 1905`, the output should be

  ```:no-line-numbers
  century_from_year(year) = 20
  ```

- For `year = 1700`, the output should be

  ```:no-line-numbers
  century_from_year(year) = 17
  ```

## Chart

```mermaid
flowchart
  start([Start])
  input[/"Input YEAR"/]
  calculate["Add 99 to YEAR. <br/> Then Divide it by 100<br/> and get quotient"]
  stop([Stop])

  start --> input --> calculate --> stop
```

## Solution

::: code-group
<<< ./century-from-year.py [PYTHON]
<<< ./century-from-year.js [JAVASCRIPT]
<<< ./century-from-year.ts [TYPESCRIPT]
<<< ./century-from-year.cs [C#]
:::
