function chessKnight(cell) {
  let count = 0;
  let x = cell.charCodeAt(0) - 96;
  let y = parseInt(cell[1]);
  let moves = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y + 2],
  ];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i][0] > 0 && moves[i][0] < 9 && moves[i][1] > 0 && moves[i][1] < 9) {
      count++;
    }
  }
  return count;
}
