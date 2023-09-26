const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
// let p1Score = 0;
// let p2Score = 0;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    // p1Score += 1;
    player.score += 1;
    // if (p1Score === winningScore) {
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.textContent = "You Win";
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    } else {
      player.display.textContent = player.score;
    }
  }
}

resetGame = () => {
  isGameOver = false;
  winningScore = 3;
  // create a loop and loop over the players
  // create array of players for iterator
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.button.disabled = false;
    p.display.classList.remove("winner", "loser");
  }
};

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

reset.addEventListener("click", resetGame);

// resetGame = () => {
//     isGameOver = false;
//     winningScore = 3;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = p1Score;
//     p2Display.textContent = p2Score;
//     p1Button.disabled = false;
//     p2Button.disabled = false;
//     p1Display.classList.remove("winner", "loser");
//     p2Display.classList.remove("winner", "loser");
//   };

// p1Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p1Score += 1;
//     if (p1Score === winningScore) {
//       isGameOver = true;
//       p1Display.textContent = "You Win";
//       p1Display.classList.add("winner");
//       p2Display.classList.add("loser");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     } else {
//       p1Display.textContent = p1Score;
//     }
//   }
// });

// p2Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p2Score += 1;
//     if (p2Score === winningScore) {
//       isGameOver = true;
//       p2Display.textContent = "You Win";
//       p2Display.classList.add("winner");
//       p1Display.classList.add("loser");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     } else {
//       p2Display.textContent = p2Score;
//     }
//   }
// });
