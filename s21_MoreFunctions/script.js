function collectEggs() {
  let totalEggs = 6;
  console.log(totalEggs);
}

const creature = "Common Sea Dragon";

function scubaDive() {
  const creature = "Spanish Dancer"; //A type of sea slug
  console.log(creature);
}

scubaDive();

let radius = 8;

// block level scope is between {}
if (radius > 0) {
  const PI = 3.1459;
  let circ = 2 * PI * radius;
  console.log(circ);
}

console.log(radius);

// functon expressions. Allows passing and storing of funcation variables
const add = function (x, y) {
  return x + y;
};

console.log(add(2, 4));

const squares = function (num) {
  //return num * num;
  return Math.pow(num, 2);
};

console.log(squares(4));

// Higher order functions. Functions that operate on or with
// other functions. Can accept and/or return functions.

// functions as arguments
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("mfmnfmfmfmf");
}

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDice);

// returning functions
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Great function.");
    };
  } else {
    return function () {
      console.log("Bummer you lose");
    };
  }
}

// to use the returned fucntion
let mystery = makeMysteryFunc();

function makeBetweenFunc(min, min) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// Methods - a funcation that has been placed as a property on an object
const square = {
  area: function (side) {
    return Math.pow(side, 2);
  },
  perimeter: function (side) {
    return side * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10));

// THIS in methods, used in objects in a method
const cat = {
  name: "Beryl",
  color: "Grayish",
  breed: "American Short Hair",
  meow() {
    console.log(`${this.name} says merp merp`);
  },
};

const meow2 = cat.meow;

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount += 1;
    return "EGG";
  },
};

// error catching try/catch.
try {
  hello.toUpperCase();
} catch {
  console.log("ERRROROROROROR!");
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string");
  }
}
