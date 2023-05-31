// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers() {
  const allTheOdds = [];

  for (let i = 1; i < 50; i+=2) {
    allTheOdds.push(i);
  }

  return allTheOdds;
}

console.log(oddNumbers());
