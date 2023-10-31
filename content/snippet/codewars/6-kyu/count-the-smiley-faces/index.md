---
title: Count the smiley faces!
---

# Count the smiley faces!

Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

## Rules:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`
- No additional characters are allowed except for those mentioned.

::: tip Tip
**Valid smiley face examples:** `:) :D ;-D :~)`

**Invalid smiley faces:** `;( :> :} :]`
:::

## Example

```:no-line-numbers
count_the_smiley_faces([':)', ';(', ';}', ':-D']);       // should return 2;
count_the_smiley_faces([';D', ':-(', ':-)', ';~)']);     // should return 3;
count_the_smiley_faces([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

::: tip Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
:::

## Solution

::: code-group
<<< ./count-the-smiley-faces.py [PYTHON]
:::
