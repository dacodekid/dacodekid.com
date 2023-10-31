function messageFromBinaryCode(code) {
  return code
    .match(/.{8}/g)
    .map((char) => String.fromCharCode(parseInt(char, 2)))
    .join('');
}

console.log(messageFromBinaryCode('010010000110010101101100011011000110111100100001'));
