def sudoku(grid):
    # check each row for duplicates
    for row in grid:
        if len(row) != len(set(row)):
            return False

    # check each column for duplicates
    for i in range(len(grid)):
        col = [row[i] for row in grid]
        if len(col) != len(set(col)):
            return False

    # create 3x3 2D matrix as a flat 1D and check for duplicate
    for row in range(0, 9, 3):
        for col in range(0, 9, 3):
            f = []
            for i in range(row, row + 3):
                for j in range(col, col + 3):
                    f.append(grid[i][j])
            if len(f) != len(set(f)):
                return False

    return True


print(sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]))
