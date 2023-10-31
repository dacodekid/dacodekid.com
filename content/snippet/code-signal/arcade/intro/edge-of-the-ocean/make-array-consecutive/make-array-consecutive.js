function makeArrayConsecutive(statues) {
  // return Math.max(...statues) - Math.min(...statues) - statues.length + 1;

  // without ... operator
  let min = statues[0];
  let max = statues[0];
  for (let i = 1; i < statues.length; i++) {
    if (statues[i] < min) {
      min = statues[i];
    }
    if (statues[i] > max) {
      max = statues[i];
    }
  }
  return max - min - statues.length + 1;
}

console.log(makeArrayConsecutive([6, 2, 3, 8]));
