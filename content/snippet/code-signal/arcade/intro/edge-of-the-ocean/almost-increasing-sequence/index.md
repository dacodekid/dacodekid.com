---
title: Almost Increasing Sequence
---

# Almost Increasing Sequence

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

_Note:_ sequence `a0`, `a1`, ..., `an` is considered to be a strictly increasing if `a0 < a1 < ... < an`. Sequence containing only one element is also considered to be strictly increasing.

## Example

```:no-line-numbers
almost_increasing_sequence(sequence) = false
```

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For `sequence = [1, 3, 2]`, the output should be

  ```:no-line-numbers
  almost_increasing_sequence(sequence) = true
  ```

  You can remove `3` from the array to get the strictly increasing sequence `[1, 2]`. Alternately, you can remove `2` to get the strictly increasing sequence `[1, 3]`.

## Solution

::: code-group
<<< ./almost-increasing-sequence.py [PYTHON]
<<< ./almost-increasing-sequence.js [JAVASCRIPT]
:::
