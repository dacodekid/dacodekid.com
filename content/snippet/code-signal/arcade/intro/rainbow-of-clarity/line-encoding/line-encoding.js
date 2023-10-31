// read the python version of this snippet from this folder
// and convert it to javascript

function lineEncoding(s) {
  let count = 1;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        result += count + s[i];
      } else {
        result += s[i];
      }
      count = 1;
    }
  }
  return result;
}

console.log(lineEncoding('aabbbc'));
