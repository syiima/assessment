export const filterInputArray = inputArray => {
  return inputArray
    .split(',')
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));
};

export const twoSumFinder = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
