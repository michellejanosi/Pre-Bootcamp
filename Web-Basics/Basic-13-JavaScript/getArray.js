// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function getArray() {
  const allTheNumbers = [];

  for (let i = 1; i <= 255; i++) {
    allTheNumbers.push(i);
  }

  return allTheNumbers;
}

console.log(getArray());
