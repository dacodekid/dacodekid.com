def closest_to_zero(num):
    if len(num) < 1:
        return 0

    n = num[0]

    for element in num:
        if element != 0 and abs(n) > abs(element):
            n = element
    return n


print(closest_to_zero([5, -5, 0, 1, 12]))
