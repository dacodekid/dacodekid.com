function differentSquares(matrix) {
  const squares = new Set();
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      squares.add(
        JSON.stringify([
          [matrix[i][j], matrix[i][j + 1]],
          [matrix[i + 1][j], matrix[i + 1][j + 1]],
        ])
      );
    }
  }

  return squares.size;
}

console.log(
  differentSquares([
    [5, 2, 1],
    [2, 9, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1],
  ])
);
