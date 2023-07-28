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
