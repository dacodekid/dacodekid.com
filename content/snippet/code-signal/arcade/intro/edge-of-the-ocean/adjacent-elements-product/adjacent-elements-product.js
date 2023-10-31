function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > max) {
      max = product;
    }
  }
  return max;
}

// we should output -12
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
