// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// getElementById (TagName/ClassName) - SINGULAR
// to select an element by the ID tag. Needs to match an ID on the HTML
const banner = document.getElementById("banner");
//console.dir(banner) to see this object in console.

const toc = document.getElementById("toc");
console.log(toc);

// getElementsById (TagName/ClassName) - PLURAL
// document.getElementsByTagName("img") - returns an HTML collection
const allImages = document.getElementsByTagName("img");
// can use array syntax to access the stored elements.
console.log(allImages[0]);

// can use for of loops because they are iterable
for (let image of allImages) {
  //.src to see the source of the image
  console.log(image.src);
}

// can modify all the sources and replace with the new src

// for (let img of allImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// }

// getElementsByClassName to select classes
const allClass = document.getElementsByClassName("square");

for (let clss of allClass) {
  console.log(clss.src);
  //clss.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
}

// New selection methods. querySelector/SelectorAll

// finds the first element
const qselector = document.querySelector("h1");
console.log(qselector);

// One method with '#red' or '.big' to select ID or Classes too.
const topQS = document.querySelector("#banner");
console.log(topQS);

// querySelectorAll will return all matches, anchor tags of paragraphs
const aTag = document.querySelectorAll("p a");
console.log(aTag);

for (let anchor of aTag) {
  // .href will return the source of all the anchors
  console.log(anchor.href);
}
