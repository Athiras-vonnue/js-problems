//Objects

let user = {
  name: "John",
  age: 30,
};

//let key = prompt("What do you want to know about the user?", "name");
//alert(user[key]);

//computed properties

// let fruit = prompt("which fruit you buy", "Apple");
// let bag = {};
// bag[fruit] = 5;

// console.log(bag);

//property value shorthand

function makeUser(name, age) {
  //   return {
  //     name: name,
  //     age: age,
  //   };
  //   return {
  //     name,
  //     age,
  //   };
  return {
    name,
    age: 30,
  };
}
let users = makeUser("John");
console.log(users.age);

//property existance test

console.log(user.name === undefined); // false propert exist
//by using "in"

console.log("dob" in user); // false

//The for...in loop

let user1 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user1) {
  console.log(key);
  console.log(user1[key]);
}

//task 1
const createObj = (name) => {
  return {
    name,
  };
};

let obj = createObj("John");
obj.name = "john";
console.log(obj);
obj.suurname = "smith";
obj.name = "pete";
console.log(obj);
delete obj.name;
console.log(obj);

//sum of object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let sal in salaries) {
  sum += salaries[sal];
  console.log(salaries[sal] * 2);
}
//console.log(sum);

//Object reference
let user2 = { name: "John" };
let admin = user2;
admin.name = "Pete";
console.log(user2.name);

//comparison by reference

let a = {};
let b = a;
console.log(a === b); //true

let c = {};
console.log(a == c); //false

//const objects can be modified

const user3 = { name: "John" };
//user3.name = "Pete";
//console.log(user3);

//cloning and merging:

let user4 = {
  name: "David",
  age: 30,
};

// let obj2 = {};
// for (let prop in user4) {
//   obj2[prop] = user4[prop];
// }

//console.log(obj2);

let user5 = {
  DOB: "23/5/2000",
};

let user6 = {
  class: "III Year",
};

//Object.assign(user4, user5, user6);

//console.log(user4);

let userData = {};
let userArr = [user4, user5, user6];

for (let obj of userArr) {
  for (let user in obj) {
    userData[user] = obj[user];
  }
}

console.log(userData);

//nested cloning

let student = {
  name: "Paul",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, student);
console.log(clone);

// let users1 = {};
// users1.me = users1;
// let cloned = structuredClone(users1);
// console.log(cloned);
// console.log(cloned.me === cloned); // true

//Garbage collection

//this keyword

let user10 = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name);
  },
};

user10.sayHi();

let stud = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
stud.sayHi();

//task

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user23 = makeUser();
console.log(user23.ref.name); //undefined

//constructor

function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user9 = new User("Jack");
user9.name = "Athira";
console.log(user9);

function A(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi");
  };
}

function B(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi");
  };
}
// let a1 = new A("Ayhan");
// let b1 = new B("Aryan");
// console.log(a1 === b1); //false

let obj12 = {};

function A() {
  return obj12;
}
function B() {
  return obj12;
}

console.log(new A() == new B()); // true
user = {};
// console.log(user.address ? user.address.street : undefined);
// console.log(user?.address?.name);

let userd = undefined;
let x = 0;

// userd?.sayHi(x++);
console.log(x);

//Symbols

let id = Symbol("id");
let ids = Symbol.for("id");
let user21 = {
  name: "John",
  [id]: 123,
};

console.log(user21[id]);
user21[id] = 345;
console.log(user21[id]);

console.log(Symbol.keyFor(ids));

//Objects to primitive

let ob = {
  name: "Catherine",
};
// let ob1;
// ob1[ob] = 123;
console.log(ob);

let num = Number(ob);
//console.log(typeof num);

let user14 = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint:${hint}`);
    return hint == "string" ? `{name: "${this.name}}` : this.money;
  },
};
console.log(user14 + 500);

let user15 = {
  name: "Ann",
  money: 2000,
  toString() {
    return `name:"${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
};

console.log(user15);
console.log(+user15);
console.log(user15 + 500);
