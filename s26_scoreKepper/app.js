const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

resetGame = () => {
  isGameOver = false;
  winningScore = 3;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
};

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.textContent = "You Win";
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    } else {
      p1Display.textContent = p1Score;
    }
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.textContent = "You Win";
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    } else {
      p2Display.textContent = p2Score;
    }
  }
});

reset.addEventListener("click", resetGame);
1;
