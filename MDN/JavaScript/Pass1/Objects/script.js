const person = {
  name: ["bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },

  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}`);
  },
};
person.introduceSelf();
person.bio();

//Bracket notation
console.log(person["age"]);
console.log(person.age);

person.age = 45;
person["name"]["first"] = "Cratchit";
person["name"]["last"] = "Joe";

console.log(person.age);
console.log(person["name"]["first"]);

console.log(person);
person["eyes"] = "hazel";
console.log(person);

//constructor

//before hand

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

//create new object with this

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

//Using constructors

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi I am ${this.name}`);
  };
}

const Ramya = new Person("Ramya");
Ramya.name;
// Ramya.introduceSelf();

//Object Prototyping

const myObj = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
// myObj.greet();
// console.log(myObj.toString());
// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

//Shadowing properties

const myDate = new Date(1995, 11, 17);
console.log(myDate.getFullYear());
myDate.getYear = function () {
  console.log("something else!");
};
myDate.getYear();

//setting a prototype

//using constructor

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, personPrototype);

const Reuben = new Person("Reuben");
Reuben.greet();

// const carl = Object.create(personPrototype);
// carl.greet();

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "greet"));
console.log(Object.hasOwn(Reuben, "name"));

class Persong {
  name;

  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
const giles = new Persong("Giles"); // call the constructor
giles.introduceSelf();

//omitting constructors

class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}

const spot = new Animal("Lion");
spot.sleep();

//Inheritance

class Professor extends Persong {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} Professor.`
    );
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(grade);
  }
}

const Walsh = new Professor("Walsh", "Psychology");
Walsh.introduceSelf();
Walsh.grade("my paper");

//Encapsulation

class student extends Persong {
  #year; // private member

  constructor(name, year) {
    super(name);
    this.#year = year;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
  }
  canStudyArchery() {
    return this.#year > 1;
  }
}

const summers = new student("Summers", 2);
summers.introduceSelf();
summers.canStudyArchery();
//summers.#year; ==> unabale to access  private members

//Private methods

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }
  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();
myExample.somePublicMethod();
// myExample.#somePrivateMethod();==> nable to access private methods

//creating new Objects
const obj = {
  property1: "value1",
  2: "value2",
  propertyn: "value3",
};

console.log(obj);

//creating an object

let x;
if (true) {
  x = { greeting: "hi there" };
}
console.log(x);

//way1: create an object with initializers

const studentData = {
  name: "xts",
  class: "III",
  Age: 8,
  sayHi: function () {
    console.log("==>", this.Age);
  },
};

studentData.sayHi();
console.log(studentData["name"]);
//way2: constructors

function studentDetails(name, grade, age) {
  this.name = name;
  this.grade = grade;
  this.age = age;
}
// function sayhi() {
//   console.log(`Hi Hello! My name ${this.name}`);
// }
let stud1 = new studentDetails("Ann", "III", 8);
console.log(stud1);
let stud2 = new studentDetails("John", "IV", 10);
console.log(stud2);
// studentData.sayhi = sayhi;

studentData.sayHi;
//comparing two objects

let fruit = { name: "Apple" };
let fruitbear = { name: "Apple" };
console.log(fruit);
console.log(fruit.name === fruitbear.name);
