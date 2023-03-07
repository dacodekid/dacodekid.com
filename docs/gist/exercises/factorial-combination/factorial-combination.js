function factorial(f) {
  if (f < 0) return -1;
  if (f < 2) return 1; // 0! = 1, 1! = 1
  return f * factorial(f - 1);
}

// nCr = n! / (r! * (n-r)!)
// n = total people, r = team size
let n = 12;
let r = 2;

let result = factorial(n) / (factorial(r) * factorial(n - r));

console.log(result);
