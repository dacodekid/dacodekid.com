function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      break;
    }
    height -= downSpeed;
  }
  return days;
}

console.log(growingPlant(6, 5, 10));
