const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("enter a name");
  button.textContent = `player 1:${name}`;
}

function createPara() {
  alert("This is my para");
}

//Javascript comments
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button";
  document.body.appendChild(para);
}

/*
get references to all the buttons on the page
*/

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

//Arithmetc operators

let number = 1;
console.log((number += 2));

//strit equality

console.log(4 === 2); //false

console.log("chris" === "Bob"); //false
console.log(5 === 2 + 3); //true
//Not equal to
console.log(5 !== 2 + 5); //true

//less than

console.log(5 < 7); //true

//Greater than
console.log(4 > 1); //true

//strings
const name = "Athira";
const greeting = `Hello ${name}`;
console.log(greeting);

//Loops

const fruits = ["apple", "bananas", "Cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

let myNames;
let Age;
console.log(myNames);

let myName = "Chris";

console.log(myName);
