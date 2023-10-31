function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++;
      if (i > 0 && matrix[i - 1][j]) count++;
      if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1]) count++;
      if (j > 0 && matrix[i][j - 1]) count++;
      if (j < matrix[i].length - 1 && matrix[i][j + 1]) count++;
      if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1]) count++;
      if (i < matrix.length - 1 && matrix[i + 1][j]) count++;
      if (i < matrix.length - 1 && j < matrix[i].length - 1 && matrix[i + 1][j + 1]) count++;
      result[i][j] = count;
    }
  }
  return result;
}

console.log(
  minesweeper([
    [True, False, False],
    [False, True, False],
    [False, False, False],
  ])
);
