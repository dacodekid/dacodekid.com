function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (weight1 <= maxW && weight2 <= maxW) {
    return Math.max(value1, value2);
  } else if (weight1 <= maxW) {
    return value1;
  } else if (weight2 <= maxW) {
    return value2;
  } else {
    return 0;
  }
}

console.log(knapsackLight(10, 5, 6, 4, 8));
