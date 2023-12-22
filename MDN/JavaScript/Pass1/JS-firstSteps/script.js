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

myNam = "Chris";

function logName() {
  console.log(myNam);
}
logName();
var myNam;

//Numbers

let myAge = 17;

//strings
let dolphinGoodbye = "So long and thanks for all the fish";

//Boolean values = true

let myNum = 500;
console.log(typeof myNum);

let string = "500";
console.log(typeof string);

//let
let data1 = 30;
data1 = 90;
console.log(data1);

//const

//Objects

const bird = { species: "kestrel" };
console.log(bird.species);
bird.species = "parrot";
console.log(bird.species);

let count = 10;
const data = "myData";
// data = "Athira";

console.log(data);

//Basic math in JS- numbers and operators
//Types of numbers

//integer
//floating point numbers
//Double

/*Play with Numbers*/

const myInt = 5;
const myFloat = 6.67;

console.log(typeof myInt);

const dec = 1.7894656354;
console.log(dec.toFixed());

//Converting to number data types

let myNumber = "74";
myNumber += 3;
console.log(myNumber); //743

//to solve this

myNum = Number(myNumber);

myNum += 3;

console.log(myNum);

console.log(10 + 7);

console.log(9 * 8);

const num1 = 5;
const num2 = 10;
let res = 9 * num1;
console.log(res);

console.log(num1 ** 3);
let op = (num1 + num2) / (8 + 2);

console.log(op);

//increment and decrement operator

let num3 = 4;
console.log(num3++);
console.log(num3++);
console.log(num3--);
console.log(num3);

//Assignment operators
let x = 3;
let y = 4;
console.log((x *= y));

//calculate height
let a = 43;
let b = 7;

console.log(a + b);
//height =75

let c = 25;
let d = 3;

console.log(c * d);
let e = 1000;
let f = 750;

console.log(e % f);

//wide 150
var X = 400;
var Y = 2;
var Z = 50;
console.log(X / Y - Z);

//Assignment operator
X = 50 * 4;
console.log(X);

//wide 200, using 50 and 3
X = 50;
Y = 3;

X += X * Y;

console.log(X);

const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "start machine") {
    btn.textContent = "stop machine";
    para.textContent = "The machine has started";
  } else {
    btn.textContent = "start machine";
    para.textContent = "The machine is stopped";
  }
}

//Task 1

a = 10;
b = 2;
c = 2;
d = 10;

let sum = a + b;
let sub = d - c;
let finalResult = sum * sum;
if (finalResult % 2 === 0) {
  console.log(finalResult, "is even");
} else {
  console.log(finalResult, "is odd");
}

//Task2
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result *= result2;
console.log(typeof result);
let finalNumber = result.toFixed(2);
console.log(finalNumber);

//Strings declared using backticks are a special kind of string called a template literals
//Embedding JS

const person = "Chris";
const greetings = `Hello, ${person}`;
console.log(greetings);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

