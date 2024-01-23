function sayHi() {
  console.log("Hello");
}

window.sayHi();
console.log(window.innerHeight);

//DOM
//document.body.style.backgroundColor = "red";
//document.body.style.background = "red";

// console.log(location.href);
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://wikipedia.org";
// }

// for (let node of document.body.childNodes) {
//   console.log(node);
// }

let chapter = document.querySelector(".chapter");

console.log(chapter.closest(".contents"));
console.log(chapter.closest("h1"));
console.log(chapter.closest(".book"));

//An example of the DOM

console.log(chapter);
console.dir(chapter);

myDiv = document.body.querySelector("#myDiv");
myDiv.innerHTML = "The new Text";
console.log(myDiv.outerHTML);
console.log(myDiv.innerHTML);
