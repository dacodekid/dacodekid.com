function digitDegree(n) {
  let count = 0;
  while (n > 9) {
    n = n
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b));
    count++;
  }
  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));
