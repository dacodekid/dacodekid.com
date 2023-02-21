import re


def reverse_in_parentheses(inputString):
    m = re.search(r"\(([^()]*)\)", inputString)
    if m is None:
        return inputString
    return reverse_in_parentheses(inputString[: m.start()] + m.group(1)[::-1] + inputString[m.end():])


print(reverse_in_parentheses("(bar)"))
