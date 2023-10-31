function bishopAndPawn(bishop, pawn) {
  return Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) == Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1));
}

console.log(bishopAndPawn('a1', 'b1'));
console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('g1', 'f3'));
console.log(bishopAndPawn('h1', 'h3'));
