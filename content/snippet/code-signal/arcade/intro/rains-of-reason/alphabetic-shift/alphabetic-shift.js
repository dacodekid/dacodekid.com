function alphabetic_shift(inputString) {
  return inputString
    .split('')
    .map((char) => {
      if (char === 'z') {
        return 'a';
      }
      return String.fromCharCode(char.charCodeAt(0) + 1);
    })
    .join('');
}

console.log(alphabetic_shift('z'));
