function allLongestStrings(inputArray) {
  let longest = 0;
  let longest_strings = [];

  // find the longest string
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
    }
  }

  // find all strings that are the longest
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longest) {
      longest_strings.push(inputArray[i]);
    }
  }

  return longest_strings;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
