function box_blur(image) {
  const result = [];
  for (let i = 0; i < image.length - 2; i++) {
    const row = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      let sum = 0;
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          sum += image[k][l];
        }
      }
      row.push(Math.floor(sum / 9));
    }
    result.push(row);
  }
  return result;
}

console.log(
  box_blur([
    [36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45],
  ])
);
