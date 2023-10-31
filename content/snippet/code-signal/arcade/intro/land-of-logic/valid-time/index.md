---
title: Valid Time
---

# Valid Time

Check if the given string is a correct time representation of the 24-hour clock.

## Example

- For `time = "13:58"`, the output should be

  ```:no-line-numbers
  valid_time(time) = true
  ```

- For `time = "25:51"`, the output should be

  ```:no-line-numbers
  valid_time(time) = false
  ```

- For `time = "02:76"`, the output should be
  ```:no-line-numbers
  valid_time(time) = false
  ```

## Input/Output

- **\[input\] string time**

  A string representing time in `HH:MM` format.
  It is guaranteed that the first two characters, as well as the last two characters, are digits.

## Solution

::: code-group
<<< ./valid-time.py [PYTHON]
:::
