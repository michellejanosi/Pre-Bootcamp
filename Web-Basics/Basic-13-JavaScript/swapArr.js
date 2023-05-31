// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapArr(arr) {
  const first = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = first;

  return arr;
}

console.log(swapArr([1,5,10,-2])) // => [-2,5,10,1]
