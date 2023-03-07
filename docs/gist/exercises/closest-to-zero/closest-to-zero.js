function closestToZero(num) {
  let n;

  if (num.length < 1) return 0;

  n = num[0];

  num.forEach((element) => {
    if (element != 0 && Math.abs(n) > Math.abs(element)) {
      n = element;
    }
  });
  return n;
}

console.log(closestToZero([5, -5, 0, 15, 12]));
