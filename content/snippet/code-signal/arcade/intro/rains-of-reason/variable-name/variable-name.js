function variable_name_v1(name) {
  return /^[a-zA-Z_]\w*$/.test(name);
}

console.log(variable_name_v1('_abc123__'));
