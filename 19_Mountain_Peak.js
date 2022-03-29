var peakIndexInMountainArray = function (arr) {
  let left = 0;

  let right = arr.length - 1;
  let mid = null;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};
