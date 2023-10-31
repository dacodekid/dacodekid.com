---
title: Is IPv4 Address?
---

# Is IPv4 Address?

An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the [IPv4 address](keyword://ipv4-address).

Given a string, find out if it satisfies the IPv4 address naming rules.

## Example

- For `inputString = "172.16.254.1"`, the output should be

  ```:no-line-numbers
  is_ipv4_address(inputString) = true
  ```

- For `inputString = "172.316.254.1"`, the output should be

  ```:no-line-numbers
  is_ipv4_address(inputString) = false
  ```

  `316` is not in range `[0, 255]`.

- For `inputString = ".254.255.0"`, the output should be

  ```:no-line-numbers
  is_ipv4_address(inputString) = false
  ```

  There is no first number.

## Solution

::: code-group
<<< ./is-ipv4-address.py [PYTHON]
<<< ./is-ipv4-address.js [JAVASCRIPT]
:::
