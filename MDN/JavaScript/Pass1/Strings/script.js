//Concat

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeying = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

//concat using '+'

const greeting = "hello";
const name = "Chris";
console.log(greeting + " " + name);

//We can write using template literals

console.log(`${greeting}, ${name}`);

//including expressions in strings

const song = "Fight thre Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%`;
console.log(output);

//multiline strings

const newLine = `one day you finally knew

what you had to do, and began`;

console.log(newLine);

//including quotes in strings
const goodQuotes = 'she said,"I think so"';

console.log(goodQuotes);

//escape characters

const bigMouth = "I've got no right to take my place...";
console.log(bigMouth);

//String conversion

const myString = "123";
const myNum = Number(myString);
console.log(typeof myString);

//string manipulations

//Length of the string
const browserType = "mozilla";
console.log(browserType.length);

//Retrieving a specific string character
console.log(browserType[browserType.length - 1]);

//Testing if a string contains a substring

//includes method
let string = "My journey";

if (string.includes("ney")) {
  console.log(true);
} else {
  console.log(false);
}

//starts with and endswith
console.log(string.endsWith("ney"));

console.log(string.startsWith("My"));

//Finding the position of substring in a string

const tagLine = "MDN - Resources for developers, by developers";
console.log(tagLine.indexOf("developers"));

console.log(tagLine.indexOf("x"));

//find subSequent occurance of a substring

const firstOccurance = tagLine.indexOf("developers");
const secondOccurance = tagLine.indexOf("developers", firstOccurance + 1);

console.log(firstOccurance);
console.log(secondOccurance);
//Extracting a substring from a string

const browserTypes = "mozilla";
console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));

//Changing case

const radData = "My name is Mud";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//Updating parts of a string

const dataObj = "Mozilla";
const updated = dataObj.replace("Moz", "van");
console.log(updated);

//Update all occurance

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);

//Filtering greeting messages
const list = document.querySelector(".greet");
list.innerHTML = "";

const greetings = [
  "Happy Birthday!",
  "Merry christmas my Love",
  "A happy christmas to all the family",
  "You're all I want for christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  if (greeting.includes("christmas")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}

//Exercise

const data = document.querySelector(".greet");
list.innerHTML = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  let cityName = city.toLowerCase();
  let firstLetter = cityName[0];
  cityData = cityName.replace(firstLetter, firstLetter.toUpperCase());
  console.log(cityData);
  const listItem = document.createElement("li");
  listItem.textContent = cityData;
  data.appendChild(listItem);
}

//Making new strings from old parts

const trainDetails = document.querySelector(".greet");
trainDetails.innerHTML = "";
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  let code = station.slice(0, 3);
  let index = station.indexOf(";");
  let stationName = station.slice(index + 1);
  let result = `${code} ${stationName}`;
  console.log(result);
  const listItem = document.createElement("li");
  listItem.textContent = result;
  trainDetails.appendChild(listItem);
}

//Arrays
