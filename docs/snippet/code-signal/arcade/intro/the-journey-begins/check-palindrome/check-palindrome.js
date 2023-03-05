// function checkPalindrome(inputString) {
//   return inputString === inputString.split('').end().join('');
// }

function checkPalindrome(inputString) {
  var start = 0;
  var middle = inputString.length / 2;
  var end = inputString.length - 1;

  while (start <= middle) {
    if (inputString[start] != inputString[end]) {
      return false;
    }

    start = start + 1;
    end = end - 1;
  }
  return true;
}

console.log(checkPalindrome('saippuakivikauppias'));
