function array_replace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((element) => {
    if (element === elemToReplace) {
      return substitutionElem;
    }
    return element;
  });
}

console.log(array_replace([1, 2, 1], 1, 3));
