function validTime(time) {
  let [hh, mm] = time.split(':');
  return 0 <= hh && hh < 24 && 0 <= mm && mm < 60;
}

console.log(validTime('13:58'));
