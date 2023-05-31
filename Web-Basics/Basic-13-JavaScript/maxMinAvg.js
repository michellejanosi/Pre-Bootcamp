// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
  let sum = 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  const newArr = [max, min, average];
  return newArr;
}

console.log(maxMinAvg([1,5,10,-2])) // => [10,-2,3.5]
