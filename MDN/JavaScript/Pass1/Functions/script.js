//Built in functions

const myText = "I am a string";
const newString = myText.replace("string", "sausage");

console.log(newString);

//array function

const myArray = ["I", "Love", "Chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

//function with parameters

function hello(name = "Chris") {
  console.log(`Hello ${name}`);
}
hello("Athira");
hello();

//Anonymous function and arrow functions
//function that doesn't have any name
(function () {
  alert("Hello");
});

const textBox = document.querySelector("#textBox");
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

//textBox.addEventListener("keydown", logKey);

//use by anonymous function

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}`);
});

//Arrow functions

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}`);
});

//example 2

const originals = [1, 2, 3, 4, 5, 6];

const doubled = originals.map((item) => item * 2);
console.log(doubled);

//Functional scope

const x = 1;

function a() {
  const y = 2;
  return y;
}
function b() {
  const z = 3;
  return z;
}

function output(value) {
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = `Value:${value}`;
  return value;
}

console.log(output(x));
//console.log(output(y));
//console.log(output(z));

console.log(a());
console.log(b());

const btn = document.querySelector(".btn");

function displayMsgBox(msgType) {
  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  document.body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = "This is a message Box";
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
  if (msgType === "warning") {
    msg.style.backgroundImage = "url(warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}

displayMsgBox("warning");
btn.addEventListener("click", displayMsgBox);

//Return Values

const para = document.querySelector(".para");
const input = document.querySelector(".input");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to Enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}`;
  }
});

//Events
