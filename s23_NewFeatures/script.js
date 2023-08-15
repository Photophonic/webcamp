// set argument = Something to set a default
function rollDie(dSides = 6) {
  return Math.floor(Math.random() * dSides) + 1;
}

// the order matters on default and inputs. Best to put them after the first
function message(msg, person = "Person") {
  console.log(`${msg} ${person}`);
}

// Spread, expands an iterable into a list of arguments
// includes array, string, ect.
// spread example
const nums = [9, 3, 5, 2, 7];
// Math.max is looking for the largest number in a group of arguments
console.log(Math.max(...nums), Math.min(...nums));
// returns 9 & 2.
// this will spred the array into the function.

// this will print the entire array as individual strings
console.log(...nums);

// can also spread iterables into a new array
const cats = ["Beryl", "Zeros", "Komi", "Vegas"];
const dogs = ["Sebatian", "Raleigh"];

// create the new array off the existing ones as arguments
const pets = [...cats, ...dogs];

console.log(pets);

pets.push("Chise");

console.log(pets);
console.log(...cats, " ", ...dogs, " ", ...pets);

// copy objects into new objects with spread
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
};

const dog = { ...canine, isPet: true };
const lion = { ...feline, genus: "Panthera" };

// conflicint property, so it will go with the second one then manual ones.
const catDog = { ...cats, ...dog };

console.log(dog, lion);

// example af updating objects as needed
const dataFromForm = {
  email: "BobDole@yahoo.com",
  password: "abc12345678",
  username: "BDole999",
};

// will ad the two properties to the newUser object
const newUser = {
  ...dataFromForm,
  isAdmin: false,
  userName: "BobDole13",
};

console.log(newUser);

// rest paramater, collects all remaining arguments into an array/single parameter
// will not work with arrow functions.
function sum(...nums) {
  console.log(nums);

  // pass in a callback function that returns the accumulated amount of prices
  return nums.reduce((total, element) => total + element);
}

// first two are pulled and then the remaining arguments are bunched into the ...others
function raceResults(gold, silver, ...others) {
  console.log(`Gold goes to ${gold}`);
  console.log(`Silver goes to ${silver}`);
  console.log(`The rest are ${others} `);
}

raceResults("Bill", "Pete", "Stu", "Ron", "John", "Mark");

// Destructuring. A means to separate values in an array to separate variables
const scores = [99, 96, 80, 75, 70, 65, 60];

/* Old Way:
const highScore = [0];
const runnerUp = [1];
*/

// create three variables off the scores array
const [hightScore, runnerUp, ...others] = scores;
console.log(hightScore);
console.log(runnerUp);
console.log(others);

// to get an element out of an object with destructuring
// use property name: New Name to change the name of the new variable
// to add default values
const {
  email,
  password,
  username,
  userName,
  isAdmin: Admin,
  Country = "US",
} = newUser;
// this will create standalone variables of the element from the object
console.log(Country);
