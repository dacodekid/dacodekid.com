function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}

console.log(firstDigit('Abc1d2'));
