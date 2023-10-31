function even_digits_only(n) {
  return n
    .toString()
    .split('')
    .every((digit) => digit % 2 === 0);
}

console.log(even_digits_only(248622));
