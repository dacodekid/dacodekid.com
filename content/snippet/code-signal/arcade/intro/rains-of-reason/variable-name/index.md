---
title: Variable Name
---

# Variable Name

Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

## Example

- For `name = "var_1__Int"`, the output should be

  ```:no-line-numbers
  variable_name(name) = true
  ```

- For `name = "qq-q"`, the output should be

  ```:no-line-numbers
  variable_name(name) = false
  ```

- For `name = "2w2"`, the output should be
  ```:no-line-numbers
  variable_name(name) = false
  ```

## Solution

::: code-group
<<< ./variable-name.py [PYTHON]
<<< ./variable-name.js [JAVASCRIPT]
:::
