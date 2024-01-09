console.log("Hi");
console.log("Hello");
console.log("World");

//strict mode

//Code Quality
// javascript deBugging

function hello(name) {
  let phrase = `Hello,${name}`;
  say(phrase);
}
function say(phrase) {
  console.log(`**${phrase}**`);
}

console.log(hello("john"));

//coding styles

function pow(x, n) {
  if (n < 0) {
    // alert("Negatine 'n' not allowed");
    return;
  }
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, -3));
let i;
console.log((i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0)); //0

let height;
height = height ?? 100;
console.log(height);
