// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr) {
  // average = arr items sum / arr.length
  let sum = 0;
  const average = sum / arr.length;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return average
}

console.log(findAvg([1,3,5,7,20])) // 7.2
