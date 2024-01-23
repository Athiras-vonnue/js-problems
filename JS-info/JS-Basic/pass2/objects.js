let user = {
  name: "John",
  age: 30,
};

let key = "name";

console.log(user[key]);

let fruit = "Cherry";
let bag = {};
bag[fruit] = 5;

console.log(bag);

//Property value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user1 = makeUser("John", 30);
console.log(user.age);

//Property names limitation

let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return);

let user2 = { name: "John", age: 78 };
console.log("age" in user2);
console.log("blabla" in user2);

console.log(user2.data === undefined);

let user3 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user3) {
  console.log(key);
  console.log(user3[key]);
}

//ordered like an object

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britian",
  1: "USA",
};
for (let code in codes) {
  console.log(code);
}
//comparison by reference

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

const user4 = {
  name: "John",
};
user.name = "Pete";
//console.log(user.name);

//Object cloning and merging, Object.assign

let clone = {};
for (let key in user4) {
  clone[key] = user[key];
}

clone.name = "Tom";
console.log(user4.name);

let permissions1 = { canView: true };
let permissions2 = { canEDdit: true };

Object.assign(user4, permissions1, permissions2);

console.log(user4);

//Garbage collection

/*
 */

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);
console.log(family);

//constructor,operator "new"

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user6 = new User("Jack");
// console.log(user6.name);
// console.log(user6.isAdmin);

// function Person(name) {
//   (this.name = name), (this.isAdimn = true);
// }

// let person = new Person("Josmi");
// console.log(person.name);

//new

function Users(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}
//let john = Users("John");
//console.log(john.name);

//Optional Chaining

let user21 = null;

let person1 = {
  name: "John",
  money: 1000,
  toString() {
    return `{name: "${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
};

console.log(person1);
console.log(+person1);
console.log(person1 + 500);
//console.log(user21?.address);
//Accessing characters

let str = `Hello`;

console.log(str[0]);
//console.log(str.at(0));

/*
searching for a substring
 */

//str.indexOf

str = "Widget with id";
console.log(str.indexOf("Widget"));
console.log(str.indexOf("widget"));
console.log(str.indexOf("id"));

console.log("Widget with id".includes("Widget"));

str = "stringify";
console.log(str.slice(2, 5));

//splice method

let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr);

arr.splice(1, 1, "Early");
console.log(arr);

//iterators

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
for (let num of range) {
  console.log(num);
}
//Array.from

let arrayLike = {
  0: "hello",
  1: "world",
  2: "Welcome all",
  length: 3,
};

let arr1 = Array.from(arrayLike);
console.log(arr1);

let user12 = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user12));
console.log(Object.values(user12));
console.log(Object.entries(user12));

arr = [1, 2, 3, 4, 4, 6];
let [a1, b1, ...rest] = arr;
console.log(a1, b1, rest);
/*
 */
