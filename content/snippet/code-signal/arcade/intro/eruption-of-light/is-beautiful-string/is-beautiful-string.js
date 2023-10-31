function isBeautifulString(inputString) {
  const charMap = {};
  const charCode = 'a'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    charMap[String.fromCharCode(charCode + i)] = 0;
  }
  for (let i = 0; i < inputString.length; i++) {
    charMap[inputString[i]]++;
  }
  const charMapKeys = Object.keys(charMap);
  for (let i = 0; i < charMapKeys.length - 1; i++) {
    if (charMap[charMapKeys[i]] < charMap[charMapKeys[i + 1]]) {
      return false;
    }
  }
  return true;
}

console.log(isBeautifulString('bcdeff'));
console.log(isBeautifulString('aabb'));
console.log(isBeautifulString('bbc'));
