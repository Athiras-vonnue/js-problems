const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", changeBackground);

function changeBackground() {
  const ranCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = ranCol;
}

//remove event listeners

btn.removeEventListener("click", changeBackground);

//Remove event handlers

const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal }
);

controller.abort();

//Event Objects

function changeBackground(e) {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
  //e is the event object
}

const form = document.querySelector("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const para = document.getElementById("para");

form.addEventListener("submit", (e) => {
  if (fName.value === "" || lName.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill the form!";
  }
});

//Event bubbling
//Capture

const container = document.getElementById("container");
const output = document.getElementById("output");
const button = document.getElementById("butn");

function handleClick(e) {
  output.textContent = `You clicked on a ${e.currentTarget.tagName}`;
}
container.addEventListener("click", handleClick, { capture: true });
document.body.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick, { capture: true });

const btn1 = document.querySelector(".button");
const box = document.querySelector(".div");
const video = document.querySelector("video");

btn1.addEventListener("click", () => {
  box.classList.remove("hidden");
});

video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});
box.addEventListener("click", () => box.classList.add("hidden"));

//Event delegation

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}
function bgChange() {
  const ranColor = `rgb(${randomNumber(255)},${randomNumber(
    255
  )},${randomNumber(255)})
  return ranColor;`;
}

const tileContainer = document.querySelector("#tile-container");
tileContainer.addEventListener("click", (e) => {
  e.target.style.backgroundColor = bgChange();
});
