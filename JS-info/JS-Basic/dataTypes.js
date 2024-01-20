console.log(typeof 0);
console.log(typeof new Number(0));

let str = "Hello";
str.test = 5;
console.log(str.test);

//numbers

let billion = 1e9;
console.log(billion);
let mcs = 1e-6;
console.log(mcs);

//hex,binary,octal

console.log(0xff);
console.log(0b11111111);
console.log(0o377);

//toString(base)

let num = 255;
console.log(num.toString(2));

let number = 1.23456;
console.log(Math.round(number * 100) / 100);
console.log(number.toFixed(1));

console.log(parseInt("100px"));

//other math functions

console.log(Math.max(3, 10, -5, 0, 1));
console.log(Math.min(3, 10, -5, 0, 1));
console.log(Math.pow(2, 10));

//strings
//escape sequence
console.log("I'm the Walrus");

//Accessing characters

str = "Hello";

// console.log(str[0]);
// console.log(str.at(-4));

//searching for a substring

let str1 = "Widget with id";

str = "As sly as a fox, as strong as an ox";

let target = "as";

let pos = 1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

console.log(str1.includes("Widget"));
console.log(str1.startsWith("Wid"));
console.log(str1.endsWith("id"));

//getting a substring

let str2 = "stringify";
console.log(str2.slice(0, 5));

//String Comparison

console.log(String.fromCodePoint(90));

let strg = "";
for (let i = 65; i <= 220; i++) {
  strg += String.fromCodePoint(i);
}

console.log(strg);

//truncate function

function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));
