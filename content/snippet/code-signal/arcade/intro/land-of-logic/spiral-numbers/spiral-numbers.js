function spiralNumbers(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let [x, y, dx, dy] = [0, 0, 1, 0];
  for (let i = 1; i <= n * n; i++) {
    result[y][x] = i;
    if (x + dx >= n || x + dx < 0 || y + dy >= n || y + dy < 0 || result[y + dy][x + dx] !== undefined) {
      let temp = dx;
      dx = -dy;
      dy = temp;
    }
    x += dx;
    y += dy;
  }
  return result;
}

console.log(spiralNumbers(3));
