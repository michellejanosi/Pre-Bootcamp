// minToFront(arr)
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.

// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].

function minToFront(arr) {
  const minValue = Math.min(...arr);
  const minIndex = arr.indexOf(minValue);

  for (let i = minIndex; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = minValue; 

  return arr;
}

console.log(minToFront([4,2,1,3,5])); // => [1,4,2,3,5]
console.log(minToFront([5,93,22,4])); // => [4,5,93,22]
