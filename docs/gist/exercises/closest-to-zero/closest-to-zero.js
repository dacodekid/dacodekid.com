function closestToZero(nums) {
  let smallestNum;

  if (nums.length < 1) return 0;

  smallestNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    if (Math.abs(smallestNum) === Math.abs(nums[i])) {
      smallestNum = Math.abs(smallestNum);
    } else if (smallestNum > nums[i]) {
      smallestNum = nums[i];
    }
  }

  return smallestNum;
}

console.log(closestToZero([-5, 5, 0, 15, 12]));
