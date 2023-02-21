def spiral_numbers(n):
    matrix = [[0] * n for _ in range(n)]
    h_row, h_col, v_row, v_col = 0, 0, 0, 1

    for matrix[h_row][h_col] in range(1, n * n + 1):
        if matrix[(h_row + v_row) % n][(h_col + v_col) % n]:
            v_row, v_col = v_col, -v_row
        h_row, h_col = (h_row + v_row), (h_col + v_col)
    return matrix


print(spiral_numbers(3))
