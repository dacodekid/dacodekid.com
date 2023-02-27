function adjacentElementsProduct(inputArray) {
  let total = 0;
  for (i = 1; i < inputArray.length; i++) {
    total = Math.max(total, inputArray[i - i] * inputArray[i]);
  }
  return total;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
