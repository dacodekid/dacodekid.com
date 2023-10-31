---
title: Add Border
---

# Add Border

Given a rectangular matrix of characters, add a border of asterisks(`*`) to it.

## Example

- For

  ```:no-line-numbers
  picture = [
      "abc",
      "ded"
  ]
  ```

  the output should be

  ```:no-line-numbers
  add_border(picture) = [
      "*****",
      "*abc*",
      "*ded*",
      "*****"
  ]
  ```

## Solution

::: code-group
<<< ./add-border.py [PYTHON]
<<< ./add-border.js [JAVASCRIPT]
:::
