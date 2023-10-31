def number_pairs(a, b):
    return [max(a[i], b[i]) for i in range(len(a))]


print(number_pairs([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]))
