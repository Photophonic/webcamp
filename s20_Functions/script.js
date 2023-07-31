function rollDie(diceSides) {
  return Math.floor(Math.random() * diceSides) + 1;
}

for (let i = 0; i < 6; i++) {
  console.log(rollDie(10));
}

function printHeart() {
  console.log("<3");
}

printHeart();

function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}

rant("woooo");

function greet(firstName, lastName) {
  // strings are treated like arrays and can be accessed
  // here we are returning the first letter of the last name 'D'
  console.log(`Hi there ${firstName} ${lastName[0]}!`);
}

greet("Bob", "Dole");

function repeat(input, num) {
  result = "";
  for (let i = 0; i < num; i++) {
    result += input;
  }
  console.log(result);
}

repeat("hi ", 3);

function isSnakeEyes(d1, d2) {
  if (d1 === 1 && d2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

isSnakeEyes(1, 2);
isSnakeEyes(3, 2);
isSnakeEyes(1, 1);

function isSnakeEyes(d1, d2) {
  if (d1 === 1 && d2 === 1) {
    return "Snake Eyes!";
  } else {
    return "Not Snake Eyes!";
  }
}
