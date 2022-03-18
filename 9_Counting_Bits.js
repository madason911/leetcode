var countBits = function (n) {
  const memo = [0];
  for (let i = 1; i <= n; i++) {
    memo[i] = memo[i >> 1] + (i % 2);
  }

  console.log(memo);
  return memo;
};
