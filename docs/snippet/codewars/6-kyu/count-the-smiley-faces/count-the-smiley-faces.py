def count_the_smiley_faces(x, y):
    x_total, y_total = 0, 0

    x_total = sum(ord(x[i]) - 64 for i in range(len(x)))
    y_total = sum(ord(y[i]) - 64 for i in range(len(y)))

    return x if x_total > y_total else y if x_total < y_total else 'Tie!'


print(count_the_smiley_faces("AAA", "Z"))
