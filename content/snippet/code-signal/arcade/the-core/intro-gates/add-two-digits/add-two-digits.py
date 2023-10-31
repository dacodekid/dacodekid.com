def add_two_digits(n):
    n = str(n)
    if len(n) == 1:
        return int(n)
    else:
        return int(n[0]) + int(n[1])


print(add_two_digits(29))
