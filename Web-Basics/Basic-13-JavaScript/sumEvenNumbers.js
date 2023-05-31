// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

function sumEvenNumbers() {
  let sum = 0;

  for (let i = 2; i < 1000; i+=2) {
    sum += i;
  }

  return sum;
}
