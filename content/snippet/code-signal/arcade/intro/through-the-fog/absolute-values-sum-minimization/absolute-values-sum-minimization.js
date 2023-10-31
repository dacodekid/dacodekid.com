function absoluteValuesSumMinimization(a) {
  let min = Number.MAX_VALUE;
  let minIndex = 0;
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }
    if (sum < min) {
      min = sum;
      minIndex = i;
    }
  }
  return a[minIndex];
}

console.log(absoluteValuesSumMinimization([2, 4, 5, 7]));
