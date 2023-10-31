function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (diff > max) {
      max = diff;
    }
  }
  return max;
}

console.log(arrayMaximalAdjacentDifference([9, 2, 0, 5]));
