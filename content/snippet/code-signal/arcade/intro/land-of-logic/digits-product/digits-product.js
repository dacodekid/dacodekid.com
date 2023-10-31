// def digits_product(product):
//     # #smallest possible number for product 400 is 3558
//     for i in range(1, 3559):
//         smallest = 1
//         for char in str(i):
//             smallest *= int(char)
//         if(smallest == product):
//             return i
//     return -1

// print(digits_product(600))

function digitsProduct(product) {
  // smallest possible number for product 400 is 3558
  for (let i = 1; i < 3559; i++) {
    let smallest = 1;
    for (let char of i.toString()) {
      smallest *= parseInt(char);
    }
    if (smallest === product) {
      return i;
    }
  }
  return -1;
}

console.log(digitsProduct(600));
