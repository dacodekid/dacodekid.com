---
title: Which are in?
---

# Which are in?

Given two arrays of strings `a1` and `a2` return a sorted array `r` in lexicographical order of the strings of `a1` which are substrings of strings of `a2`.

## Example

```:no-line-numbers
`a1 = ["arp", "live", "strong"]`
`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`
returns `["arp", "live", "strong"]`

`a1 = ["tarp", "mice", "bull"]`
`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`
returns `[]`
```

::: tip Note
Beware: `r` must be without duplicates.
:::

## Solution

::: code-group
<<< ./which-are-in.py [PYTHON]
:::
