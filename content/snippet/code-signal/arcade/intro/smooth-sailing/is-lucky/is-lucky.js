function isLucky(n) {
  let string = n.toString();
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2, string.length);
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    firstSum += parseInt(firstHalf[i]);
    secondSum += parseInt(secondHalf[i]);
  }

  return firstSum === secondSum;
}

console.log(isLucky(134008));
