let fruits = ["Apple", "Orange", "Mango", "Pineapple", "Plum"];

///onsole.log(fruits.at(-1));

/**asssasaaasasqqqaassasasassaaassasasaasaa */

for (let fruit in fruits) {
  //console.log(fruit);
}

console.log([1, 2] + 1);

let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);

//Array methods
/**q */

//delete fruits[0];
console.log(fruits);
//it will not move the item, if the index doesnt have an item

//splice

fruits.splice(0, 2, "Cherry", "Strawberry");
console.log(fruits);

//slice method
let arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3));
console.log(arr.concat([3, 4], [5, 6]));

//concat with arraylike objects

let array = [1, 2];

let arraylike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(array.concat(arraylike)); //[1,2,"something",'else']

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id === 1);
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers);

users.map((item) => console.log(item.name));

let numArr = [1, 5, 7, 2, 5, 4, 0];
console.log(numArr.sort());
//split and join

let names = "Biblo,Gandalf,Nazgul";
let arr1 = names.split(",");
console.log(arr1);

for (let name of arr1) {
  console.log(`A message to ${name}.`);
}

let arr2 = [1, 2, 3, 4, 5];
let result = arr2.reduce((sum, current) => sum + current, 0);
console.log(result);

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num);
}
//string is iterable

for (let char of "test") {
  console.log(char);
}

//Map and Set

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.size);

let john = { name: "John" };
//let ben = { name: "Ben" };
let visit = new Map();
visit.set(john, 123);

console.log(visit.get(john));

let johnson = { name: "Johnson" };
let ben = { name: "Ben" };

let visitCount = {};
visitCount[johnson] = 234;
visitCount[ben] = 123;

console.log(visitCount["[object Object]"]);

//chaining

map.set("1", "str1").set(1, "num").set(true, "bool1");

//iteration over a
let recipeMap = new Map([
  ["cucumber", 500],
  ["onion", 50],
  ["tomatoes", 350],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(entry);
}

//for each
recipeMap.forEach((value, key, map) => {
  console.log(`${key}:${value}`);
});

//Object.entries:Map from Object

let maps = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map.get(1));

let obj = {
  name: "John",
  age: 30,
};

let map1 = new Map(Object.entries(obj));
console.log(map1.get("name"));

let prices = Object.fromEntries([
  ["banana", 1],
  ["Orange", 2],
  ["meat", 4],
]);

console.log(prices.Orange);

//Object.fromEntries==> retrieves plain object from the map

let map2 = new Map();
map2.set("banana", 1);
map2.set("orange", 2);
map2.set("meat", 4);

let obj3 = Object.fromEntries(map2.entries());

console.log(obj3.orange);

//set => type 0f collection without keys

let set = new Set();

let A = { name: "John" };
let B = { name: "Pete" };
let C = { name: "Mary" };

set.add(A);
set.add(B);
set.add(C);
set.add(A);
set.add(B);

for (let user of set) {
  console.log(user.name);
}

let set1 = new Set(["Orange", "Apple", "banana"]);
for (let value of set) console.log(value);

set1.forEach((value, valueAgain, set) => {
  console.log(value);
});

//filter anagram

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

let arr3 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

//weakmap and weakset

let joe = { name: "Joe" };
//joe = null;
let array4 = [joe];
joe = null;

console.log(array4);
let map12 = new Map();
map12.set(joe, "...");
joe = null;
//console.log(map12.keys());

//weakmap

let weakMap = new WeakMap();
let objA = {};
weakMap.set(obj, "ok"); //it will work
//weakMap.set("test", "Whoops"); // it wont work test is not an object

//example
//visitcount.js

let visitCount5 = new Map();

function countUser(user) {
  let count = visitCount5.get(user) || 0;
  visitCount5.set(user, count + 1);
}

//another file, main.js

let john21 = { name: "John" };
countUser(john21);
john21 = null;

let student = {
  name: "John",
  age: 10,
  class: "V",
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

for (let value of Object.keys(student)) {
  console.log(value);
}

//transforming Objects

let pricesA = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// let doublePrices = Object
//   .fromEntries
//   //Object.entries(prices).map((entry) => entry[0], entry[1] * 2)
//   ();

// console.log(doublePrices.meat);

// function sumSalaries(salaries) {
//     let sum = 0;
//     for(let salary of Object.values(salaries))
// }

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let sum = 0;
for (let sal in salaries) {
  sum += salaries[sal];
}
console.log(sum);

//Destructuring Assignment

let nameArr = ["John", "Smith"];
let [fname, lName] = nameArr;
console.log(fname);
console.log(lName);

let [firstName, , lastName] = ["A", "B", "C", "D", "E", "F"]; // comma for skiiping element
console.log(firstName);
console.log(lastName);

//Works with any iterable on the right-side

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

//assign to anything at the left side

let user2 = ({}[(user.name, user.surName)] = "John Smith".split(""));
console.log(user.name);

//Looping with .entries()

let user4 = {
  name: "John",
  age: 30,
};

for (let [key, value] of Object.entries(user4)) {
  console.log(`${key}:${value}`);
}
//swap variables
let admin = "Jane";
let current = "Pete";
[admin, current] = [current, admin];
console.log(current);

//the rest operators

let [n1, n2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//it will only take number of items at the left side and omitted remains all

let [n3, n4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest);

//object destructuring

let options = {
  title: "menu",
  width: 100,
  height: 100,
};
//et { title, width, height } = options;
//console.log(title);
let { width: w, height: h, title } = options;
console.log(w);

//nested destructuring

let options1 = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["cake", "Donut"],
  extra: true,
};

let {
  size: { width, height },
  items: [i1, i2],
  title1 = "menu",
} = options1;

console.log(i1);
