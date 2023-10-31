// read the python file from this folder and convert it to javascript

function deleteDigit(n) {
  let max = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(deleteDigit(152));
