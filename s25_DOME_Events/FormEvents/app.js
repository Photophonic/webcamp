// event PreventDefault

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  // this event will prevent the form from doing the normal default
  // in this page, it prevents the form from going to a different page
  e.preventDefault();
  // capture the contents of the form
  const catName = input.value;
  // create a new LI element
  const newLi = document.createElement("LI");
  newLi.innerText = catName;
  // append the new LI value to the UL in the HTML page.
  cats.append(newLi);
  // reset the input form
  form.reset();
});

//Lab Exercise
// <!DOCTYPE html>

// <head>
//     <title>Grocery List</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Grocery List</h1>
//     <form action="/nowhere">
//         <label for="product">Enter A Product</label>
//         <input type="text" id="product" name="product">
//         <label for="qty">Enter A Quantity</label>
//         <input type="number" id="qty" name="qty">
//         <button>Submit</button>
//     </form>

//     <ul id="list"></ul>
// </body>

// </html>

// // Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// const prodInput = document.querySelector('#product');
// const qtyInput = document.querySelector('#qty');
// const ul = document.querySelector('#list')

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//    const prod = prodInput.value;
//    const qty = qtyInput.value;
//    const newLi = document.createElement('LI');
//    newLi.innerText = (`${qty} ${prod}`);
//    ul.appendChild(newLi);
//    form.reset();
// });
