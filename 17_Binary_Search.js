var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = null;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
