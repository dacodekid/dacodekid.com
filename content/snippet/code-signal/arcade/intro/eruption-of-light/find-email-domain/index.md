---
title: Find Email Domain
---

# Find Email Domain

An email address such as `"John.Smith@example.com"` is made up of a local part (`"John.Smith"`), an `"@"` symbol, then a domain part (`"example.com"`).

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. [Here](https://en.wikipedia.org/wiki/Email_address#Examples) you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

## Example

- For `address = "prettyandsimple@example.com"`, the output should be

  ```:no-line-numbers
  find_email_domain(address) = "example.com"
  ```

- For `address = "fully-qualified-domain@codesignal.com"`, the output should be

  ```:no-line-numbers
    find_email_domain(address) = "codesignal.com"
  ```

## Solution

::: code-group
<<< ./find-email-domain.py [PYTHON]
<<< ./find-email-domain.js [JAVASCRIPT]
:::
