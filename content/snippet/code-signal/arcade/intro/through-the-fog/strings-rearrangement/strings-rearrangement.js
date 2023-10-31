function solution(inputArray) {
  const permutations = inputArray.reduce(
    (acc, cur) => {
      const newAcc = [];
      acc.forEach((item) => {
        for (let i = 0; i <= item.length; i++) {
          newAcc.push([...item.slice(0, i), cur, ...item.slice(i)]);
        }
      });
      return newAcc;
    },
    [[]]
  );

  return permutations.some((item) => {
    for (let i = 0; i < item.length - 1; i++) {
      let diff = 0;
      for (let j = 0; j < item[i].length; j++) {
        if (item[i][j] !== item[i + 1][j]) {
          diff++;
        }
      }
      if (diff !== 1) {
        return false;
      }
    }
    return true;
  });
}

print(strings_rearrangement(['aba', 'bbb', 'bab']));
print(strings_rearrangement(['ab', 'bb', 'aa']));
