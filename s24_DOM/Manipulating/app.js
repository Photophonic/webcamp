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

// changing styles
const h1 = document.querySelector("h1");
// can view in the console styles with h1.styles
// to change the style inline with JS. Not preferred but works
h1.style.color = "blue";
h1.style.fontSize = "3em";

// using a loop to target all links with inline
for (let link of allLink) {
  link.style.color = "red";
  link.style.textDecorationColor = "blue";
  link.style.textDecorationStyle = "wavy";
}

// the preffered way is to assign classes
const h2 = document.querySelector("h2");
// comes back null
h2.getAttribute("classes");

// this will add the class purple to the tag.
// There is a css class named puprle so the style would apply
h2.setAttribute("class", "purple");

// to get the class list of an object
h2.classList;

// to add to it use .add (similar to push for arrays)
h2.classList.add("boreder");

// to remove a class
h2.classList.remove("border");

// to toggle
h2.classList.toggle("purple");

const firstBold = document.querySelector("b");

console.log(firstBold.parentElement);
// will return <p> tags, can keep goign up line.
// every element will have only one parent.

const para = firstBold.parentElement;
//para.children will return all child objects to the element.

const child = para.children;
// to view use [#]. e.g. child[3]

const imgSquare = document.querySelector(".square");

const imgNext = imgSquare.nextElementSibling;

const imgPrev = imgSquare.previousElementSibling;

//append and append child
const newImage = document.createElement("img");
// console.dir(newImage) to view the object

newImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";

// to add the image, you need to append it to an existing item.
document.body.appendChild(newImage);
// add a class
newImage.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "new H3";
document.body.appendChild(newH3);

// another option. apped. Is more flexible than appendChild()
const p = document.querySelector("p");
// appends to the end of the paragraph
p.append("New Text Here", " More text here");

p.prepend("Even more new text");

const lotsOfButtons = document.querySelector("#container");

for (let i = 0; i <= 100; i++) {
  const newButtons = document.createElement("button");
  const buttonText = document.createTextNode("Hey");
  newButtons.appendChild(buttonText);

  lotsOfButtons.appendChild(newButtons);
}
