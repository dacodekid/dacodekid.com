def factorial(f):
    if f < 0:
        return 0
    if f < 2:  # 0! = 1, 1! = 1
        return 1
    return f * factorial(f-1)


# nCr = n! / (r! * (n-r)!)
# n = total people, r = team size
n = 4
r = 2
result = factorial(n) // (factorial(r) * factorial(n-r))

print(result)
