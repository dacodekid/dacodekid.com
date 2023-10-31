---
title: RGB To Hex Conversion
---

# RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

::: tip Note
Your answer should always be 6 characters long, the shorthand with 3 will not work here.
:::

## Example

The following are examples of expected output values:

```:no-line-numbers
rgb_to_hex_conversion(255, 255, 255) # returns FFFFFF
rgb_to_hex_conversion(255, 255, 300) # returns FFFFFF
rgb_to_hex_conversion(0,0,0) # returns 000000
rgb_to_hex_conversion(148, 0, 211) # returns 9400D3
```

## Solution

::: code-group
<<< ./rgb-to-hex-conversion.py [PYTHON]
:::
