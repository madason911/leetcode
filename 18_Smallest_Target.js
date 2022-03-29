var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let mid = null;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target >= letters[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return letters[left % letters.length];
};
