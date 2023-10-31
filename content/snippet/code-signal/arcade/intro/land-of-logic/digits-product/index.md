---
title: Digits Product
---

# Digits Product

Given an integer `product`, find the _smallest_ **positive** (i.e. greater than `0`) integer the product of whose digits is equal to `product`. If there is no such integer, return `-1` instead.

## Example

- For `product = 12`, the output should be

  ```:no-line-numbers
  digits_product(product) = 26
  ```

- For `product = 19`, the output should be

  ```:no-line-numbers
  digits_product(product) = -1
  ```

## Input/Output

- **\[input\] integer product**

  _Guaranteed constraints:_
  `0 ≤ product ≤ 600`.

## Solution

::: code-group
<<< ./digits-product.py [PYTHON]
<<< ./digits-product.js [JAVASCRIPT]
:::
