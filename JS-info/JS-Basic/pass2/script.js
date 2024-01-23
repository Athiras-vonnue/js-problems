//Nullish coalescing operator "??"

/*
if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
*/

let firstName = 0;
let lastName = null;
let nickName = "superCoder"; // return first defined values

// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

//loops

//skipping parts
// let i = 0;
// for (; i < 3; i++) {
//   console.log(i);
// }

//breaking the loops

// let sum = 0;
// while (true) {
//   let value = 1;s
//   if (!value) break;
//   sum += value;
// }
//console.log("sum:" + sum);
/*
continues
 */

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}

//labels for break/continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    //let input = prompt(`Value at coords (${i},${j})`, "");
    //if (!input) break outer;
  }
}

console.log("Done!");

//switch statements
// Any expressions can be written in switch statements

//functions

function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}
showMessage("Ann", "BNG");

//naming Functions

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("you agreed");
}
function showCancel() {
  console.log("You cancelled the execution");
}
ask("Do you agree?", showOk, showCancel);

//function expression vs function declaration
function sum(a, b) {
  return a + b;
}

let sums = function (a, b) {
  return a + b;
};
console.log(sums(2, 6));

let tot = (a, b) => {
  let result = a + b;
  return result;
};

console.log(tot(5, 6));

//Automated Linters
//debug the code while checking the coding style pattern

//Automated testing with Mocha

/*

 */

describe("pow", function () {
  it("raises to n-th-power", function () {
    assert.equal(pow(2, 3), 8);
  });
});
