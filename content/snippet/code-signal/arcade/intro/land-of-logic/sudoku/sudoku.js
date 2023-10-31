function sudoku(grid) {
  // check each row for duplicates
  for (let row of grid) {
    if (row.length !== new Set(row).size) {
      return false;
    }
  }

  // check each column for duplicates
  for (let i = 0; i < grid.length; i++) {
    let col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }
    if (col.length !== new Set(col).size) {
      return false;
    }
  }

  // create 3x3 2D matrix as a flat 1D and check for duplicate
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      let f = [];
      for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
          f.push(grid[i][j]);
        }
      }
      if (f.length !== new Set(f).size) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ])
);
