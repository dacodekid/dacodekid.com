function isMAC48Address(inputString) {
  const regex = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/;
  return regex.test(inputString);
}

console.log(isMAC48Address('00-1B-63-84-45-E6'));
