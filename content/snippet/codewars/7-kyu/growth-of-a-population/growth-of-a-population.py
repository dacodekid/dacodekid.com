def growth_of_a_population(p0, percent, aug, p):
    year = 0
    while p0 < p:
        p0 = int(p0 + (p0 * percent / 100) + aug)
        year += 1
    return year


print(growth_of_a_population(1000, 2, 50, 1200))
