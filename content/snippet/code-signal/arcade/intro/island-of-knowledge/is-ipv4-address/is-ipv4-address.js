// Input:
// inputString: "1.1.1.1a"
// Expected Output:
// false
function is_ipv4_address(inputString) {
  const parts = inputString.split('.');
  if (parts.length !== 4) {
    return false;
  }
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.length === 0) {
      return false;
    }
    if (part.length > 1 && part[0] === '0') {
      return false;
    }
    if (part.length > 3) {
      return false;
    }
    const num = Number(part);
    if (isNaN(num)) {
      return false;
    }
    if (num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}

console.log(is_ipv4_address('234.3.123.123'));
