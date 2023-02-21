def seats_in_theater(nCols, nRows, col, row):
    return (nCols - col + 1) * (nRows - row)


print(seats_in_theater(16, 11, 5, 3))
