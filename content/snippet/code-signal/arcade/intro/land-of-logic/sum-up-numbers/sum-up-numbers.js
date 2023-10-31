// import re

// def sum_up_numbers(input_string):
//     return sum(int(number) for number in re.findall(r'\d+', input_string))

// print(sum_up_numbers('2 apples, 12 oranges'))
// print(sum_up_numbers('there are some (12) digits 5566 in this 770 string 239'))
// print(sum_up_numbers('42+781'))

// Input:
// inputString: "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -"
// Expected Output:
// 98
function sumUpNumbers(inputString) {
  return inputString
    .split(/[^0-9]/)
    .filter((number) => number !== '')
    .reduce((sum, number) => sum + parseInt(number), 0);
}

console.log(sumUpNumbers('Your payment method is invalid'));
