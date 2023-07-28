for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// nested for loop
let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log(`i is ${i}`);
  for (let j = 0; j < str.length; j++) {
    console.log("Inner: ", str[j]);
  }
}

// practical example of looping through arrays
const seatingChart = [
  ["sam", "josh", "christian", "isaac", "bob", "mike"],
  ["kelly", "olivia", "shannon", "megan", "aubrey"],
  ["pete", "joe", "steve", "will"],
];

for (let i = 0; i < seatingChart.length; i++) {
  for (let j = 0; j < seatingChart[i].length; j++) {
    console.log(seatingChart[i][j]);
  }
}

// for of loop
const subreddits = ["cringe", "books", "chickens", "cars", "camping", "pics"];

for (let sub of subreddits) {
  console.log(sub);
}

// cannot be iterated over with for of loop
const testScores = {
  a: 2,
  b: 4,
  c: 77,
  d: 83,
  e: 2,
  f: 99,
};

// to accomplish this, use the for in loop. This will only give the key
for (i in testScores) {
  console.log(i);
}

// to get the value do this.
for (i in testScores) {
  // key, then value
  console.log(i, testScores[i]);
}

// another option. Object.X(Y) will create an array of the items for use
console.log(Object.keys(testScores));
console.log(Object.entries(testScores));
console.log(Object.values(testScores));

// creates the array for iteration of the object's values
let total = 0;

for (let i of Object.values(testScores)) {
  total += i;
}

console.log(total);

// modifed version to get the length.
let totals = 0;
let scores = Object.values(testScores);

for (let i of scores) {
  totals += i;
}

console.log(totals);
console.log(totals / scores.length);
