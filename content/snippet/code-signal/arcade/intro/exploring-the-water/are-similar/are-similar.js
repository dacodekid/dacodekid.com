// Input:
// a: [1, 2, 3]
// b: [2, 1, 3]

// Expected Output:
// true

function areSimilar(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff++;
    }
  }
  if (diff > 2) {
    return false;
  }
  a.sort();
  b.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

print(areSimilar([1, 2, 3, 4], [1, 3, 2, 4]));
