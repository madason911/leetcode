var singleNumber = function (nums) {
  let res = 0;
  nums.forEach((item) => {
    res ^= item;
  });

  return res;
};
