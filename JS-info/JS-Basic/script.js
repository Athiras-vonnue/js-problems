//alert("I'm Javascript");

let admin;
let name = "John";
admin = name;
console.log(admin);

let currentUser;
console.log(9007199254740991 + 2); // 9007199254740992

//user interactions

// let result = prompt("Enter your name");
// console.log(result);
//ssasaszsasasasaaa

let age = 2;

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "hello"
    : age < 100
    ? "Greetings"
    : "What an unusual age";
console.log(message);

//tasks

if (4) {
  console.log("hi");
}
if ("0") {
  console.log("hello");
}

//rewrite if int ?

let result;
5 > 4 ? (result = "true") : (result = "false");

console.log(result);

let msg;
let login = "empl";
login === "empl"
  ? (msg = "hello")
  : login == "director"
  ? (msg = "greetings")
  : login === ""
  ? (msg = "No login")
  : (msg = "");

console.log(msg);

let hour = 12;
if (hour < 10 || hour > 18) {
  console.log("The office is closed");
} else {
  console.log("Opened");
}

console.log(1 || 0); //1
console.log(null || 0); //0
console.log(null || 0 || 1); //1
console.log(undefined || null || 0); //0

//short circuiting

console.log(true || "hii");

//Operators
console.log(2 ** 8);
//nummeric conversion unary

console.log(+true + 1);

console.log("apple" < "pineapple"); //false
console.log(+"2" < +"12");
console.log(undefined === null);
console.log(null === +"\n0\n");

console.log(null || 2 || undefined);
console.log(1 && null && 2);

// let user;
// console.log(user ?? "none");

let fName = null;
let lName = null;
let nName = "supercoder";

//console.log(fName ?? lName ?? nName ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
//console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
