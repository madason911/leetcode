var findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let pos = nums[i] - 1;
    if (nums[i] !== nums[pos]) {
      nums[i] = nums[i] ^ nums[pos];
      nums[pos] = nums[i] ^ nums[pos];
      nums[i] = nums[i] ^ nums[pos];
    } else {
      i += 1;
    }
  }

  const res = [];
  nums.forEach((item, index) => {
    if (index !== item - 1) {
      res.push(index + 1);
    }
  });

  return res;
};
