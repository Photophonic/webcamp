// forEach
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// not used as much anymore but runs a loop with an inline function
nums.forEach(function (n) {
  // print only evens using modulo
  if (n % 2 === 0) {
    console.log(n * n);
  }
});

// usage of for of is more commonly used
for (let num of nums) {
  console.log(num);
}

// more complicated example
const movies = [
  {
    title: "Ghostbusters",
    score: 99,
  },
  {
    title: "Thing",
    score: 85,
  },
  {
    title: "IT",
    score: 70,
  },
  {
    title: "Young Guns",
    score: 90,
  },
  {
    title: "Alien",
    score: 95,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}`);
});

// maps
const texts = ["rofl", "lol", "omg", "ttyl"];

const caps = texts.map(function (t) {
  return t.toUpperCase();
});

console.log(texts);
console.log(caps);

// this will pass in the nums array, doubles and reutnrs the result to a
// new array names doubles.
const doubles = nums.map(function (num) {
  return num * 2;
});

console.log(doubles);

const movieTitles = movies.map(function (movies) {
  return movies.title;
});

console.log(movieTitles);

// example:
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (fullNames) {
  return fullNames.first;
});

console.log(firstNames);

// arrow functions, used to create funciton expressions

// as a function expression:
const add = function (x, y) {
  return x + y;
};

// as an arrow
const adds = (x, y) => {
  return x + y;
};

console.log(adds(2, 4));

const square = (x) => {
  return x * x;
};

// implicit returns, only works with arrows.
const greet = (name) => `Hey ${name}!`;

console.log(greet("Bob"));

// combining maps and arrows
const score = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});

const scores = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
