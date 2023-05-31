// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
  const largestNumber = Math.max(...arr);

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > largestNumber) {
  //     largestNumber = arr[i];
  //   }
  // }

  return largestNumber;
}

console.log(findMax([-3,3,5,7])) // 7
console.log(findMax([9,-8,11,305,4])) // 305
