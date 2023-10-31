function circleOfNumbers(n, first_number) {
  return (first_number + n / 2) % n;
}

console.log(circleOfNumbers(10, 2));
