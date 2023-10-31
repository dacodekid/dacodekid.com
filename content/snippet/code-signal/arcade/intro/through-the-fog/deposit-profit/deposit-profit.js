function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let current = deposit;
  while (current < threshold) {
    current += (current * rate) / 100;
    years++;
  }
  return years;
}

console.log(depositProfit(100, 20, 170));
