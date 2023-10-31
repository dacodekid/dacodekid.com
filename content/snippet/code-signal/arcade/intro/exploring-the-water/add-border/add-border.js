function addBorder(picture) {
  const wall = '*'.repeat(picture[0].length + 2);
  const result = [wall];
  for (let i = 0; i < picture.length; i++) {
    result.push('*' + picture[i] + '*');
  }
  result.push(wall);
  return result;
}

console.log(addBorder(['abc', 'ded']));
