var missingNumber = function (nums) {
  let n = nums.length;
  return (
    Math.floor((n * (n + 1)) / 2) -
    nums.reduce((acc, item) => {
      return acc + item;
    }, 0)
  );
};
