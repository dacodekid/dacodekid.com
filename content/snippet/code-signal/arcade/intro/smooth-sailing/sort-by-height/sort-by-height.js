function sortByHeight(a) {
  const sorted = a.filter((x) => x !== -1).sort((x, y) => x - y);
  return a.map((x) => (x === -1 ? x : sorted.shift()));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
