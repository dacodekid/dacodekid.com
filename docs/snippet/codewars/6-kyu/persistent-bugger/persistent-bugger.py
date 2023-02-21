import math


def persistent_bugger(n):
    count = 0
    while len(str(n)) > 1:
        n = math.prod([int(i) for i in str(n)])
        count += 1
    return count


print(persistent_bugger(39))
