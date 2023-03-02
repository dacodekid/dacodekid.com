function checkPalindrome(inputString: string): boolean {
  return inputString === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('saippuakivikauppias'));
