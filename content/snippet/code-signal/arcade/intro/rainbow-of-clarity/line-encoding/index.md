---
title: Line Encoding
---

# Line Encoding

Given a string, return its encoding defined as follows:

- First, the string is divided into the least possible number of disjoint consisting of identical characters

  - for example, `"aabbbc"` is divided into `["aa", "bbb", "c"]`

- Next, each _substring_ with length greater than one is replaced with a concatenation of its length and the repeating character

  - for example, _substring_ `"bbb"` is replaced by `"3b"`

- Finally, all the new strings are concatenated together in the same order and a new string is returned.

## Example

For `s = "aabbbc"`, the output should be

```:no-line-numbers
line_encoding(s) = "2a3bc"
```

## Input/Output

- **\[input\] string s**

  String consisting of lowercase English letters.

## Solution

::: code-group
<<< ./line-encoding.py [PYTHON]
<<< ./line-encoding.js [JAVASCRIPT]
:::
