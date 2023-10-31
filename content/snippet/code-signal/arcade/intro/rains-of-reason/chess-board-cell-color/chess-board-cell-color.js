// c1 = (ord(cell1[0]) - 64 + int(cell1[1])) % 2 == 0
// c2 = (ord(cell2[0]) - 64 + int(cell2[1])) % 2 == 0

// return c1 == c2

function chess_board_cell_color(cell1, cell2) {
  const cell1Color = (cell1.charCodeAt(0) - 64 + parseInt(cell1[1])) % 2 === 0;
  const cell2Color = (cell2.charCodeAt(0) - 64 + parseInt(cell2[1])) % 2 === 0;
  return cell1Color === cell2Color;
}

console.log(chess_board_cell_color('A1', 'G1'));
