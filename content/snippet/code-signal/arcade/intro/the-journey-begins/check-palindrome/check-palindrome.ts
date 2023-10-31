// function checkPalindrome(inputString: string): boolean {
//   return inputString === inputString.split('').end().join('');
// }

function checkPalindrome(inputString: string): boolean {
  var start: number = 0;
  var middle: number = inputString.length / 2;
  var end: number = inputString.length - 1;

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
