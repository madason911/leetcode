var NumArray = function (nums) {
  let sums = [];

  let current_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    current_sum += nums[i];
    sums.push(current_sum);
  }

  this.sums = sums;
};

NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) return this.sums[right];
  return this.sums[right] - this.sums[left - 1];
};
