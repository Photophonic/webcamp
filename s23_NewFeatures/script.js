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
