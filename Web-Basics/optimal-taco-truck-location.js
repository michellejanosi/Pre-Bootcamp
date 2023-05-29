/* Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to the locations of his customers. He also uses an array of [x,y] as coordinates corresponding to the location where he parks his truck. Customers walk from their location to his truck, but Joe wants to minimize the total distance from his truck to his customers, so he's looking for a better place to park. Feature request: given a customer coordinate array, return an optimal taco truck location.

Here's what we know: City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location.
*/

// Calculate the Manhattan distance (The distance between two points measured along axes at right angles.) between two points

function calculateDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

// Find the optimal parking spot for the taco truck
function findOptimalTruckLocation(customerCoordinates) {
  let minTotalDistance = Infinity;
  let optimalLocation = null;

  // Consider each customer's location as a potential parking spot
  for (let i = 0; i < customerCoordinates.length; i++) {
    const potentialParkingSpot = customerCoordinates[i];
    let totalDistance = 0;

    // Calculate the total distance from the potential parking spot to all customers
    for (let j = 0; j < customerCoordinates.length; j++) {
      const customerLocation = customerCoordinates[j];
      totalDistance += calculateDistance(potentialParkingSpot, customerLocation);
    }

    // If this potential parking spot is better than the current best one, update it
    if (totalDistance < minTotalDistance) {
      minTotalDistance = totalDistance;
      optimalLocation = potentialParkingSpot;
    }
  }

  // Return the best parking spot found
  return optimalLocation;
}

const customerCoordinates = [[0, 0], [2, -2], [5, 5], [-1, 3]];
const optimalLocation = findOptimalTruckLocation(customerCoordinates);

console.log("Optimal taco truck location:", optimalLocation);
