function reverseInParentheses(inputString) {
  const regex = /\(([^()]*)\)/;
  let result = inputString;
  let match = result.match(regex);

  while (match) {
    const reversed = match[1].split('').reverse().join('');
    result = result.replace(regex, reversed);
    match = result.match(regex);
  }

  return result;
}

console.log(reverseInParentheses('foo(bar(baz))blim'));
