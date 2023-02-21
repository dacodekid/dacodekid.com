def different_squares(matrix):
    squares = set()
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[i]) - 1):
            squares.add(
                str([
                    [matrix[i][j], matrix[i][j+1]],
                    [matrix[i+1][j], matrix[i+1][j+1]],
                ]),
            )

    return len(squares)


print(different_squares(
    [
        [5, 2, 1],
        [2, 9, 2],
        [2, 2, 2],
        [1, 2, 3],
        [2, 2, 1]
    ]
))
