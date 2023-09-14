const btn = document.getElementById("v2");

btn.onclick = function () {
  console.log("Button v2 clicked.");
};

function scream() {
  console.log("mrgrgr");
}

// do not add () to scream or else it will be executed on load.
// you want to execute the function when moused over.
btn.onmouseenter = scream;

// document.querySelector("h1").onclick = function () {
//   alert("you clicked the h1");
// };

// evenet listeners, the prefered way vs. the version directly above.
const button = document.querySelector("h1");

// generic listener then run the callback function
button.addEventListener("click", () => {
  alert("You clicked me");
});

const btn3 = document.querySelector("#v3");

// arrow fucntion used as the call back
// many different event listener options.
btn3.addEventListener("mousedown", () => {
  console.log("You clicked button 3.");
});

// using the addEventListener it allows for multiple propetied
// to be assigned to the same item.
btn3.addEventListener("mouseup", () => {
  console.log("You unclicked button 3.");
});

const btnHello = document.querySelector("#hello");
const btnGoodbye = document.querySelector("#goodbye");

btnHello.addEventListener("click", () => {
  console.log("hello");
});

btnGoodbye.addEventListener("click", () => {
  console.log("goodbye");
});
