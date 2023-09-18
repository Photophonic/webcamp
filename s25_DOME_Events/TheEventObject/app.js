document.querySelector("button").addEventListener("click", function (evt) {
  // capture the contents of the event
  console.log(evt);
});

const input = document.querySelector("input");

// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });

input.addEventListener("keydown", function (evt) {
  //console.log(evt);
  //return the info of the key
  console.log(evt.key);
  // location of the keyboard location
  console.log(evt.code);
});

// use window.add if you want to "listen" on the whole screen.
window.addEventListener("keydown", function (evt) {
  // console.log(evt.key);
  // location of the keyboard location
  console.log(evt.code);
  switch (evt.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
