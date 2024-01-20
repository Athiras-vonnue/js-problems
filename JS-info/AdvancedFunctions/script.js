//Recursion and stack

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 3));

//recursive thinking

function pow1(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow1(x, n - 1);
  }
}

console.log(pow1(2, 3));

//shorter way

function pow2(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(5, 3));

//Rest parameters and spread syntax

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); //3

//by using the rest parameters

function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

function showName(fName, lName, ...name) {
  console.log(fName, "", lName);
  console.log(...name);
}

showName("Julius", "Ceaser", "Consult", "Imperator");

//Spread Syntax
/*1cvbbvbdyunbn bbvvghhhbbbvv  vvbbvvcc      vbb   v v b b v cvvbvccvbvc   
vvrrrtyttttttfffgggggggggbbbnnnvv*/

//Nested functions

function sayHiBye(fName, lName) {
  function getFullName() {
    return fName + " " + lName;
  }
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye("Athira", "Suresh");

//example

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//closure

function f() {
  let value = Math.random();
  function g() {
    debugger;
    return value;
  }
  return g;
}

let g = f();
console.log(g());

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";
sayHi();

//it will took the latest change

if (true) {
  var test = true;
}

console.log(test);

(function () {
  var msg = "Hello";
  console.log(msg);
})(); // IIFE

+(function () {
  console.log("This is IIFE");
})();

//Global Objects
//window.alert("Polyfills")

//using polyfills

// if (!window.Promise) {
//   console.log("your browser is too old");
// }

//function Object,NFE

//JS functions are type of objects

function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name);

//the length property

function f1(a) {}
function f2(a, b) {}
function many(a, b, c, d, e, ...more) {}

console.log(f1.length);
console.log(many.length);

//custom properties

function sayHi() {
  console.log("Hi");
  sayHi.counter++;
}
sayHi.counter = 0;
sayHi();
sayHi();
sayHi();
sayHi();
sayHi.counter = 0;
sayHi();

console.log(`Called ${sayHi.counter} times`);

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter1 = makeCounter();
console.log(counter1);

let sayHello = function (who) {
  console.log(`Hello, ${who}`);
};
console.log(sayHello("ann"));

//Add a name to it

let Hello = function func(who) {
  console.log(`Hello, ${who}`);
};

console.log(Hello("Aman"));

let sayHello1 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};
sayHello1("Annu");
//func();==> we cant access this function outside

//Scheduling:setTimeout and setInterval

//setTimeout("console.log", 1000);

function sayHi(phrase, who) {
  console.log(phrase + "," + who);
}

setTimeout(sayHi, 1000, "Hello", "John");

//setInterval

//et timerId = setInterval(() => console.log("tick"), 2000);

// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("stop");
// }, 5000);

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

sayHi.call(user);
sayHi.call(admin);

let worker = {
  slow(min, max) {
    return min + max;
  },
};
//worker.slow = cachingDecorator(worker.slow);

//Borrowing a method

function hash(args) {
  return args[0] + "," + args[1];
}

console.log(hash(1, 2));
/**Function binding
When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".
s passed somewhere separately from the object – this is lost.

Here’s how it may happen with setTimeout:

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
As we can see, the output shows not “John” as this.firstName, but undefined! 
*/

let user1 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user1.sayHi, 1000);

//solution 1:a wrapper

setTimeout(function () {
  user1.sayHi();
}, 1000);

//setTimeout(() => user1.sayHi(), 1000);

user = {
  sayHi() {
    console.log("Another user in set timeout");
  },
};
setTimeout(() => user1.sayHi(), 1000);

//bind

let user2 = {
  firstName: "Mary",
};
function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user2);
funcUser();

function func(phrase) {
  console.log(phrase + "," + this.firstName);
}

let funcUser1 = func.bind(user2);
//funcUser("Hello");

//Partial Functions

//let bound = func.bind(context, [arg1], [arg2]);

//bind
function mul(a, b) {
  return a * b;
}
let double = mul.bind(null, 2);

console.log(double(3));
console.log(double(7));

function mulply(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

console.log(triple(3));
console.log(triple(4));
function partial(func, argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

//usage

// let user4 = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}]${this.firstName}:${phrase}!`);
//   },
// };
// user4.sayNow = partial(
//   user.say,
//   new Date().getHours() + ":" + new Date().getMinutes()
// );

// user4.sayNow("Hello");

// Usage:
let users = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// add a partial method with fixed time
users.sayNow = partial(
  users.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

//users.sayNow("Hello");
/*
// Something like:
// [10:00] John: Hello!
*/

let group = {
  title: "Our Group",
  students: ["John", "Abraham", "Aaron", "Alice", "Pete"],
  showList() {
    this.students.forEach((student) => console.log(this.title + ":" + student));
  },
};
//group.showList();

//javascript binding:
const person = {
  fName: "John",
  lName: "Doe",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};
const member = {
  fName: "Hege",
  lName: "Nilson",
};
let fullNames = person.fullName.bind(member);
// fullNames();
console.log(fullNames());
/*



*/
