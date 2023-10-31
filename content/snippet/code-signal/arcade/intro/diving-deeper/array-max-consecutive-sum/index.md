---
title: Array Max Consecutive Sum
---

# Array Max Consecutive Sum

Given array of integers, find the maximal possible sum of its `k` consecutive elements.

## Example

For `inputArray = [2, 3, 5, 1, 6]` and `k = 2`, the output should be

```:no-line-numbers
array_max_consecutive_sum(inputArray, k) = 8
```

All possible sums of `2` consecutive elements are:

- `2 + 3 = 5`;
- `3 + 5 = 8`;
- `5 + 1 = 6`;
- `1 + 6 = 7`.
  Thus, the answer is `8`.

## Input/Output

- **\[input\] array.integer inputArray**

  Array of positive integers.

  _Guaranteed constraints:_
  `3 ≤ inputArray.length ≤ 105`,
  `1 ≤ inputArray[i] ≤ 1000`.

- **\[input\] integer k**

  An integer (not greater than the length of `inputArray`).

## Solution

::: code-group
<<< ./array-max-consecutive-sum.py [PYTHON]
<<< ./array-max-consecutive-sum.js [JAVASCRIPT]
:::
