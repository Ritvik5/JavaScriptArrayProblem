// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.


// Generate 10 random 3-digit numbers
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 900) + 100);
}

// Find the 2nd largest and 2nd smallest elements
let max1 = arr[0], max2 = arr[1], min1 = arr[0], min2 = arr[1];
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max1) {
    max2 = max1;
    max1 = arr[i];
  } else if (arr[i] > max2) {
    max2 = arr[i];
  }
  if (arr[i] < min1) {
    min2 = min1;
    min1 = arr[i];
  } else if (arr[i] < min2) {
    min2 = arr[i];
  }
}   

console.log("The second largest element is: " + max2);
console.log("The second smallest element is: " + min2);

