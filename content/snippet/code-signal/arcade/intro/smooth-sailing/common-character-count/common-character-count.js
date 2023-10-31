function commonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      count++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
