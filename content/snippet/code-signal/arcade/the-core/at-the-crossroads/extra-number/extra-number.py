def extra_number(a, b, c):
    if a == b:
        return c
    if a == c:
        return b
    return a


print(extra_number(2, 7, 2))
