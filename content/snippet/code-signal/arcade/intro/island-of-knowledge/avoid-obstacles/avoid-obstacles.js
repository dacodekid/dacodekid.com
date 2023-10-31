function avoidObstacles(inputArray) {
  let i = 1;
  while (inputArray.some((n) => n % i === 0)) {
    i++;
  }
  return i;
}

console.log(avoidObstacles([1000, 999]));
