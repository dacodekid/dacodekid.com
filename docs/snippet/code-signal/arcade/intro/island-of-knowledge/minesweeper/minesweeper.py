def minesweeper(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    result = [[0 for _ in range(cols)] for _ in range(rows)]

    for row in range(rows):
        for col in range(cols):
            if matrix[row][col]:
                for i in range(max(0, row - 1), min(rows, row + 2)):
                    for j in range(max(0, col - 1), min(cols, col + 2)):
                        if i != row or j != col:
                            result[i][j] += 1
    return result


print(minesweeper([
    [True, False, False],
    [False, True, False],
    [False, False, False]
]))
