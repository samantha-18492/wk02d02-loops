console.log("test");

//create a loop that runs 5 times and log the current iteration to the console. we use a for loop here because we know how many times we want to run the loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
//let i = 0 is the initialization - this action will only be done once at the beginning of the loop. remember the i++ is adding 1 each time, but this part of the code runs AFTER the console.log action inside the {}

// create a while loop that will continue to run until the condition is false. we use a while loop here because we don't know how many times it'll run.
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// create a while loop that runs until Math.random() returns a value lower than 0.1.  if the value is lower than 0.1, set keepLooping to true which will stop the loop
let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);
  //set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1.
  keepLooping = Math.random() < 0.1;
  i++;
}
//the outcome here will change each time the page reloads because Math.random() has been used and it is quite literally random

//create an array of favourite foods
const favouriteFoods = ["pizza", "chocolate", "ice cream", "cheese"];
//loop over the array and log each item to the console
for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i]);
}
//in this example favouriteFoods.length = 4 as there are 4 items in the array.

//create a for...of loop. this loop is more concise than a for loop but it doesn't give you access to the index of the item in the array

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
