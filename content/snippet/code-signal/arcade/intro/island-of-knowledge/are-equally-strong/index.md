---
title: Are Equally Strong?
---

# Are Equally Strong?

Call two arms _equally strong_ if the heaviest weights they each are able to lift are equal.

Call two people _equally strong_ if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

## Example

- For `yourLeft = 10`, `yourRight = 15`, `friendsLeft = 15`, and `friendsRight = 10`, the output should be

  ```:no-line-numbers
  are_equally_strong(yourLeft, yourRight, friendsLeft, friendsRight) = true
  ```

- For `yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 10`, the output should be

  ```:no-line-numbers
  are_equally_strong(yourLeft, yourRight, friendsLeft, friendsRight) = true
  ```

- For `yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 9`, the output should be

  ```:no-line-numbers
  are_equally_strong(yourLeft, yourRight, friendsLeft, friendsRight) = false
  ```

## Solution

::: code-group
<<< ./are-equally-strong.py [PYTHON]
<<< ./are-equally-strong.js [JAVASCRIPT]
:::
