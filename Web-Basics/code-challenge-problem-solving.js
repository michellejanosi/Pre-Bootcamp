/* Read through the user story below.
In a VS Code file, do the following:
Using comments, write out 1 strategy that could be used to solve the problem.
Using comments, create pseudocode (an informal but readable description of code that uses regular language to outline a solution) to apply one of the strategies to solve the problem.
Using comments, write a short paragraph that answers: What is the hardest part of problem-solving?

User Story:
A computer application needs to be able to identify if a written paragraph is written in First, Second, or Third Person (check out the following if you'd like a refresher on First, Second, and Third Person: Refresher Courtesy of Grammarly).

First, second, and third person are ways of describing points of view.

First person is the I/we perspective.
Second person is the you perspective.
Third person is the he/she/it/they perspective.
*/

// A strategy that can be used to solve this problem is check each word in the written paragraph with the words associated with each point of view. If the word is an included word that matches and has the greatest number of the other points of view, that is the dominant narrative.

// create variables for each point of view whose value is the words associated with that point of view.
// create variables accumulator for each point of view.
// convert the written paragraph to an array that separates each word to evaluate.
// iterate through the words array and check if each point of view includes the word from array.
// if the word is included in the point of view, increase the accumulator for that view.
// return the largest of the three points of view.
// include an option of 'mixed' or 'undetermined' if any point of view is the same or equal.

function identifyNarrativeVoice(paragraph) {
  const firstPersonPronouns = ["i", "we"];
  const secondPersonPronouns = ["you"];
  const thirdPersonPronouns = ["he", "she", "it", "they"];
  let firstPersonCount = 0;
  let secondPersonCount = 0;
  let thirdPersonCount = 0;

  const wordsArray = paragraph.toLowerCase().split(" ");

  for(let word of wordsArray) {
    if (firstPersonPronouns.includes(word)) {
      firstPersonCount++;
    } else if (secondPersonPronouns.includes(word)) {
      secondPersonCount++;
    } else if (thirdPersonPronouns.includes(word)) {
      thirdPersonCount++;
    }
  }

  if (firstPersonCount > secondPersonCount && firstPersonCount > thirdPersonCount) {
    return 'First person';
  } else if (secondPersonCount > firstPersonCount && secondPersonCount > thirdPersonCount) {
    return 'Second person';
  } else if (thirdPersonCount > firstPersonCount && thirdPersonCount > secondPersonCount) {
    return 'Third person';
  } else {
    return 'Mixed or unclear point of view';
  }

}

console.log(identifyNarrativeVoice("I went to the store yesterday. I bought some milk."));
// Should output "First person"

console.log(identifyNarrativeVoice("You should see the new movie. It's really good!"));
// Should output "Second person"

console.log(identifyNarrativeVoice("She walks in beauty, like the night."));
// Should output "Third person"

console.log(identifyNarrativeVoice("I think you should come with us."));
// Should output "Mixed or unclear narrative voice"
