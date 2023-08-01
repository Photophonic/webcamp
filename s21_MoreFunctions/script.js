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

function multiply(num1, num2) {
  let sum = num1 * num2;
  return sum;
}

console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

function isShortWeather(temperature) {
  if (temperature > 75) {
    return true;
  } else {
    return false;
  }
}

const test = [98, 88, 77];
console.log(test[test.length - 1]);

function lastElement(array) {
  if (array.length !== 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
}

lastElement([3, 5, 7]); //7
lastElement([1]); //1
lastElement([]); //null

function capitalize(inputString) {
  const capitalized =
    inputString.charAt(0).toUpperCase() + inputString.slice(1);
  return capitalized;
}

capitalize("eggplant"); // "Eggplant"
capitalize("pamplemousse"); // "Pamplemousse"
capitalize("squid"); //"Squid"

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let p1 = sumArray([2, 2, 3]);

let p2 = sumArray([1, 2, 3]); // 6
let p3 = sumArray([2, 2, 2, 2]); // 8
let p4 = sumArray([50, 50, 1]); // 101

console.log(p1, p2, p3, p4);

function returnDay(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num - 1];
  }
}

p1 = returnDay(1); // "Monday"
p2 = returnDay(7); // "Sunday"
p3 = returnDay(4); // "Thursday"
p4 = returnDay(0); // null

console.log(p1, p2, p3, p4);
