function build_palindrome(st) {
  let i = 0;
  while (i < st.length) {
    let sub = st.substring(i);
    if (sub === sub.split('').reverse().join('')) {
      return st + st.substring(0, i).split('').reverse().join('');
    }
    i++;
  }
}

console.log(build_palindrome('abba'));
