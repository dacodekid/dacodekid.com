---
title: Is Lucky
---

# Is Lucky

Ticket numbers usually consist of an even number of digits. A ticket number is considered _lucky_ if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number `n`, determine if it's _lucky_ or not.

## Example

- For `n = 1230`, the output should be

  ```:no-line-numbers
  is_lucky(n) = true
  ```

- For `n = 239017`, the output should be

  ```:no-line-numbers
  is_lucky(n) = false
  ```

## Solution

::: code-group
<<< ./is-lucky.py [PYTHON]
<<< ./is-lucky.js [JAVASCRIPT]
:::
