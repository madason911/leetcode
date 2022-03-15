var maxSubArray = function (nums) {
  let max_sum = nums[0];
  let current_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    current_sum = Math.max(current_sum + num, num);
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
};
