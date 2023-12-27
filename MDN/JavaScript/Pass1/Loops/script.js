//For.....of loops

const cats = ["Leopard", "Sernval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

//map and Filter

function upper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(upper);
console.log(upperCats);

//Filter

function filterCats(string) {
  return string.startsWith("L");
}
const lCats = cats.filter(filterCats);
console.log(lCats);

//Standard loops

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0/ 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
btn.addEventListener("click", draw);

const pets = ["Pete", "Biggles", "Jasmine"];

let myFavouriteCats = "My cats are called ";
// for (const pet of pets) {
//   myFavouriteCats += `${pet},`;
// }
// console.log(myFavouriteCats);

//remove last punctuation

for (let i = 0; i < pets.length; i++) {
  if (i === pets.length - 1) {
    myFavouriteCats += `and ${pets[i]}`;
  } else {
    myFavouriteCats += `${pets[i]},`;
  }
}
console.log("new:", myFavouriteCats);

//Exiting loop with break

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", searchContact);

function searchContact() {
  const searchValue = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splited = contact.split(":");
    const contactName = splited[0].toLowerCase();

    if (contactName === searchValue) {
      para.textContent = `${splited[0]}:${splited[1]}`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = `Contact not found`;
  }
}

//Skip iteration with continue

const paras = document.querySelector("#para");
const inputs = document.querySelector("#number");
const btns = document.querySelector("#btns");

btns.addEventListener("click", () => {
  paras.textContent = "Output: ";
  const num = inputs.value;
  inputs.value = "";
  inputs.focus();
  console.log(num);

  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    paras.textContent += `${i} `;
  }
});

//While and do-while

let myCats = ["Pete", "Biggles", "Jasmine"];
let myFavouriteCat = "my cats are called";
let i = 0;
while (i < myCats.length) {
  if (i === myCats.length - 1) {
    myFavouriteCat += `and ${myCats[i]}.`;
  } else {
    myFavouriteCat += `${myCats[i]},`;
  }
  i++;
}
console.log(myFavouriteCat);

//Count down

let text = "Count down ";

let j = 10;
while (j >= 0) {
  text += `${i}`;
  console.log(text);

  // if (j == 0) {
  //   console.log("Blast off!");
  // }
  j--;
}

//Example
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

i = 0;
while (i < people.length) {
  if (people[i] === "Phil" || people[i] === "Lola") {
    refused.textContent += people[i];
  } else {
    admitted.textContent += people[i];
  }
}
