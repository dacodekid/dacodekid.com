def make_array_consecutive(sequence):
    return max(sequence) - min(sequence) - len(sequence) + 1

print(make_array_consecutive([6, 2, 3, 8]))
