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
