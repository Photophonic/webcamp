const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// selects the first H1
const v_h1 = document.querySelector("h1");
// remember, console.dir(v_h1) can view the saved object

// innerText & textContent to view just the selected content, sensitive to what is showing
const v_P = document.querySelector("p").innerText;

// textContent will show everything despite markup settings
const v_P2 = document.querySelector("p").textContent;

// to manipulate the selected content
//document.querySelector("p").innerText = "lolololololo";

const allLink = document.querySelectorAll("a");

// using a for of loop to update all selected a tags
// for (let link of allLink) {
//   link.innerText = "lololo";
// }

// innerText escaptes characters and treats it like text
document.querySelector("h1").innerText = "<i>hfaihfoihs</i>";

// instead, need to use innerHtml to apply the tags
document.querySelector("h1").innerHTML = "<i>hfaihfoihs</i>";

// it will return the entire markup of the html
const v_P3 = document.querySelector("p").innerHTML;
// not used often for viewing, more useful for updating the tags

// if the id is changed from banner, it will break any associated CSS styles
document.querySelector("#banner").id = "whoops";

// reverting it back
document.querySelector("#whoops").id = "banner";

// will return the url of the a tag
const url = document.querySelector("a").href;

// get and set attribute
const firstLink = document.querySelector("a");
// can use firstLink.href to see the url. Goes through the JS Object
// using firstLink.getAttribute('href') will get the computed value
// setAttribute(x,y) will modify the URL
firstLink.setAttribute("href", "https://google.com");

// use a css attribute selectore to specify
const inpt = document.querySelector('input[type="text"]');
// modify the input type
inpt.type = "color";
// put it back
inpt.setAttribute("type", "text");

// <h4>Which Came First?</h4>
// <img src="https://devsprouthosting.com/images/egg.jpg" width="200px">
// <!-- image source: unsplash.com -->

const eggChicken = document.querySelector("img");

eggChicken.setAttribute(
  "src",
  "https://devsprouthosting.com/images/chicken.jpg"
);
eggChicken.setAttribute("alt", "chicken");
