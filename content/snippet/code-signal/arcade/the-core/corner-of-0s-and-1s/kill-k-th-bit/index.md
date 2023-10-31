---
title: Kill K-th Bit
---

# Kill K^th^ Bit

In order to stop the Mad Coder evil genius, you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number `n` the <code>k^th^</code> bit from the right was initially set to `0`, but its current value might be different. It's now up to you to write a function that will change the <code>k^th^</code> bit of `n` back to `0`.

## Example

- For `n = 37` and `k = 3`, the output should be

  ```:no-line-numbers
  kill_kth_bit(n, k) = 33
  ```

  <code>37~10~ = 100**1**01~2~ ~> 100**0**01~2~ = 33~10~</code>.

- For `n = 37` and `k = 4`, the output should be

  ```:no-line-numbers
  kill_kth_bit(n, k) = 37
  ```

  The <code>4^th^</code> bit is `0` already (looks like the Mad Coder forgot to encrypt this number), so the answer is still `37`.

## Input/Output

- **\[input\] integer n**

  _Guaranteed constraints:_
  <code>0 ≤ n ≤ 2^31^ - 1</code>.

- **\[input\] integer k**

  The `1`\-based index of the changed bit (counting from the right).

  _Guaranteed constraints:_
  `1 ≤ k ≤ 31`.

## Solution

::: code-group
<<< ./kill-k-th-bit.py [PYTHON]
:::
