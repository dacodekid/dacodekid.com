function longestWord(text) {
  let maxWord = '';
  let word = '';

  for (let char of text) {
    if (char.match(/[a-zA-Z]/)) {
      word += char;
    } else {
      maxWord = word.length > maxWord.length ? word : maxWord;
      word = '';
    }
  }

  return word.length > maxWord.length ? word : maxWord;
}

console.log(longestWord('Ready, steady, go!'));
