// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToStr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1, 'Dojo');
    }
  }

  return arr;
}

console.log(numberToStr([-1,-3,2])) // => ['Dojo','Dojo',2]
