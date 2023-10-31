function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const diff = inputArray[i] - inputArray[i + 1] + 1;
      inputArray[i + 1] += diff;
      count += diff;
    }
  }
  return count;
}

console.log(arrayChange([-1000, 0, -2, 0]));
