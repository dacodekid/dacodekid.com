def digit_degree(n):
    degree = 0

    while(n > 9):
        n = sum(list(map(int, (str(n).strip()))))
        degree += 1

    return degree


print(digit_degree(5))
print(digit_degree(100))
print(digit_degree(91))
