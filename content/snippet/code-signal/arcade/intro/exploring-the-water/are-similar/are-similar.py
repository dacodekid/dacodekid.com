def are_similar(a, b):
    return sorted(a) == sorted(b) and sum([i != j for i, j in zip(a, b)]) <= 2


print(are_similar([1, 2, 3, 4], [1, 3, 2, 4]))
