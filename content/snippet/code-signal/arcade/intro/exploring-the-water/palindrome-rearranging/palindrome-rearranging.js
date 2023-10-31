function palindromeRearranging(inputString) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < inputString.length; i++) {
    if (obj[inputString[i]]) {
      obj[inputString[i]]++;
    } else {
      obj[inputString[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      count++;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
}

console.log(palindromeRearranging('aabbcc'));
