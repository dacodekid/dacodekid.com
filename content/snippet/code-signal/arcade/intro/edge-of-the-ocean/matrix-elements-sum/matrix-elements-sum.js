function matrixElementsSum(matrix) {
  let rent = 0;
  for (let section = 0; section < matrix[0].length; section++) {
    for (let room = 0; room < matrix.length; room++) {
      if (matrix[room][section] === 0) {
        break;
      }
      rent += matrix[room][section];
    }
  }
  return rent;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
