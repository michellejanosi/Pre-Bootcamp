// popFront(arr)
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// For example, popFront([5, 93, 22, 4]) should return 5 and the original array should result as [93, 22, 4].

function popFront(arr) {
  const frontElement = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();
  return frontElement;
}

console.log(popFront([5,93,22,4])); // => 5
