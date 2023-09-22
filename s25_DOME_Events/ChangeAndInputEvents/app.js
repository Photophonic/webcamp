const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// this only fires when the value is changed after the fact
// input.addEventListener("change", function () {
//   console.log("loooooooog");
// });

//input event
input.addEventListener("input", function (e) {
  //  This will capture the value from the input field
  //  and will update the h1 value.
  h1.innerText = input.value;
});

// <head>
//     <title>Input Event</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Enter Your Username</h1>
//     <input type="text" id="username">
// </body>

// const input = document.querySelector('#username');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function(){
//          const message = ('Welcome, '+input.value);

//          if (input.value.length === 0){
//              h1.innerText = 'Enter Your Username'
//          } else {
//              h1.innerText = message ;
//          }
//     })
