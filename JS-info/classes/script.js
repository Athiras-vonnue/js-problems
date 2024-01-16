class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
let user = new User("Ram");
user.sayHi();

console.log(typeof User); //function
console.log(User === User.prototype.constructor); //true
console.log(User.prototype.sayHi); // function
console.log(Object.getOwnPropertyNames(User.prototype)); //constructor

//pure function

function User1(name) {
  this.name = name;
}

User1.prototype.sayHi = function () {
  console.log(this.name);
};

let user2 = new User1("John");
user2.sayHi();

//class expressions

let User12 = class {
  sayHi() {
    console.log("Hello");
  }
};

//class expressions may have name

let User2 = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
};

new User2().sayHi();
//console.log(MyClass); // class with name can access only inside the class

//we can make classes dynamically on demand

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
let User21 = makeClass("hello");
new User21().sayHi();

//Getters and setters

class User3 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 5) {
      console.log("Name is too short");
      return;
    }
    this._name = value;
  }
}

let user3 = new User3("John");
console.log(user3.name);
let user4 = new User3("anan");
console.log(user4.name);

//computed names[...]
class user5 {
  ["say" + "Hi"]() {
    console.log("Hello");
  }
}

new user5().sayHi();

//class fields

class User6 {
  name = "Athira";

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
new User6().sayHi();

let user6 = new User6();
console.log(user6.name);
console.log(User.prototype.name);

//we can assign  ore complex expressions and function calls

// class User {
//   name = prompt("Name please?", "Anna");
// }
// let user = new User();
// console.log(user.name);

//making bound methods with class fields

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}
let button = new Button("Hello");
button.click();

setTimeout(button.click, 1000); //losing 'this' , showing un defined

//approach 1: wrapper function

setTimeout(() => button.click(), 1000);

//approach 2: bind a method with object

class Btn {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  };
}

let btn = new Btn("hello");
setTimeout(btn.click, 1000);
