function find_email_domain(address) {
  return address.split('@').pop();
}

console.log(find_email_domain('abc@gmail.com'));
